import { useEffect, useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import { getTheme } from "../src/theme";
import { useColorMode } from "../src/hooks/useColorMode";
import { LINKS } from "../src/constants";
import { FOOTER_LINKS, OneScreenLayout, type FooterLink } from "../src/components/OneScreenLayout";
import { OneScreenTransliterator } from "../src/components/OneScreenTransliterator";
import { useKeyboardVisible } from "./hooks/useKeyboardVisible";
import { useNativeSpeechRecognition } from "./hooks/useNativeSpeechRecognition";
import { copyText, hideSplashScreen, openExternal, setSystemBarsStyle } from "./native";

const PRIVACY_LINK: FooterLink = {
  label: "Privacy",
  href: LINKS.privacy,
  icon: <PrivacyTipIcon />,
};

const links = [...FOOTER_LINKS.filter(link => link.href !== LINKS.support), PRIVACY_LINK];

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
