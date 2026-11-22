import { useEffect, useMemo, useRef, useState } from "react";
import {
  detectLanguage,
  Language,
  languages,
  Spelling,
  spellingAffects,
  validateLanguage,
} from "transliterate-any-to-any";
import { isLoadError, useTransliterateWorker } from "./useTransliterateWorker";
import type { SpeechInput } from "./useSpeechRecognition";
import type { SpeechOutput } from "./useSpeechSynthesis";
import { isLanguage, isSourceLanguage, isSpelling, useQueryParams } from "./useQueryParams.ts";
import {
  AUTO_DETECT,
  DEBOUNCE_MS,
  DEFAULT_LANGS,
  LOCAL_STORAGE_KEYS,
  MAX_CHARS,
  SITE_URL,
  type SourceLanguage,
} from "../constants";

function getErrorMessage(err: Error, withSpelling: boolean): string {
  if (!navigator.onLine && isLoadError(err.message)) {
    const pair = withSpelling ? "This language pair with this spelling" : "This language pair";
    return `${pair} isn't available offline yet. To make it available offline, use it once while online.`;
  }
  return err.message || "Transliteration failed.";
}

let systemLocales: readonly string[] =
  typeof navigator === "undefined" ? [] : (navigator.languages ?? [navigator.language]);

export function setSystemLocales(locales: readonly string[]) {
  systemLocales = locales;
}

const LOCALE_ALIASES: Record<string, Language> = {
  nb: "no",
  nn: "no",
  sh: "sr",
  iw: "he",
  in: "id",
};

function getSystemLang(): Language | undefined {
  for (const locale of systemLocales) {
    const code = locale.toLowerCase().split(/[-_]/)[0];
    const lang = LOCALE_ALIASES[code] ?? code;
    if (Object.hasOwn(languages, lang)) return lang as Language;
  }
  return undefined;
}

function getInitialLangFrom(): SourceLanguage {
  const params = new URLSearchParams(window.location.search);
  const paramFrom = params.get("from");
  if (isSourceLanguage(paramFrom)) return paramFrom;
  if (typeof window === "undefined") return DEFAULT_LANGS.langFrom;
  const stored = window.localStorage.getItem(LOCAL_STORAGE_KEYS.langFrom);
  if (isSourceLanguage(stored)) return stored;
  return getSystemLang() ?? DEFAULT_LANGS.langFrom;
}

function getInitialLangTo(): Language {
  const params = new URLSearchParams(window.location.search);
  const paramTo = params.get("to");
  if (isLanguage(paramTo)) return paramTo;
  if (typeof window === "undefined") return DEFAULT_LANGS.langTo;
  const stored = window.localStorage.getItem(LOCAL_STORAGE_KEYS.langTo);
  if (isLanguage(stored)) return stored;
  return getInitialLangFrom() === DEFAULT_LANGS.langTo ? "en" : DEFAULT_LANGS.langTo;
}

function spellingMatters(from: SourceLanguage, to: Language, text: string): boolean {
  const source = from === AUTO_DETECT ? tryDetectLanguage(text) : from;
  return !!source && spellingAffects({ from: source, to });
}

function getInitialSpelling(): Spelling {
  const params = new URLSearchParams(window.location.search);
  const from = params.get("from");
  const to = params.get("to");
  const param = params.get("spelling");
  if (
    isSpelling(param) &&
    isSourceLanguage(from) &&
    isLanguage(to) &&
    spellingMatters(from, to, params.get("text") ?? "")
  ) {
    return param;
  }
  const stored = window.localStorage.getItem(LOCAL_STORAGE_KEYS.spelling);
  return isSpelling(stored) ? stored : "orthographic";
}

function getUrlParams(from: SourceLanguage, to: Language, text: string, spelling: Spelling) {
  const params = new URLSearchParams({ from, to, text });
  if (spellingMatters(from, to, text)) params.set("spelling", spelling);
  return params;
}

function pushUrl(params: URLSearchParams) {
  if (window.location.search === `?${params.toString()}`) return;
  history.pushState({}, "", `/?${params.toString()}`);
}

function getInitialText(syncUrl: boolean): string {
  if (!syncUrl) return "";
  const params = new URLSearchParams(window.location.search);
  if (!isSourceLanguage(params.get("from")) || !isLanguage(params.get("to"))) return "";
  return params.get("text") ?? "";
}

