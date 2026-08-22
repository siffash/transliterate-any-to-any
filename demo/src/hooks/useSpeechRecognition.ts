import { useCallback, useEffect, useRef, useState } from "react";

// The Web Speech API isn't part of TypeScript's standard DOM lib, and the
// working implementation is still exposed under a vendor prefix in most
// browsers. These are minimal ambient types covering only what this hook
// uses — not a full spec-accurate declaration.
declare global {
  interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
  }
  interface SpeechRecognitionResult {
    readonly length: number;
    readonly isFinal: boolean;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
  }
  interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
  }
  interface SpeechRecognitionEvent extends Event {
    readonly resultIndex: number;
    readonly results: SpeechRecognitionResultList;
  }
  interface SpeechRecognition extends EventTarget {
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    maxAlternatives: number;
    start(): void;
    stop(): void;
    abort(): void;
    onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null;
    onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => void) | null;
    onend: ((this: SpeechRecognition) => void) | null;
  }
  interface Window {
    SpeechRecognition?: new () => SpeechRecognition;
    webkitSpeechRecognition?: new () => SpeechRecognition;
  }
}

type ResultCallback = (finalTranscript: string, interimTranscript: string) => void;

/**
 * Thin wrapper around SpeechRecognition. `start()` re-scans the full result
 * list on every event (rather than only the newly-changed `resultIndex`
 * onward) and reports finalized vs. in-progress text separately, so the
 * caller can render "committed so far + what's being said right now"
 * without juggling incremental state itself.
 */
export function useSpeechRecognition() {
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [isSupported] = useState(
    () =>
      typeof window !== "undefined" &&
      Boolean(window.SpeechRecognition || window.webkitSpeechRecognition),
  );

  const start = useCallback(
    (lang: string, onResult: ResultCallback, onError?: (message: string) => void) => {
      if (!isSupported) return;
      const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!Ctor) return;

      const recognition = new Ctor();
      recognition.lang = lang;
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = event => {
        let finalTranscript = "";
        let interimTranscript = "";
        for (let i = 0; i < event.results.length; i++) {
          const result = event.results[i];
          if (result.isFinal) {
            finalTranscript += result[0].transcript;
          } else {
            interimTranscript += result[0].transcript;
          }
        }
        onResult(finalTranscript, interimTranscript);
      };

      recognition.onerror = event => {
        setIsListening(false);
        const friendly: Record<string, string> = {
          "not-allowed": "Microphone access was denied.",
          "no-speech": "Didn't catch any speech — try again.",
          "audio-capture": "No microphone was found.",
          network: "A network error interrupted voice input.",
        };
        onError?.(friendly[event.error] ?? "Voice input failed.");
      };

      recognition.onend = () => setIsListening(false);

      recognitionRef.current = recognition;
      recognition.start();
      setIsListening(true);
    },
    [isSupported],
  );

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  useEffect(() => {
    return () => {
      recognitionRef.current?.abort();
    };
  }, []);

  return { isSupported, isListening, start, stop };
}
