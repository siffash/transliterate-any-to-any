import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Chip,
  Container,
  CssBaseline,
  IconButton,
  Stack,
  ThemeProvider,
  Tooltip,
  Typography,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LightModeIcon from "@mui/icons-material/LightMode";
import { getTheme } from "./theme";
import TransliteratorCard from "./components/TransliteratorCard";

const LINKS = {
  github: "https://github.com/siffash/transliterate-any-to-any",
  npm: "https://www.npmjs.com/package/transliterate-any-to-any",
  devto: "https://dev.to/siffash/transliterate-any-to-any",
};

// A faint scatter of glyphs from scripts this library actually covers
const SCATTER: { char: string; top: string; left: string; rot: number }[] = [
  { char: "字", top: "5%", left: "39%", rot: -4 }, // Chinese
  { char: "あ", top: "52%", left: "27%", rot: 7 }, // Japanese
  { char: "한", top: "52%", left: "85%", rot: -5 }, // Korean
  { char: "अ", top: "0%", left: "83%", rot: 8 }, // Hindi
  { char: "অ", top: "53%", left: "69%", rot: 5 }, // Bengali
  { char: "ن", top: "2%", left: "70%", rot: 8 }, // Urdu
  { char: "ی", top: "53%", left: "4%", rot: 10 }, // Persian
  { char: "ل", top: "18%", left: "88%", rot: 6 }, // Arabic
  { char: "א", top: "40%", left: "21%", rot: -10 }, // Hebrew
  { char: "ლ", top: "30%", left: "2%", rot: -12 }, // Georgian
  { char: "Թ", top: "2%", left: "96%", rot: -6 }, // Armenian
  { char: "Ω", top: "40%", left: "92%", rot: 12 }, // Greek
  { char: "Є", top: "0%", left: "55%", rot: -7 }, // Ukrainian
  { char: "Ъ", top: "3%", left: "6%", rot: -8 }, // Bulgarian
  { char: "Š", top: "0%", left: "25%", rot: -3 }, // Serbian
  { char: "Ħ", top: "45%", left: "12%", rot: 4 }, // Maltese
  { char: "ß", top: "15%", left: "14%", rot: -9 }, // German
  { char: "ñ", top: "45%", left: "78%", rot: 6 }, // Spanish
];

function getInitialMode(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("color-mode");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function App() {
  const [mode, setMode] = useState<"light" | "dark">(getInitialMode);
  const theme = useMemo(() => getTheme(mode), [mode]);

  useEffect(() => {
    window.localStorage.setItem("color-mode", mode);
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Container maxWidth="md" sx={{ py: { xs: 6, sm: 10 } }}>
          <Stack
            component="div"
            spacing={2}
            sx={{ alignItems: "center", mb: 6, textAlign: "center", position: "relative" }}
          >
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                inset: "-40px -16px auto -16px",
                height: 320,
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: 0,
              }}
            >
              {SCATTER.map((g, i) => (
                <Box
                  key={i}
                  component="span"
                  sx={{
                    position: "absolute",
                    top: g.top,
                    left: g.left,
                    fontSize: 32,
                    fontFamily: '"IBM Plex Sans", system-ui, sans-serif',
                    color: "primary.main",
                    opacity: theme => (theme.palette.mode === "dark" ? 0.08 : 0.12),
                    transform: `rotate(${g.rot}deg)`,
                    lineHeight: 1,
                  }}
                >
                  {g.char}
                </Box>
              ))}
            </Box>

            <Tooltip title={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
              <IconButton
                onClick={() => setMode(m => (m === "dark" ? "light" : "dark"))}
                sx={{ position: "absolute", top: 0, right: 0, zIndex: 1 }}
                aria-label="Toggle color mode"
              >
                {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>

            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "2.1rem", sm: "3rem" }, position: "relative", zIndex: 1 }}
            >
              transliterate-any-to-any
            </Typography>

            <Stack
              component="div"
              direction="row"
              spacing={1.5}
              sx={{
                flexWrap: "wrap",
                justifyContent: "center",
                position: "relative",
                zIndex: 1,
                "& .MuiChip-root": {
                  bgcolor: "background.default",
                  position: "relative",
                },
              }}
            >
              <Chip
                component="a"
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                clickable
                icon={<GitHubIcon />}
                label="GitHub"
                variant="outlined"
              />
              <Chip
                component="a"
                href={LINKS.npm}
                target="_blank"
                rel="noopener noreferrer"
                clickable
                icon={<Inventory2Icon />}
                label="npm"
                variant="outlined"
              />
              <Chip
                component="a"
                href={LINKS.devto}
                target="_blank"
                rel="noopener noreferrer"
                clickable
                icon={<ArticleIcon />}
                label="DEV.to article"
                variant="outlined"
              />
            </Stack>
          </Stack>

          <TransliteratorCard />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