function hasChosenLangs(): boolean {
  const params = new URLSearchParams(window.location.search);
  if (isSourceLanguage(params.get("from")) || isLanguage(params.get("to"))) return true;
  return (
    isSourceLanguage(window.localStorage.getItem(LOCAL_STORAGE_KEYS.langFrom)) ||
    isLanguage(window.localStorage.getItem(LOCAL_STORAGE_KEYS.langTo))
  );
}

function tryDetectLanguage(text: string): Language | undefined {
  try {
    return detectLanguage(text);
  } catch {
    return undefined;
  }
}

const DEFAULT_TITLE = typeof document === "undefined" ? "" : document.title;

export function useTransliterator({
  speech,
  tts,
  copyText,
  syncUrl,
  suppressErrors = false,
}: {
  speech: SpeechInput;
  tts: SpeechOutput;
  copyText: (text: string) => Promise<void>;
  syncUrl: boolean;
  suppressErrors?: boolean;
}) {
  const [langFrom, setLangFrom] = useState<SourceLanguage>(getInitialLangFrom);
  const [langTo, setLangTo] = useState<Language>(getInitialLangTo);
  const [spelling, setSpelling] = useState<Spelling>(getInitialSpelling);
  const [defaultLangs] = useState(() => (hasChosenLangs() ? null : { langFrom, langTo }));
  const langsChosenRef = useRef(false);
  const [sourceText, setSourceText] = useState(() => getInitialText(syncUrl));
  const [targetText, setTargetText] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [swapRotation, setSwapRotation] = useState(0);
  const [retryKey, setRetryKey] = useState(0);
  const [rejected, setRejected] = useState<{ text: string; lang: SourceLanguage } | null>(null);
  const [unavailable, setUnavailable] = useState<{
    text: string;
    from: SourceLanguage;
    to: Language;
    spelling: Spelling;
  } | null>(null);
  const [detected, setDetected] = useState<{
    text: string;
    from: SourceLanguage;
    lang: Language;
  } | null>(null);

  const { run } = useTransliterateWorker();
  const sourceTextInputRef = useRef<HTMLInputElement>(null);
  const requestIdRef = useRef(0);
  const baseTextRef = useRef("");
  const dontPushToHistory = useRef(false);
  const urlSyncedRef = useRef(false);
  const loadFailedRef = useRef(false);

  const {
    params: { paramFrom, paramTo, paramText, paramSpelling },
    paramsChanged,
    setParamsChanged,
  } = useQueryParams();

  const {
    isSupported: micSupported,
    isListening,
    start: startListening,
    stop: stopListening,
  } = speech;

  const autoDetectedLang = useMemo(
    () => (langFrom === AUTO_DETECT ? tryDetectLanguage(sourceText) : undefined),
    [langFrom, sourceText],
  );
  const sourceLang = langFrom === AUTO_DETECT ? autoDetectedLang : langFrom;

  const fromLocale = useMemo(
    () => languages[sourceLang ?? getSystemLang() ?? "en"]?.locale ?? "en-US",
    [sourceLang],
  );
  const toLocale = useMemo(() => languages[langTo]?.locale ?? "en-US", [langTo]);

  const { speakingId, speak, stop: stopSpeaking } = tts;

  useEffect(() => {
    if (!sourceText.trim()) {
      setTargetText("");
      setErrorMsg(null);
      setLoading(false);
      return;
    }
    const thisId = ++requestIdRef.current;
    setLoading(true);

    const timer = setTimeout(() => {
      if (syncUrl) {
        if (dontPushToHistory.current) {
          dontPushToHistory.current = false;
        } else {
          pushUrl(getUrlParams(langFrom, langTo, sourceText, spelling));
        }
      }

      if (sourceLang === langTo || (langFrom === AUTO_DETECT && !/\p{L}/u.test(sourceText))) {
        setTargetText(sourceText);
        setErrorMsg(null);
        setLoading(false);
        return;
      }

      if (langFrom !== AUTO_DETECT && !validateLanguage(langFrom, sourceText)) {
        let lang: Language | undefined;
        try {
          lang = detectLanguage(sourceText);
        } catch (err) {
          setRejected({ text: sourceText, lang: langFrom });
          setTargetText("");
          setErrorMsg((err as Error).message);
          setLoading(false);
          return;
        }
        if (lang) {
          setRejected({ text: sourceText, lang: langFrom });
          setDetected({ text: sourceText, from: langFrom, lang });
          setTargetText("");
          setErrorMsg(null);
          setLoading(false);
          return;
        }
      }

      if (langFrom === AUTO_DETECT && !sourceLang) {
        let message = "Couldn't detect the language of the text.";
        try {
          detectLanguage(sourceText);
        } catch (err) {
          message = (err as Error).message;
        }
        setRejected({ text: sourceText, lang: langFrom });
        setTargetText("");
        setErrorMsg(message);
        setLoading(false);
        return;
      }

      run(sourceText, langFrom === AUTO_DETECT ? undefined : langFrom, langTo, spelling)
        .then(result => {
          if (thisId === requestIdRef.current) {
            loadFailedRef.current = false;
            setUnavailable(null);
            setTargetText(result);
            setErrorMsg(null);
          }
        })
        .catch((err: Error) => {
          if (thisId === requestIdRef.current) {
            loadFailedRef.current = isLoadError(err.message);
            if (!loadFailedRef.current) setRejected({ text: sourceText, lang: langFrom });
            const withSpelling = !!sourceLang && spellingAffects({ from: sourceLang, to: langTo });
            setUnavailable(
              loadFailedRef.current && withSpelling
                ? { text: sourceText, from: langFrom, to: langTo, spelling }
                : null,
            );
            setTargetText("");
            setErrorMsg(getErrorMessage(err, withSpelling));
          }
        })
        .finally(() => {
          if (thisId === requestIdRef.current) {
            setLoading(false);
          }
        });
    }, DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [sourceText, langFrom, sourceLang, langTo, spelling, run, retryKey, syncUrl]);

  useEffect(() => {
    const onOnline = () => {
      if (!loadFailedRef.current) return;
      dontPushToHistory.current = true;
      setRetryKey(key => key + 1);
    };
    window.addEventListener("online", onOnline);
    return () => window.removeEventListener("online", onOnline);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEYS.langFrom, langFrom);
  }, [langFrom]);

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEYS.langTo, langTo);
  }, [langTo]);

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEYS.spelling, spelling);
  }, [spelling]);

  useEffect(() => {
    if (!syncUrl) return;
    langsChosenRef.current ||=
      !defaultLangs || langFrom !== defaultLangs.langFrom || langTo !== defaultLangs.langTo;
    const fromName = langFrom === AUTO_DETECT ? "" : languages[langFrom]?.name;
    const toName = languages[langTo]?.name;
    document.title =
      langsChosenRef.current && fromName !== undefined && toName
        ? `Transliterate ${fromName ? `${fromName} ` : ""}to ${toName}`
        : DEFAULT_TITLE;
  }, [langFrom, langTo, defaultLangs, syncUrl]);

  useEffect(() => {
    if (!syncUrl) return;

    const params = new URLSearchParams(window.location.search);
    const paramFrom = params.get("from");
    const paramTo = params.get("to");
    const firstSync = !urlSyncedRef.current;
    urlSyncedRef.current = true;
    if (firstSync || !isSourceLanguage(paramFrom) || !isLanguage(paramTo)) {
      const params = getUrlParams(langFrom, langTo, sourceText, spelling);
      history.replaceState({}, "", `/?${params.toString()}`);
      return;
    }

    if (sourceText) {
      return;
    }

    if (dontPushToHistory.current) {
      dontPushToHistory.current = false;
    } else {
      pushUrl(getUrlParams(langFrom, langTo, sourceText, spelling));
    }
  }, [sourceText, langFrom, langTo, spelling, syncUrl]);

  useEffect(() => {
    if (!syncUrl) return;

    if (paramsChanged) {
      setParamsChanged(false);
      dontPushToHistory.current = true;
    }

    if (paramFrom && paramTo) {
      setLangFrom(paramFrom);
      setLangTo(paramTo);
      setSourceText(paramText);
      if (paramSpelling && spellingMatters(paramFrom, paramTo, paramText)) {
        setSpelling(paramSpelling);
      }
    }
  }, [paramFrom, paramTo, paramText, paramSpelling, paramsChanged, syncUrl]);

  const sourceRejected = rejected?.text === sourceText && rejected.lang === langFrom;

  const spellingUnavailable =
    !!errorMsg &&
    unavailable?.text === sourceText &&
    unavailable.from === langFrom &&
    unavailable.to === langTo &&
    unavailable.spelling === spelling;

  const detectedLang =
    !suppressErrors && detected?.text === sourceText && detected.from === langFrom
      ? detected.lang
      : null;

  useEffect(() => stopSpeaking("source"), [sourceText, langFrom, sourceRejected, stopSpeaking]);
  useEffect(() => stopSpeaking("target"), [targetText, langTo, loading, stopSpeaking]);

  useEffect(() => {
    if (suppressErrors && errorMsg) {
      setErrorMsg(null);
    }
  }, [suppressErrors, errorMsg]);

  const handleSourceChange = (value: string) => {
    setSourceText(value.slice(0, MAX_CHARS));
    setErrorMsg(null);
  };

  const canSwap = sourceLang !== undefined && sourceLang !== langTo;

  const handleSwap = () => {
    if (!sourceLang || !canSwap) return;
    setSwapRotation(r => r + 180);
    setLangFrom(langTo);
    setLangTo(sourceLang);
    if (targetText) setSourceText(targetText);
  };

  const handleClear = () => {
    setSourceText("");
    setTargetText("");
    setErrorMsg(null);
    if (isListening) stopListening();
    sourceTextInputRef.current?.focus();
  };

  const handleCopy = async () => {
    if (!targetText) return;
    try {
      await copyText(targetText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setErrorMsg("Could not copy to clipboard.");
    }
  };

  const handleShare = async () => {
    if (!targetText) return;
    const params = getUrlParams(langFrom, langTo, sourceText, spelling);
    try {
      await copyText(`${SITE_URL}?${params.toString()}`);
      setLinkCopied(true);
    } catch {
      setErrorMsg("Could not copy to clipboard.");
    }
  };

  const handleMicToggle = () => {
    if (isListening) {
      stopListening();
      return;
    }
    stopSpeaking();
    baseTextRef.current = sourceText;
    startListening(
      fromLocale,
      (finalTranscript, interimTranscript) => {
        const base = baseTextRef.current;
        const spoken = `${finalTranscript}${interimTranscript}`;
        const combined = base && spoken ? `${base} ${spoken}` : base || spoken;
        setSourceText(combined.slice(0, MAX_CHARS));
      },
      message => setErrorMsg(message),
    );
  };

  const toggleSpeaking = (id: "source" | "target", text: string, locale: string) => {
    if (speakingId === id) {
      stopSpeaking();
      return;
    }
    speak(id, text, locale, message => setErrorMsg(message));
  };

  const handleSourceListen = () => toggleSpeaking("source", sourceText, fromLocale);
  const handleTargetListen = () => toggleSpeaking("target", targetText, toLocale);

  const handleFromLang = (lang: string) => {
    if (lang === langTo && canSwap) {
      handleSwap();
    } else if (lang === langTo) {
      setLangFrom(langTo);
      setLangTo(langTo === DEFAULT_LANGS.langTo ? "en" : DEFAULT_LANGS.langTo);
    } else {
      setLangFrom(lang as SourceLanguage);
    }
    setTargetText("");
    setErrorMsg(null);
  };

  const handleSwitchToDetected = () => {
    if (detectedLang) handleFromLang(detectedLang);
  };

  const handleDismissDetected = () => setDetected(null);

  const handleToLang = (lang: string) => {
    if (lang === langFrom) {
      handleSwap();
    } else {
      setLangTo(lang as Language);
    }
    setTargetText("");
    setErrorMsg(null);
  };

  return {
    langFrom,
    langTo,
    spelling,
    setSpelling,
    spellingApplies: !!sourceLang && spellingAffects({ from: sourceLang, to: langTo }),
    spellingUnavailable,
    sourceLang,
    autoDetectedLang,
    sourceText,
    targetText,
    loading,
    errorMsg,
    setErrorMsg,
    detectedLang,
    copied,
    linkCopied,
    setLinkCopied,
    swapRotation,
    canSwap,
    charCount: sourceText.length,
    micSupported,
    isListening,
    ttsSupported: tts.isSupported,
    sourceListen: {
      langSupported: !sourceLang || tts.canSpeak(fromLocale),
      disabled:
        !sourceLang ||
        !tts.canSpeak(fromLocale) ||
        !sourceText.trim() ||
        sourceRejected ||
        isListening,
      speaking: speakingId === "source",
    },
    targetListen: {
      langSupported: tts.canSpeak(toLocale),
      disabled: !tts.canSpeak(toLocale) || !targetText.trim() || loading || isListening,
      speaking: speakingId === "target",
    },
    sourceTextInputRef,
    handleSourceChange,
    handleSwap,
    handleClear,
    handleCopy,
    handleShare,
    handleMicToggle,
    handleSourceListen,
    handleTargetListen,
    handleFromLang,
    handleToLang,
    handleSwitchToDetected,
    handleDismissDetected,
  };
}
