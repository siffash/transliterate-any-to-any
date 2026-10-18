import { useCallback, useEffect, useRef, useState } from "react";
import { Capacitor } from "@capacitor/core";
import { SpeechRecognition } from "@capgo/capacitor-speech-recognition";
import type { SpeechInput } from "../../src/hooks/useSpeechRecognition";

type StartParams = Parameters<SpeechInput["start"]>;

// The plugin's error codes (Android and iOS), worded like the PWA's
const FRIENDLY: Record<string, string> = {
  INSUFFICIENT_PERMISSIONS: "Microphone access was denied.",
  MICROPHONE_PERMISSION_DENIED: "Microphone access was denied.",
  NO_MATCH: "Didn't catch any speech — try again.",
  SPEECH_TIMEOUT: "Didn't catch any speech — try again.",
  AUDIO: "No microphone was found.",
  NETWORK: "A network error interrupted voice input.",
  NETWORK_TIMEOUT: "A network error interrupted voice input.",
  SERVER: "A network error interrupted voice input.",
  SERVER_DISCONNECTED: "A network error interrupted voice input.",
  UNSUPPORTED_LOCALE: "Voice input isn't available for this language.",
  AUDIO_SESSION_FAILED: "The microphone couldn't be started.",
  AUDIO_ENGINE_START_FAILED: "The microphone couldn't be started.",
  RECOGNIZER_BUSY: "Voice input is busy — try again in a moment.",
  RECOGNIZER_UNAVAILABLE: "Voice input isn't available right now.",
  ON_DEVICE_RECOGNITION_UNAVAILABLE: "Voice input isn't available right now.",
  MODEL_DOWNLOAD_SCHEDULED: "Voice input isn't available right now.",
  START_FAILED: "Voice input isn't available right now.",
  MODERN_START_FAILED: "Voice input isn't available right now.",
  // iOS's recognizer errors, reported as <ERROR DOMAIN>_<CODE>
  KAFASSISTANTERRORDOMAIN_1110: "Didn't catch any speech — try again.",
};

// On iOS, kLSRErrorDomain covers the on-device recognizer failing to load
// (e.g. a missing or broken speech model)
const getMessage = (code?: string) =>
  (code && FRIENDLY[code]) ||
  (code?.startsWith("KLSRERRORDOMAIN_")
    ? "Voice input isn't available right now."
    : "Voice input failed.");

/**
 * Voice input through the OS speech recognizer, with the same interface as
 * the PWA's useSpeechRecognition (the Web Speech API is missing in Android's
 * WebView). Each session reports its transcript so far as interim text, which
 * the caller appends to the text typed before the session started.
 */
export function useNativeSpeechRecognition(): SpeechInput {
  const [isSupported, setIsSupported] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const callbacksRef = useRef<{ onResult: StartParams[1]; onError: StartParams[2] } | null>(null);
  const stoppedRef = useRef(false);

  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;
    let cancelled = false;
    SpeechRecognition.available()
      .then(({ available }) => !cancelled && setIsSupported(available))
      .catch(() => {});

    const listeners = [
      SpeechRecognition.addListener("partialResults", ({ matches }) => {
        if (matches?.[0]) callbacksRef.current?.onResult("", matches[0]);
      }),
      SpeechRecognition.addListener("listeningState", ({ status }) => {
        if (status) setIsListening(status === "started");
      }),
      SpeechRecognition.addListener("error", ({ code }) => {
        setIsListening(false);
        // A session stopped by the user may still end with an error (e.g. no
        // match yet), while its last words still arrive as a result
        if (!stoppedRef.current) callbacksRef.current?.onError?.(getMessage(code));
      }),
    ];

    return () => {
      cancelled = true;
      listeners.forEach(listener => listener.then(handle => handle.remove()));
      SpeechRecognition.stop().catch(() => {});
    };
  }, []);

  const start = useCallback((lang: string, onResult: StartParams[1], onError?: StartParams[2]) => {
    callbacksRef.current = { onResult, onError };
    stoppedRef.current = false;
    (async () => {
      let { speechRecognition } = await SpeechRecognition.checkPermissions();
      if (speechRecognition !== "granted") {
        ({ speechRecognition } = await SpeechRecognition.requestPermissions());
      }
      if (speechRecognition !== "granted") {
        onError?.(getMessage("INSUFFICIENT_PERMISSIONS"));
        return;
      }
      setIsListening(true);
      await SpeechRecognition.start({ language: lang, partialResults: true, popup: false });
    })().catch((error: { code?: string }) => {
      setIsListening(false);
      onError?.(getMessage(error.code));
    });
  }, []);

  const stop = useCallback(() => {
    stoppedRef.current = true;
    SpeechRecognition.stop().catch(() => {});
    setIsListening(false);
  }, []);

  return { isSupported, isListening, start, stop };
}
