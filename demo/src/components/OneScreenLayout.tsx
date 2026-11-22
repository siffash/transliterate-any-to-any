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

const safeArea = (side: "top" | "right" | "bottom" | "left") => `env(safe-area-inset-${side}, 0px)`;

const ResultShownContext = createContext<(shown: boolean) => void>(() => {});

export const useReportResultShown = () => useContext(ResultShownContext);

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
  onOpenLink?: (href: string) => void;
  keyboardOpen?: boolean;
  children: ReactNode;
}) {
  const viewport = useVisualViewport();
  const keyboard = keyboardOpen ?? viewport.keyboardOpen;
  const [resultShown, setResultShown] = useState(false);
  const footerShown = !keyboard && !resultShown;
  const timeout = useMediaQuery("(prefers-reduced-motion: reduce)") ? 0 : undefined;

  return (
    <>
      <GlobalStyles
        styles={theme => ({
          "html, body, #root": { height: "100%", overflow: "hidden", overscrollBehavior: "none" },
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
            position: "relative",
            pt: resultShown ? 1 : 0,
            pb: footerShown ? 0 : 1,
            transition: theme =>
              theme.transitions.create(["padding-top", "padding-bottom"], {
                duration: timeout ?? theme.transitions.duration.standard,
              }),
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

          <Collapse in={footerShown} timeout={timeout} sx={{ flexShrink: 0 }}>
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
