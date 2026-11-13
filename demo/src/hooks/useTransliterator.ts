import { useEffect, useMemo, useRef, useState } from "react";
import { detectLanguage, Language, languages, validateLanguage } from "transliterate-any-to-any";
import { isLoadError, useTransliterateWorker } from "./useTransliterateWorker";
import type { SpeechInput } from "./useSpeechRecognition";
import type { SpeechOutput } from "./useSpeechSynthesis";
import { useQueryParams } from "./useQueryParams.ts";
import {
  AUTO_DETECT,
  DEBOUNCE_MS,
  DEFAULT_LANGS,
  LOCAL_STORAGE_KEYS,
  MAX_CHARS,
  SITE_URL,
  type SourceLanguage,
} from "../constants";

function getErrorMessage(err: Error): string {
  if (!navigator.onLine && isLoadError(err.message)) {
    return "This language pair isn't available offline yet. To make it available offline, use it once while online.";
  }
  return err.message || "Transliteration failed.";
}

// The system's languages, most preferred first: the browser's, or the OS's in
// the mobile app (where they're set with setSystemLocales before rendering)
let systemLocales: readonly string[] =
  typeof navigator === "undefined" ? [] : (navigator.languages ?? [navigator.language]);

export function setSystemLocales(locales: readonly string[]) {
  systemLocales = locales;
}

// Codes that differ from ours: Norwegian Bokmål/Nynorsk, Serbo-Croatian, and
// Java's legacy ones for Hebrew and Indonesian
const LOCALE_ALIASES: Record<string, Language> = {
  nb: "no",
  nn: "no",
  sh: "sr",
  iw: "he",
  in: "id",
};

// The first of the system's languages that we support
function getSystemLang(): Language | undefined {
  for (const locale of systemLocales) {
    const code = locale.toLowerCase().split(/[-_]/)[0];
    const lang = LOCALE_ALIASES[code] ?? code;
    if (Object.hasOwn(languages, lang)) return lang as Language;
  }
  return undefined;
}

function getInitialLangFrom(): SourceLanguage {
  // try to get from URL
  const params = new URLSearchParams(window.location.search);
  const paramFrom = params.get("from");
  if (paramFrom) return paramFrom as SourceLanguage;
  // try to get from localStorage
  if (typeof window === "undefined") return DEFAULT_LANGS.langFrom;
  const stored = window.localStorage.getItem(LOCAL_STORAGE_KEYS.langFrom);
  if (stored) return stored as SourceLanguage;
  // fallback to the system's language
  return getSystemLang() ?? DEFAULT_LANGS.langFrom;
}

function getInitialLangTo(): Language {
  // try to get from URL
  const params = new URLSearchParams(window.location.search);
  const paramTo = params.get("to");
  if (paramTo) return paramTo as Language;
  // try to get from localStorage
  if (typeof window === "undefined") return DEFAULT_LANGS.langTo;
  const stored = window.localStorage.getItem(LOCAL_STORAGE_KEYS.langTo);
  if (stored) return stored as Language;
  // fallback to default, unless the source (see above) already is it
  return getInitialLangFrom() === DEFAULT_LANGS.langTo ? "en" : DEFAULT_LANGS.langTo;
}

// Whether a language was already chosen: in the URL or in a previous visit
function hasChosenLangs(): boolean {
  const params = new URLSearchParams(window.location.search);
  if (params.get("from") || params.get("to")) return true;
  return Boolean(
    window.localStorage.getItem(LOCAL_STORAGE_KEYS.langFrom) ||
    window.localStorage.getItem(LOCAL_STORAGE_KEYS.langTo),
  );
}

// The language of the text, or undefined when it has none or mixes several
function tryDetectLanguage(text: string): Language | undefined {
  try {
    return detectLanguage(text);
  } catch {
    return undefined;
  }
}

// The generic title from index.html, kept until a language is chosen
const DEFAULT_TITLE = typeof document === "undefined" ? "" : document.title;

