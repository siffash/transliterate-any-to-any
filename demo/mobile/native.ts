import { Capacitor, SystemBars, SystemBarsStyle } from "@capacitor/core";
import { Browser } from "@capacitor/browser";
import { Clipboard } from "@capacitor/clipboard";
import { Device } from "@capacitor/device";
import { SplashScreen } from "@capacitor/splash-screen";
import type { ColorMode } from "../src/hooks/useColorMode";

const isNative = Capacitor.isNativePlatform();

export const copyText = (text: string) => Clipboard.write({ string: text });

export const openExternal = (url: string) => Browser.open({ url });

export const setSystemBarsStyle = async (mode: ColorMode) => {
  if (!isNative) return;
  await SystemBars.setStyle({
    style: mode === "dark" ? SystemBarsStyle.Dark : SystemBarsStyle.Light,
  });
};

export const getSystemLocale = async () => {
  if (!isNative) return undefined;
  try {
    return (await Device.getLanguageTag()).value;
  } catch {
    return undefined;
  }
};

export const hideSplashScreen = async () => {
  if (!isNative) return;
  await SplashScreen.hide();
};
