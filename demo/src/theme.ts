import { createTheme, responsiveFontSizes, type Theme } from "@mui/material/styles";

// Design tokens.
//
// Grounded in the subject rather than a generic "modern SaaS" palette: deep
// ink for the page, and a muted antique gold for emphasis — the color
// manuscript traditions across many of these 50 scripts have long used for
// rubrication and phonetic annotation (red/gold ink marking the parts of a
// text that carry pronunciation). Teal is the second accent, evoking
// oxidised copper type. Light mode is a cool neutral, not a warm cream, so
// it doesn't default into the same look from the other side.
const tokens = {
  gold: "#D9AE4F",
  goldDark: "#C39A3E",
  teal: "#3E8377",
  tealDark: "#2F675D",
  darkBg: "#121017",
  darkPaper: "#1A1822",
  darkBorder: "rgba(255,255,255,0.09)",
  darkText: "#EDEAE2",
  lightBg: "#EEF0F2",
  lightPaper: "#FFFFFF",
  lightBorder: "rgba(20,20,30,0.10)",
  lightText: "#1B1922",
};

export function getTheme(mode: "light" | "dark"): Theme {
  const isDark = mode === "dark";

  const theme = createTheme({
    palette: {
      mode,
      primary: { main: tokens.gold, dark: tokens.goldDark, contrastText: "#191410" },
      secondary: { main: tokens.teal, dark: tokens.tealDark, contrastText: "#0B1512" },
      background: {
        default: isDark ? tokens.darkBg : tokens.lightBg,
        paper: isDark ? tokens.darkPaper : tokens.lightPaper,
      },
      text: {
        primary: isDark ? tokens.darkText : tokens.lightText,
      },
      divider: isDark ? tokens.darkBorder : tokens.lightBorder,
    },
    shape: { borderRadius: 14 },
    typography: {
      fontFamily: '"IBM Plex Sans", system-ui, sans-serif',
      h1: {
        fontFamily: '"Bricolage Grotesque", "IBM Plex Sans", system-ui, sans-serif',
        fontWeight: 700,
        letterSpacing: "-0.01em",
      },
      button: { textTransform: "none", fontWeight: 600 },
      caption: { fontFamily: '"IBM Plex Mono", ui-monospace, monospace' },
    },
    components: {
      MuiButton: {
        styleOverrides: { root: { borderRadius: 999 } },
      },
      MuiChip: {
        styleOverrides: {
          root: ({ theme: t }) => ({
            borderRadius: 999,
            fontWeight: 600,
            borderColor: t.palette.divider,
          }),
        },
      },
      MuiCard: {
        styleOverrides: {
          root: { backgroundImage: "none" },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          "*": { scrollbarColor: `${isDark ? "#3a3745" : "#c9ccd1"} transparent` },
        },
      },
    },
  });

  return responsiveFontSizes(theme);
}

// The textareas themselves render live text in whichever of the 50 scripts
// is selected (Arabic, Devanagari, Han, Hangul, …). A display webfont only
// covers Latin, so multilingual content gets a plain system-font stack with
// broad, OS-native script coverage instead of the branded UI fonts above.
export const multilingualTextStack =
  'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans", sans-serif';
