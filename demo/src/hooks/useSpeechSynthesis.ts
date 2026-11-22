import { useCallback, useEffect, useRef, useState } from "react";

type ErrorCallback = (message: string) => void;

const LANGUAGE_ALIASES: Record<string, string[]> = {
  nb: ["no"],
  he: ["iw"],
  id: ["in"],
};

const normalizeTag = (tag: string) => tag.replace(/_/g, "-").toLowerCase();

export function findVoiceLang(locale: string, available: readonly string[]): string | null {
  const wanted = normalizeTag(locale);
  const [language] = wanted.split("-");
  const languages = [language, ...(LANGUAGE_ALIASES[language] ?? [])];
  const exact = available.find(tag => normalizeTag(tag) === wanted);
  if (exact) return exact;
  return available.find(tag => languages.includes(normalizeTag(tag).split("-")[0])) ?? null;
}

const FRIENDLY: Record<string, string> = {
  "not-allowed": "The browser didn't allow reading the text aloud.",
  "language-unavailable": "Listening isn't available for this language.",
  "voice-unavailable": "Listening isn't available for this language.",
  "audio-busy": "The speaker is busy — try again in a moment.",
  "audio-hardware": "No speaker was found.",
  network: "A network error interrupted listening.",
};

export const SPEECH_OUTPUT_FAILED = "Couldn't read the text aloud.";

const getSynth = () =>
  typeof window !== "undefined" && "speechSynthesis" in window && window.speechSynthesis
    ? window.speechSynthesis
    : null;

export function useSpeechSynthesis() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>(() => getSynth()?.getVoices() ?? []);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const speakingIdRef = useRef<string | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const synth = getSynth();
    if (!synth) return;
    const update = () => setVoices(synth.getVoices());
    update();
    synth.addEventListener("voiceschanged", update);
    return () => {
      synth.removeEventListener("voiceschanged", update);
      utteranceRef.current = null;
      synth.cancel();
    };
  }, []);

  const setSpeaking = useCallback((id: string | null) => {
    speakingIdRef.current = id;
    setSpeakingId(id);
  }, []);

  const findVoice = useCallback(
    (locale: string) => {
      const lang = findVoiceLang(
        locale,
        voices.map(voice => voice.lang),
      );
      if (!lang) return null;
      const sameLang = voices.filter(voice => voice.lang === lang);
      return sameLang.find(voice => voice.default) ?? sameLang[0];
    },
    [voices],
  );

  const canSpeak = useCallback((locale: string) => findVoice(locale) !== null, [findVoice]);

  const speak = useCallback(
    (id: string, text: string, locale: string, onError?: ErrorCallback) => {
      const synth = getSynth();
      const voice = findVoice(locale);
      if (!synth || !voice) return;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voice;
      utterance.lang = voice.lang;
      const isCurrent = () => utteranceRef.current === utterance;
      utterance.onend = () => {
        if (!isCurrent()) return;
        utteranceRef.current = null;
        setSpeaking(null);
      };
      utterance.onerror = event => {
        if (!isCurrent()) return;
        utteranceRef.current = null;
        setSpeaking(null);
        if (event.error !== "interrupted" && event.error !== "canceled") {
          onError?.(FRIENDLY[event.error] ?? SPEECH_OUTPUT_FAILED);
        }
      };

      utteranceRef.current = utterance;
      synth.cancel();
      synth.speak(utterance);
      setSpeaking(id);
    },
    [findVoice, setSpeaking],
  );

  const stop = useCallback(
    (id?: string) => {
      if (speakingIdRef.current === null) return;
      if (id !== undefined && speakingIdRef.current !== id) return;
      utteranceRef.current = null;
      getSynth()?.cancel();
      setSpeaking(null);
    },
    [setSpeaking],
  );

  return { isSupported: voices.length > 0, canSpeak, speakingId, speak, stop };
}

export type SpeechOutput = ReturnType<typeof useSpeechSynthesis>;
