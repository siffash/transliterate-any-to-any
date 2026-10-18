import type { CapacitorConfig } from "@capacitor/cli";

// The Android/iOS app: the web part is built by vite.mobile.config.ts
const config: CapacitorConfig = {
  appId: "com.siffash.transliterate",
  appName: "Transliterate",
  webDir: "dist-mobile",
  ios: {
    // The page never scrolls (only the text areas do), so no rubber-band bounce
    scrollEnabled: false,
  },
  plugins: {
    // Hidden by the app once it has rendered (see mobile/MobileApp.tsx)
    SplashScreen: {
      launchAutoHide: false,
    },
    // Edge-to-edge on Android, with the insets in env(safe-area-inset-*)
    SystemBars: {
      insetsHandling: "native",
      initialViewportFitValueHint: "cover",
    },
  },
};

export default config;
