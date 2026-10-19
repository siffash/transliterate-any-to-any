import { useEffect, useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { getTheme } from "../src/theme";
import { useColorMode } from "../src/hooks/useColorMode";
import { LINKS } from "../src/constants";
import { FOOTER_LINKS, OneScreenLayout } from "../src/components/OneScreenLayout";
import { OneScreenTransliterator } from "../src/components/OneScreenTransliterator";
import { useKeyboardVisible } from "./hooks/useKeyboardVisible";
import { useNativeSpeechRecognition } from "./hooks/useNativeSpeechRecognition";
import { copyText, hideSplashScreen, isIos, openExternal, setSystemBarsStyle } from "./native";

// Apple rejects apps that link to paying the developer outside the App Store
const links = isIos ? FOOTER_LINKS.filter(link => link.href !== LINKS.support) : FOOTER_LINKS;

const openLink = (href: string) => {
  openExternal(href).catch(() => {});
};

export function MobileApp() {
  const { mode, toggleMode } = useColorMode();
  const theme = useMemo(() => getTheme(mode), [mode]);
  const keyboardVisible = useKeyboardVisible();
  const speech = useNativeSpeechRecognition();

  useEffect(() => {
    setSystemBarsStyle(mode).catch(() => {});
  }, [mode]);

  useEffect(() => {
    hideSplashScreen().catch(() => {});
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <OneScreenLayout
        mode={mode}
        onToggleMode={toggleMode}
        links={links}
        onOpenLink={openLink}
        keyboardOpen={keyboardVisible}
      >
        <OneScreenTransliterator speech={speech} copyText={copyText} syncUrl={false} />
      </OneScreenLayout>
    </ThemeProvider>
  );
}
