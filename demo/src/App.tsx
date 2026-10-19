import { useMemo, useState } from "react";
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
  useMediaQuery,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LightModeIcon from "@mui/icons-material/LightMode";
import { getTheme } from "./theme";
import { TransliteratorCard } from "./components/TransliteratorCard";
import { UpdatePrompt } from "./components/UpdatePrompt";
import { FOOTER_LINKS, OneScreenLayout } from "./components/OneScreenLayout";
import { OneScreenTransliterator } from "./components/OneScreenTransliterator";
import { useColorMode } from "./hooks/useColorMode";
import { useSpeechRecognition } from "./hooks/useSpeechRecognition";
import { LINKS, SCATTER } from "./constants";

// Phones and tablets (touch only, whatever their size) and narrow windows get
// the mobile app's one-screen layout
const ONE_SCREEN_QUERY = "(max-width: 1023.95px), (hover: none) and (pointer: coarse)";

const copyText = (text: string) => navigator.clipboard.writeText(text);

// With the browser's voice input and clipboard, and the text kept in the URL
const WebOneScreenTransliterator = ({ suppressErrors }: { suppressErrors: boolean }) => {
  const speech = useSpeechRecognition();
  return (
    <OneScreenTransliterator
      speech={speech}
      copyText={copyText}
      syncUrl
      suppressErrors={suppressErrors}
    />
  );
};

export default function App() {
  const { mode, toggleMode } = useColorMode();
  const [pwaSnackbarVisible, setPwaSnackbarVisible] = useState(false);
  const theme = useMemo(() => getTheme(mode), [mode]);
  const oneScreen = useMediaQuery(ONE_SCREEN_QUERY, { noSsr: true });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {oneScreen ? (
        <OneScreenLayout mode={mode} onToggleMode={toggleMode} links={FOOTER_LINKS}>
          <WebOneScreenTransliterator suppressErrors={pwaSnackbarVisible} />
        </OneScreenLayout>
      ) : (
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
                onClick={toggleMode}
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
                  zIndex: 0,
                }}
              >
                {SCATTER.map((g, i) => (
                  <Tooltip key={i} title={g.lang}>
                    <Box
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
                        cursor: "default",
                        transition: "opacity 0.3s ease-out",
                        animation: "animation 1000ms ease-out",
                        "@keyframes animation": {
                          "50%": {
                            opacity: 0.5,
                          },
                          "100%": {
                            opacity: theme => (theme.palette.mode === "dark" ? 0.08 : 0.12),
                          },
                        },
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                      aria-label={g.char}
                    >
                      {g.char}
                    </Box>
                  </Tooltip>
                ))}
              </Box>

              <Typography
                variant="h1"
                sx={{ fontSize: { xs: "2.1rem", sm: "3rem" }, position: "relative", zIndex: 1 }}
              >
                transliterate‑
                <wbr />
                any‑to‑any
              </Typography>

              <Stack
                component="div"
                direction="row"
                sx={{
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 1.5,
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
                <Chip
                  component="a"
                  href={LINKS.support}
                  target="_blank"
                  rel="noopener noreferrer"
                  clickable
                  icon={<FavoriteIcon />}
                  label="Support"
                  variant="outlined"
                />
              </Stack>
            </Stack>

            <TransliteratorCard suppressErrors={pwaSnackbarVisible} />
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
      )}
      <UpdatePrompt onVisibleChange={setPwaSnackbarVisible} />
    </ThemeProvider>
  );
}
