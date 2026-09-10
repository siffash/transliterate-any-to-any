import { useCallback, useEffect, useRef, useState } from "react";

type ResultCallback = (finalTranscript: string, interimTranscript: string) => void;

export function useSpeechRecognition() {
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const finalizedCountRef = useRef(0);
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

      finalizedCountRef.current = 0;

      recognition.onresult = event => {
        let newFinalText = "";
        let interimTranscript = "";

        for (let i = 0; i < event.results.length; i++) {
          const result = event.results[i];
          if (result.isFinal) {
            if (i >= finalizedCountRef.current) {
              newFinalText += result[0].transcript;
            }
          } else {
            interimTranscript += result[0].transcript;
          }
        }

        let i = finalizedCountRef.current;
        while (i < event.results.length && event.results[i].isFinal) i++;
        finalizedCountRef.current = i;

        onResult(newFinalText, interimTranscript);
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
