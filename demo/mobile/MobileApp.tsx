import { useEffect, useMemo } from "react";
import {
  Box,
  Button,
  CssBaseline,
  GlobalStyles,
  IconButton,
  ThemeProvider,
  Tooltip,
  Typography,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { getTheme } from "../src/theme";
import { useColorMode } from "../src/hooks/useColorMode";
import { LINKS } from "../src/constants";
import { MobileTransliterator } from "./MobileTransliterator";
import { useKeyboardVisible } from "./hooks/useKeyboardVisible";
import { useVisualViewportHeight } from "./hooks/useVisualViewportHeight";
import { hideSplashScreen, isIos, openExternal, setSystemBarsStyle } from "./native";

const FOOTER_LINKS = [
  { label: "Source code", href: LINKS.sourceCode, icon: <GitHubIcon /> },
  { label: "npm", href: LINKS.package, icon: <Inventory2Icon /> },
  { label: "About", href: LINKS.article, icon: <MenuBookIcon /> },
  // Apple rejects apps that link to paying the developer outside the App Store
  ...(isIos ? [] : [{ label: "Support", href: LINKS.support, icon: <FavoriteIcon /> }]),
];

// The space taken by the status bar, notch, home indicator, etc.
// (viewport-fit=cover in index.html draws the page under them)
const safeArea = (side: "top" | "right" | "bottom" | "left") => `env(safe-area-inset-${side}, 0px)`;

export function MobileApp() {
  const { mode, toggleMode } = useColorMode();
  const theme = useMemo(() => getTheme(mode), [mode]);
  const keyboardVisible = useKeyboardVisible();
  const height = useVisualViewportHeight();

  useEffect(() => {
    setSystemBarsStyle(mode).catch(() => {});
  }, [mode]);

  useEffect(() => {
    hideSplashScreen().catch(() => {});
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <GlobalStyles
        styles={{
          // Everything fits on one screen; only the text areas scroll
          "html, body, #root": { height: "100%", overflow: "hidden", overscrollBehavior: "none" },
          // The whole screen is the PWA's card, also behind the keyboard
          body: {
            backgroundColor: theme.palette.background.paper,
            WebkitTapHighlightColor: "transparent",
          },
        }}
      />
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height,
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.paper",
          pt: safeArea("top"),
          pr: safeArea("right"),
          // The keyboard covers the home indicator
          pb: keyboardVisible ? 0 : safeArea("bottom"),
          pl: safeArea("left"),
        }}
      >
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: 720,
            mx: "auto",
            // For the error snackbar (see MobileTransliterator)
            position: "relative",
          }}
        >
          <Box
            component="header"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
              pl: 2,
              pr: 1,
              py: 1,
            }}
          >
            <Typography
              variant="h1"
              noWrap
              sx={{ fontSize: { xs: "clamp(1.1rem, 5.6vw, 1.5rem)", sm: "1.75rem" } }}
            >
              transliterate-any-to-any
            </Typography>
            <Tooltip title={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
              <IconButton onClick={toggleMode} aria-label="Toggle color mode">
                {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>
          </Box>

          <MobileTransliterator />

          {/* Hidden while typing, to leave the space to the text */}
          {!keyboardVisible && (
            <Box component="footer" sx={{ display: "flex", px: 1, pb: 0.5 }}>
              {FOOTER_LINKS.map(({ label, href, icon }) => (
                <Button
                  key={label}
                  component="a"
                  href={href}
                  onClick={event => {
                    event.preventDefault();
                    openExternal(href).catch(() => {});
                  }}
                  color="inherit"
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    flexDirection: "column",
                    gap: 0.5,
                    px: 0.5,
                    py: 1,
                    borderRadius: 3,
                    color: "text.secondary",
                    // One line even on a 320px wide screen
                    fontSize: "clamp(0.68rem, 3.4vw, 0.75rem)",
                    lineHeight: 1.2,
                    whiteSpace: "nowrap",
                  }}
                >
                  {icon}
                  {label}
                </Button>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
