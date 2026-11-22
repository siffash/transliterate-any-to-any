import { useCallback, useEffect, useRef, useState } from "react";
import { QueueStrategy, TextToSpeech } from "@capacitor-community/text-to-speech";
import {
  findVoiceLang,
  SPEECH_OUTPUT_FAILED,
  type SpeechOutput,
} from "../../src/hooks/useSpeechSynthesis";

const LANGUAGES_ATTEMPTS = 30;
const LANGUAGES_RETRY_MS = 500;

const UNSUPPORTED_LANGUAGE = "This language is not supported.";

const getMessage = (error: unknown) =>
  (error as { message?: string } | null)?.message === UNSUPPORTED_LANGUAGE
    ? "Listening isn't available for this language."
    : SPEECH_OUTPUT_FAILED;

export function useNativeSpeechSynthesis(): SpeechOutput {
  const [languages, setLanguages] = useState<string[]>([]);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const speakingIdRef = useRef<string | null>(null);
  const sessionRef = useRef(0);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const load = async (attempt: number) => {
      const found = await TextToSpeech.getSupportedLanguages()
        .then(result => result.languages ?? [])
        .catch(() => []);
      if (cancelled) return;
      if (found.length) setLanguages(found);
      else if (attempt < LANGUAGES_ATTEMPTS) {
        timer = setTimeout(() => load(attempt + 1), LANGUAGES_RETRY_MS);
      }
    };
    load(1);
    return () => {
      cancelled = true;
      clearTimeout(timer);
      TextToSpeech.stop().catch(() => {});
    };
  }, []);

  const setSpeaking = useCallback((id: string | null) => {
    speakingIdRef.current = id;
    setSpeakingId(id);
  }, []);

  const canSpeak = useCallback(
    (locale: string) => findVoiceLang(locale, languages) !== null,
    [languages],
  );

  const speak = useCallback(
    (id: string, text: string, locale: string, onError?: (message: string) => void) => {
      const lang = findVoiceLang(locale, languages);
      if (!lang) return;
      const session = ++sessionRef.current;
      setSpeaking(id);
      TextToSpeech.speak({ text, lang, queueStrategy: QueueStrategy.Flush })
        .then(() => {
          if (session === sessionRef.current) setSpeaking(null);
        })
        .catch((error: unknown) => {
          if (session !== sessionRef.current) return;
          setSpeaking(null);
          onError?.(getMessage(error));
        });
    },
    [languages, setSpeaking],
  );

  const stop = useCallback(
    (id?: string) => {
      if (speakingIdRef.current === null) return;
      if (id !== undefined && speakingIdRef.current !== id) return;
      sessionRef.current++;
      TextToSpeech.stop().catch(() => {});
      setSpeaking(null);
    },
    [setSpeaking],
  );

  return { isSupported: languages.length > 0, canSpeak, speakingId, speak, stop };
}
