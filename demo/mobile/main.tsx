import "@fontsource-variable/bricolage-grotesque/opsz.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MobileApp } from "./MobileApp";
import { getSystemLocale } from "./native";
import { setSystemLocales } from "../src/hooks/useTransliterator";

getSystemLocale().then(locale => {
  if (locale) setSystemLocales([locale]);
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <MobileApp />
    </StrictMode>,
  );
});
