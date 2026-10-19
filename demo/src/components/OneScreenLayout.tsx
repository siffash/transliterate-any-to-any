import { createContext, useContext, useState, type ReactNode } from "react";
import {
  Box,
  Button,
  Collapse,
  GlobalStyles,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import type { ColorMode } from "../hooks/useColorMode";
import { useVisualViewport } from "../hooks/useVisualViewport";
import { LINKS } from "../constants";

export type FooterLink = { label: string; href: string; icon: ReactNode };

export const FOOTER_LINKS: FooterLink[] = [
  { label: "Source code", href: LINKS.sourceCode, icon: <GitHubIcon /> },
  { label: "npm", href: LINKS.package, icon: <Inventory2Icon /> },
  { label: "About", href: LINKS.article, icon: <MenuBookIcon /> },
  { label: "Support", href: LINKS.support, icon: <FavoriteIcon /> },
];

// The space taken by the status bar, notch, home indicator, etc. (the app
// draws the page under them with viewport-fit=cover in its index.html)
const safeArea = (side: "top" | "right" | "bottom" | "left") => `env(safe-area-inset-${side}, 0px)`;

const ResultShownContext = createContext<(shown: boolean) => void>(() => {});

// For the transliterator to tell the layout whether its result panel is shown
export const useReportResultShown = () => useContext(ResultShownContext);

/**
 * The phone layout of the app and of the web demo on small screens, like the
 * Google Translate app: the title and the light/dark toggle, the transliterator
 * (children) taking the rest of the screen, and links at the bottom. Nothing
 * scrolls but the text areas, and the layout shrinks above the keyboard. While
 * there's a result, the title and the links make way for the text.
 */
export function OneScreenLayout({
  mode,
  onToggleMode,
  links,
  onOpenLink,
  keyboardOpen,
  children,
}: {
  mode: ColorMode;
  onToggleMode: () => void;
  links: FooterLink[];
  // Opens a link instead of the browser (e.g. in the app's in-app browser)
  onOpenLink?: (href: string) => void;
  // Whether the on-screen keyboard is open, if known (else from the viewport)
  keyboardOpen?: boolean;
  children: ReactNode;
}) {
  const viewport = useVisualViewport();
  const keyboard = keyboardOpen ?? viewport.keyboardOpen;
  const [resultShown, setResultShown] = useState(false);
  // The header and the footer slide away (at once if motion is reduced)
  const timeout = useMediaQuery("(prefers-reduced-motion: reduce)") ? 0 : undefined;

  return (
    <>
      <GlobalStyles
        styles={theme => ({
          // Everything fits on one screen; only the text areas scroll
          "html, body, #root": { height: "100%", overflow: "hidden", overscrollBehavior: "none" },
          // The whole screen is the desktop layout's card, also behind the keyboard
          body: {
            backgroundColor: theme.palette.background.paper,
            WebkitTapHighlightColor: "transparent",
          },
        })}
      />
      <Box
        sx={{
          position: "fixed",
          top: viewport.offsetTop,
          left: 0,
          right: 0,
          height: viewport.height,
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.paper",
          pt: safeArea("top"),
          pr: safeArea("right"),
          // The keyboard covers the home indicator
          pb: keyboard ? 0 : safeArea("bottom"),
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
            // For the error snackbar (see OneScreenTransliterator)
            position: "relative",
          }}
        >
          <Collapse in={!resultShown} timeout={timeout} sx={{ flexShrink: 0 }}>
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
                <IconButton onClick={onToggleMode} aria-label="Toggle color mode">
                  {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
              </Tooltip>
            </Box>
          </Collapse>

          <ResultShownContext.Provider value={setResultShown}>
            {children}
          </ResultShownContext.Provider>

          {/* Hidden while typing or showing a result, to leave the space to the text */}
          <Collapse in={!keyboard && !resultShown} timeout={timeout} sx={{ flexShrink: 0 }}>
            <Box component="footer" sx={{ display: "flex", px: 1, pb: 0.5 }}>
              {links.map(({ label, href, icon }) => (
                <Button
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={event => {
                    if (!onOpenLink) return;
                    event.preventDefault();
                    onOpenLink(href);
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
          </Collapse>
        </Box>
      </Box>
    </>
  );
}
