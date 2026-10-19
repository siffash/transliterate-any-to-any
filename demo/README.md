# transliterate-any-to-any — demo

A live demo of the `transliterate-any-to-any` library, built with Vite + React + TypeScript + MUI.

## Run locally

```bash
# in the root directory, install & build the library
npm i
npm run build
# then install & run the demo
cd demo
npm i
npm run dev # or npm run build && npm run preview
```

## How it's wired to the library

`vite.config.ts` aliases the import specifier `transliterate-any-to-any` straight to the library's source (`../dist/index.mjs`). Every file in this demo imports the library by that package name.

`transliterate()` itself only ever runs inside `src/workers/transliterate.worker.ts`, called through `src/hooks/useTransliterateWorker.ts` from the main thread.

## Mobile app (Android & iOS)

The demo also ships as a native app built with [Capacitor](https://capacitorjs.com): the same React + MUI code runs in the system WebView (`mobile/`), with native plugins for voice input, the clipboard, links and the status bar. It's laid out for phones like the Google Translate app, on one screen (`src/components/OneScreenLayout.tsx`, `OneScreenTransliterator.tsx`), which the PWA also uses on phones, tablets and windows narrower than 1024px. Both share the transliterator's logic through `src/hooks/useTransliterator.ts`.

The app works offline right after install. Unlike the PWA, which downloads the library's chunks and the kuromoji dictionary as needed, the app contains all of them: `vite.mobile.config.ts` builds it into `dist-mobile/`, with the fonts bundled and kuromoji pointed at the app's own copy of the dictionary instead of jsDelivr.

Requirements: Xcode 26+ for iOS; for Android, Android Studio 2025.2.1+ and JDK 21. Capacitor 8 builds with Gradle 8.14, which doesn't run on JDK 25+, the JDK that comes with Android Studio 2026.2 and later, so you may need a separate JDK 21 (e.g. `brew install openjdk@21`). For the commands below, set `JAVA_HOME` to JDK 21 and `ANDROID_HOME` to the SDK (`~/Library/Android/sdk` on macOS); in Android Studio, pick JDK 21 as the Gradle JDK. If you installed JDK 21 with Homebrew on an Apple Silicon Mac, you can run this command (on an Intel Mac, Homebrew's path is `/usr/local/opt/openjdk@21/...` instead of `/opt/homebrew/opt/openjdk@21/...`):

```bash
cat >> ~/.zshrc <<'EOF'
export JAVA_HOME=/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home
export ANDROID_HOME=$HOME/Library/Android/sdk
EOF
```

Then open a new Terminal window. After that, run:

```bash
# in the root directory, install & build the library (see above), then
cd demo
npm i
npm run build:mobile # build the app's web part and copy it into android/ and ios/
npm run android # run it on an Android emulator or device (or open android/ in Android Studio)
npm run ios # run it on an iPhone (or open ios/App in Xcode, see below)
```

On Xcode 27+, `npm run ios` installs the app on a simulator but then fails with "Simulator.app does not exist": Xcode no longer ships that app, which Capacitor's tooling still opens. Run the simulator from Xcode instead:

1. `npm run build:mobile`, then `npx cap open ios` to open the project in Xcode
2. pick a simulator in the device menu of Xcode's toolbar - an iPhone 18 Pro or newer (Xcode 27 doesn't let you interact with older simulated iPhones)
3. press ▶ (Run)

Also:

- `npx vite preview --config vite.mobile.config.ts` serves the built app in a browser, as it runs on a device (except for voice input, which needs the app)
- `npm run dev:mobile` serves it with hot reload (it gets the dictionary from jsDelivr)
- `npm run icons:mobile` regenerates the app's icons and splash screens from `public/favicon.svg`
- voice input uses the OS speech recognizer, which may need a connection for some languages
- phones stay in portrait, as the one-screen layout doesn't fit a phone held sideways (`android/…/MainActivity.java`, `ios/App/App/Info.plist`); tablets can rotate
