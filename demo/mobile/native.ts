import { Capacitor, SystemBars, SystemBarsStyle } from "@capacitor/core";
import { Browser } from "@capacitor/browser";
import { Clipboard } from "@capacitor/clipboard";
import { SplashScreen } from "@capacitor/splash-screen";
import type { ColorMode } from "../src/hooks/useColorMode";

// The Capacitor plugins the app uses. In a browser (e.g. vite preview), the
// clipboard and links fall back to their web versions, and the rest is skipped.

const isNative = Capacitor.isNativePlatform();

export const copyText = (text: string) => Clipboard.write({ string: text });

// In an in-app browser tab (SFSafariViewController / Custom Tabs)
export const openExternal = (url: string) => Browser.open({ url });

// Light icons over the dark theme, dark icons over the light one
export const setSystemBarsStyle = async (mode: ColorMode) => {
  if (!isNative) return;
  await SystemBars.setStyle({
    style: mode === "dark" ? SystemBarsStyle.Dark : SystemBarsStyle.Light,
  });
};

// The splash screen stays until the app has rendered (see capacitor.config.ts)
export const hideSplashScreen = async () => {
  if (!isNative) return;
  await SplashScreen.hide();
};