/**
 * The state and behaviour of the transliterator, shared by the PWA's card and
 * the mobile app's screen, which only differ in layout and in these options:
 * - `speech`: voice input (the Web Speech API, or the native one in the app)
 * - `tts`: reading the texts aloud (likewise)
 * - `copyText`: writes the transliteration, or a link to it, to the clipboard
 * - `syncUrl`: keeps the languages and the text in the URL, with a history
 *   entry for each change, so that they can be shared and survive a reload
 * - `suppressErrors`: hides errors while something else is shown in their place
 */
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
  const [defaultLangs] = useState(() => (hasChosenLangs() ? null : { langFrom, langTo }));
  const langsChosenRef = useRef(false);
  const [sourceText, setSourceText] = useState("");
  const [targetText, setTargetText] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [swapRotation, setSwapRotation] = useState(0);
  const [retryKey, setRetryKey] = useState(0);
  const [rejected, setRejected] = useState<{ text: string; lang: SourceLanguage } | null>(null);
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
  const loadFailedRef = useRef(false);

  const {
    params: { paramFrom, paramTo, paramText },
    paramsChanged,
    setParamsChanged,
  } = useQueryParams();

  const {
    isSupported: micSupported,
    isListening,
    start: startListening,
    stop: stopListening,
  } = speech;

  // With "Detect language", the language detected in the text, if any (which
  // is what transliterate() detects too, as it's given no source language)
  const autoDetectedLang = useMemo(
    () => (langFrom === AUTO_DETECT ? tryDetectLanguage(sourceText) : undefined),
    [langFrom, sourceText],
  );
  const sourceLang = langFrom === AUTO_DETECT ? autoDetectedLang : langFrom;

  // Voice input without a source language listens for the system's one
  const fromLocale = useMemo(
    () => languages[sourceLang ?? getSystemLang() ?? "en"]?.locale ?? "en-US",
    [sourceLang],
  );
  const toLocale = useMemo(() => languages[langTo]?.locale ?? "en-US", [langTo]);

  const { speakingId, speak, stop: stopSpeaking } = tts;

  // Debounced transliteration: fires MAX_CHARS/DEBOUNCE_MS after the last keystroke or language change,
  // and ignores a response that arrives after a newer request has already been fired
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
          const params = new URLSearchParams({
            from: langFrom,
            to: langTo,
            text: sourceText,
          });
          history.pushState({}, "", `/?${params.toString()}`);
        }
      }

      // Kept as is (after the URL is updated, so that it has the text too): a
      // text in the target language, or one without letters (which has no
      // language to detect, but would stay the same in any language)
      if (sourceLang === langTo || (langFrom === AUTO_DETECT && !/\p{L}/u.test(sourceText))) {
        setTargetText(sourceText);
        setErrorMsg(null);
        setLoading(false);
        return;
      }

      // A text that doesn't match the source language isn't sent to the worker
      // when its language can be detected: a switch to it is suggested instead
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

      // With "Detect language", a text whose language can't be detected isn't
      // sent to the worker, which would only fail to detect it the same way
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

      run(sourceText, langFrom === AUTO_DETECT ? undefined : langFrom, langTo)
        .then(result => {
          if (thisId === requestIdRef.current) {
            loadFailedRef.current = false;
            setTargetText(result);
            setErrorMsg(null);
          }
        })
        .catch((err: Error) => {
          if (thisId === requestIdRef.current) {
            loadFailedRef.current = isLoadError(err.message);
            if (!loadFailedRef.current) setRejected({ text: sourceText, lang: langFrom });
            setTargetText("");
            setErrorMsg(getErrorMessage(err));
          }
        })
        .finally(() => {
          if (thisId === requestIdRef.current) {
            setLoading(false);
          }
        });
    }, DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [sourceText, langFrom, sourceLang, langTo, run, retryKey, syncUrl]);

  // A language pair that failed to load (e.g. offline) is loaded again as soon
  // as the connection is back, without waiting for the next keystroke
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

  // The page's title names the language pair (for search engines too), once
  // one is chosen: in the URL, in a previous visit, or by changing a language
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
    if (!paramFrom || !paramTo) {
      const params = new URLSearchParams({
        from: langFrom,
        to: langTo,
        text: sourceText,
      });
      history.replaceState({}, "", `/?${params.toString()}`);
      return;
    }

    if (sourceText) {
      return;
    }

    if (dontPushToHistory.current) {
      dontPushToHistory.current = false;
    } else {
      const params = new URLSearchParams({
        from: langFrom,
        to: langTo,
        text: sourceText,
      });
      history.pushState({}, "", `/?${params.toString()}`);
    }
  }, [sourceText, langFrom, langTo, syncUrl]);

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
    }
  }, [paramFrom, paramTo, paramText, paramsChanged, syncUrl]);

  const sourceRejected = rejected?.text === sourceText && rejected.lang === langFrom;

  // The language the source text looks like, while the text and the source language stay the same
  const detectedLang =
    !suppressErrors && detected?.text === sourceText && detected.from === langFrom
      ? detected.lang
      : null;

  // A text stops being read aloud as soon as it or its language changes, or
  // its Listen button gets disabled (which would leave no way to stop it)
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

  // With "Detect language", only once a language other than the target is
  // detected, which then becomes the target
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

  // A link that opens the PWA with the same languages and source text
  const handleShare = async () => {
    if (!targetText) return;
    const params = new URLSearchParams({ from: langFrom, to: langTo, text: sourceText });
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
