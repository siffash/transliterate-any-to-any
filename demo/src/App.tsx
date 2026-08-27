import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Chip,
  Container,
  CssBaseline,
  IconButton,
  Link,
  Stack,
  ThemeProvider,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LightModeIcon from "@mui/icons-material/LightMode";
import { getTheme } from "./theme";
import { TransliteratorCard } from "./components/TransliteratorCard";
import { LINKS, LOCAL_STORAGE_KEYS, SCATTER } from "./constants";

function getInitialMode(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(LOCAL_STORAGE_KEYS.colorMode);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function App() {
  const [mode, setMode] = useState<"light" | "dark">(getInitialMode);
  const theme = useMemo(() => getTheme(mode), [mode]);

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEYS.colorMode, mode);
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          bgcolor: "background.default",
        }}
      >
        <Container component="main" maxWidth="md" sx={{ py: { xs: 6, sm: 10 } }}>
          <Tooltip title={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
            <IconButton
              onClick={() => setMode(m => (m === "dark" ? "light" : "dark"))}
              sx={{ position: "absolute", top: 0, right: 0, zIndex: 1, m: 2 }}
              aria-label="Toggle color mode"
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>

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
                href={LINKS.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                clickable
                icon={<GitHubIcon />}
                label="Source code"
                variant="outlined"
              />
              <Chip
                component="a"
                href={LINKS.package}
                target="_blank"
                rel="noopener noreferrer"
                clickable
                icon={<Inventory2Icon />}
                label="npm package"
                variant="outlined"
              />
              <Chip
                component="a"
                href={LINKS.article}
                target="_blank"
                rel="noopener noreferrer"
                clickable
                icon={<MenuBookIcon />}
                label="Read the article"
                variant="outlined"
              />
            </Stack>
          </Stack>

          <TransliteratorCard />
        </Container>

        <Box component="footer" sx={{ mt: "auto", py: 3, textAlign: "center" }}>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Link
              href="https://www.linkedin.com/in/siffash/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anton Sivashtenko
            </Link>
            <Box>©</Box>
            <Box>{new Date().getFullYear()}</Box>
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
