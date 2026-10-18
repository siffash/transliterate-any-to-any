import { useEffect, useMemo, useRef, useState } from "react";
import { Language, languages } from "transliterate-any-to-any";
import { isLoadError, useTransliterateWorker } from "./useTransliterateWorker";
import type { SpeechInput } from "./useSpeechRecognition";
import { useQueryParams } from "./useQueryParams.ts";
import { DEBOUNCE_MS, DEFAULT_LANGS, LOCAL_STORAGE_KEYS, MAX_CHARS } from "../constants";

function getErrorMessage(err: Error): string {
  if (!navigator.onLine && isLoadError(err.message)) {
    return "This language pair isn't available offline yet. To make it available offline, use it once while online.";
  }
  return err.message || "Transliteration failed.";
}

function getInitialLangFrom(): Language {
  // try to get from URL
  const params = new URLSearchParams(window.location.search);
  const paramFrom = params.get("from");
  if (paramFrom) return paramFrom as Language;
  // try to get from localStorage
  if (typeof window === "undefined") return DEFAULT_LANGS.langFrom;
  const stored = window.localStorage.getItem(LOCAL_STORAGE_KEYS.langFrom);
  if (stored) return stored as Language;
  // fallback to default
  return DEFAULT_LANGS.langFrom;
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
  // fallback to default
  return DEFAULT_LANGS.langTo;
}

/**
 * The state and behaviour of the transliterator, shared by the PWA's card and
 * the mobile app's screen, which only differ in layout and in these options:
 * - `speech`: voice input (the Web Speech API, or the native one in the app)
 * - `copyText`: writes the transliteration to the clipboard
 * - `syncUrl`: keeps the languages and the text in the URL, with a history
 *   entry for each change, so that they can be shared and survive a reload
 * - `suppressErrors`: hides errors while something else is shown in their place
 */
export function useTransliterator({
  speech,
  copyText,
  syncUrl,
  suppressErrors = false,
}: {
  speech: SpeechInput;
  copyText: (text: string) => Promise<void>;
  syncUrl: boolean;
  suppressErrors?: boolean;
}) {
  const [langFrom, setLangFrom] = useState<Language>(getInitialLangFrom);
  const [langTo, setLangTo] = useState<Language>(getInitialLangTo);
  const [sourceText, setSourceText] = useState("");
  const [targetText, setTargetText] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [swapRotation, setSwapRotation] = useState(0);
  const [retryKey, setRetryKey] = useState(0);

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

  const fromLocale = useMemo(() => languages[langFrom]?.locale ?? "en-US", [langFrom]);

  // Debounced transliteration: fires MAX_CHARS/DEBOUNCE_MS after the last keystroke or language change,
  // and ignores a response that arrives after a newer request has already been fired
  useEffect(() => {
    if (!sourceText.trim()) {
      setTargetText("");
      setErrorMsg(null);
      setLoading(false);
      return;
    }
    if (langFrom === langTo) {
      setTargetText(sourceText);
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

      run(sourceText, langFrom, langTo)
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
  }, [sourceText, langFrom, langTo, run, retryKey, syncUrl]);

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

  useEffect(() => {
    if (errorMsg) {
      setTargetText("");
    }
  }, [errorMsg]);

  useEffect(() => {
    if (suppressErrors && errorMsg) {
      setErrorMsg(null);
    }
  }, [suppressErrors, errorMsg]);

  const handleSourceChange = (value: string) => {
    setSourceText(value.slice(0, MAX_CHARS));
    setErrorMsg(null);
  };

  const handleSwap = () => {
    setSwapRotation(r => r + 180);
    setLangFrom(langTo);
    setLangTo(langFrom);
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

  const handleMicToggle = () => {
    if (isListening) {
      stopListening();
      return;
    }
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

  const handleFromLang = (lang: string) => {
    if (lang === langTo) {
      handleSwap();
    } else {
      setLangFrom(lang as Language);
    }
    setTargetText("");
    setErrorMsg(null);
  };

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
    sourceText,
    targetText,
    loading,
    errorMsg,
    setErrorMsg,
    copied,
    swapRotation,
    charCount: sourceText.length,
    micSupported,
    isListening,
    sourceTextInputRef,
    handleSourceChange,
    handleSwap,
    handleClear,
    handleCopy,
    handleMicToggle,
    handleFromLang,
    handleToLang,
  };
}
