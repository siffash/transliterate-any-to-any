import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";
import { Keyboard } from "@capacitor/keyboard";

// Whether the on-screen keyboard is open (always false in a browser)
export function useKeyboardVisible() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;
    const listeners = [
      Keyboard.addListener("keyboardWillShow", () => setVisible(true)),
      Keyboard.addListener("keyboardWillHide", () => setVisible(false)),
    ];
    return () => listeners.forEach(listener => listener.then(handle => handle.remove()));
  }, []);

  return visible;
}
