import { useEffect, useMemo, useRef, useState } from "react";
import {
  Alert,
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
  type SelectChangeEvent,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { Language, languages } from "transliterate-any-to-any";
import { multilingualTextStack } from "../theme";
import { useTransliterateWorker } from "../hooks/useTransliterateWorker";
import { useSpeechRecognition } from "../hooks/useSpeechRecognition";

const MAX_CHARS = 5000;
const DEBOUNCE_MS = 350;

function LanguageSelect({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (code: Language) => void;
}) {
  return (
    <FormControl size="small" sx={{ minWidth: 180 }}>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={value}
        label={label}
        onChange={(e: SelectChangeEvent) => onChange(e.target.value as Language)}
        sx={{ position: "relative", bgcolor: "background.paper" }}
      >
        {[...(Object.keys(languages) as Language[])]
          .sort((a, b) => languages[a].name.localeCompare(languages[b].name))
          .map((code: Language) => (
            <MenuItem key={code} value={code}>
              {languages[code].name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

function CodeBadge({ code }: { code: string }) {
  return (
    <Chip
      size="small"
      label={code}
      variant="outlined"
      sx={{
        fontFamily: '"IBM Plex Mono", ui-monospace, monospace',
        fontSize: "0.7rem",
        height: 22,
        letterSpacing: "0.02em",
      }}
    />
  );
}

export default function TransliteratorCard() {
  const [fromLang, setFromLang] = useState<Language>("en");
  const [toLang, setToLang] = useState<Language>("bg");
  const [sourceText, setSourceText] = useState("");
  const [targetText, setTargetText] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [swapRotation, setSwapRotation] = useState(0);

  const { run } = useTransliterateWorker();
  const requestIdRef = useRef(0);
  const baseTextRef = useRef("");

  const {
    isSupported: micSupported,
    isListening,
    start: startListening,
    stop: stopListening,
  } = useSpeechRecognition();

  const fromLocale = useMemo(() => languages[fromLang]?.speechLocale ?? "en-US", [fromLang]);

  // Debounced transliteration: fires MAX_CHARS/DEBOUNCE_MS after the last keystroke or language change,
  // and ignores a response that arrives after a newer request has already been fired
  useEffect(() => {
    if (!sourceText.trim()) {
      setTargetText("");
      setErrorMsg(null);
      setLoading(false);
      return;
    }
    if (fromLang === toLang) {
      setTargetText(sourceText);
      setErrorMsg(null);
      setLoading(false);
      return;
    }

    const thisId = ++requestIdRef.current;
    setLoading(true);

    const timer = setTimeout(() => {
      run(sourceText, fromLang, toLang)
        .then(result => {
          if (thisId === requestIdRef.current) {
            setTargetText(result);
            setErrorMsg(null);
          }
        })
        .catch((err: Error) => {
          if (thisId === requestIdRef.current) {
            setErrorMsg(err.message || "Transliteration failed.");
          }
        })
        .finally(() => {
          if (thisId === requestIdRef.current) {
            setLoading(false);
          }
        });
    }, DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [sourceText, fromLang, toLang, run]);

  const handleSourceChange = (value: string) => {
    setSourceText(value.slice(0, MAX_CHARS));
  };

  const handleSwap = () => {
    setSwapRotation(r => r + 180);
    setFromLang(toLang);
    setToLang(fromLang);
    setSourceText(targetText);
  };

  const handleClear = () => {
    setSourceText("");
    setTargetText("");
    setErrorMsg(null);
    if (isListening) stopListening();
  };

  const handleCopy = async () => {
    if (!targetText) return;
    try {
      await navigator.clipboard.writeText(targetText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setErrorMsg("Could not copy to clipboard.");
    }
  };

  const handleMicToggle = () => {
    if (isListening) {
      stopListening();
      return;
    }
    baseTextRef.current = sourceText;
    startListening(
      fromLocale,
      (finalTranscript, interimTranscript) => {
        const base = baseTextRef.current;
        const spoken = `${finalTranscript}${interimTranscript}`;
        const combined = base && spoken ? `${base} ${spoken}` : base || spoken;
        setSourceText(combined.slice(0, MAX_CHARS));
      },
      message => setErrorMsg(message),
    );
  };

  const handleFromLang = (lang: string) => {
    if (lang === toLang) {
      handleSwap();
    } else {
      setFromLang(lang as Language);
    }
  };

  const handleToLang = (lang: string) => {
    if (lang === fromLang) {
      handleSwap();
    } else {
      setToLang(lang as Language);
    }
  };

  const charCount = sourceText.length;
  const textAreaSx = {
    px: 2,
    pt: 2,
    flex: 1,
    "& .MuiInputBase-root": {
      height: "100%",
      alignItems: "flex-start",
      fontFamily: multilingualTextStack,
      fontSize: "1.05rem",
    },
  };

  return (
    <Card
      elevation={0}
      sx={{ borderRadius: 4, border: "1px solid", borderColor: "divider", position: "relative" }}
    >
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Stack
          component="div"
          direction="row"
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "center", flexWrap: "wrap", mb: 3 }}
        >
          <LanguageSelect id="from-lang" label="From" value={fromLang} onChange={handleFromLang} />
          <Tooltip title="Swap languages">
            <IconButton
              onClick={handleSwap}
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
                transform: `rotate(${swapRotation}deg)`,
                transition: "transform 0.4s ease",
                "&:hover": { bgcolor: "primary.dark" },
              }}
            >
              <SwapHorizIcon />
            </IconButton>
          </Tooltip>
          <LanguageSelect id="to-lang" label="To" value={toLang} onChange={handleToLang} />
        </Stack>

        <Stack direction={{ xs: "column", md: "row" }} spacing={2.5}>
          {/* Source panel */}
          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              bgcolor: "background.default",
              border: "1px solid",
              borderColor: "divider",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Box sx={{ px: 2, pt: 1.5 }}>
              <CodeBadge code={fromLang} />
            </Box>
            <TextField
              multiline
              minRows={8}
              maxRows={8}
              placeholder="Type, paste, or dictate text to transliterate"
              value={sourceText}
              onChange={e => handleSourceChange(e.target.value)}
              variant="standard"
              slotProps={{
                input: { disableUnderline: true },
                htmlInput: { maxLength: MAX_CHARS, "aria-label": "Source text" },
              }}
              sx={textAreaSx}
            />
            <Stack
              component="div"
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between", px: 1.5, py: 1 }}
            >
              <Tooltip
                title={
                  micSupported
                    ? isListening
                      ? "Stop listening"
                      : "Voice input"
                    : "Voice input not supported in this browser"
                }
              >
                <span>
                  <IconButton
                    onClick={handleMicToggle}
                    disabled={!micSupported}
                    color={isListening ? "error" : "default"}
                    aria-label="Voice input"
                  >
                    {micSupported ? <MicIcon /> : <MicOffIcon />}
                  </IconButton>
                </span>
              </Tooltip>
              <Stack component="div" direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                <Typography variant="caption" color="text.secondary">
                  {charCount} / {MAX_CHARS}
                </Typography>
                <Tooltip title="Clear text">
                  <span>
                    <IconButton
                      onClick={handleClear}
                      disabled={!sourceText}
                      aria-label="Clear source text"
                    >
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  </span>
                </Tooltip>
              </Stack>
            </Stack>
          </Box>

          {/* Target panel */}
          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              bgcolor: "background.default",
              border: "1px solid",
              borderColor: "divider",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Box sx={{ px: 2, pt: 1.5 }}>
              <CodeBadge code={toLang} />
            </Box>
            <TextField
              multiline
              minRows={8}
              maxRows={8}
              placeholder="Transliteration appears here"
              value={targetText}
              variant="standard"
              slotProps={{
                input: { readOnly: true, disableUnderline: true },
                htmlInput: { "aria-label": "Transliterated text" },
              }}
              sx={textAreaSx}
            />
            {loading && (
              <CircularProgress size={18} sx={{ position: "absolute", top: 14, right: 16 }} />
            )}
            <Stack
              component="div"
              direction="row"
              sx={{ alignItems: "center", justifyContent: "flex-end", px: 1.5, py: 1 }}
            >
              <Tooltip title={copied ? "Copied!" : "Copy"}>
                <span>
                  <IconButton
                    onClick={handleCopy}
                    disabled={!targetText}
                    aria-label="Copy transliteration"
                  >
                    {copied ? (
                      <CheckIcon fontSize="small" color="success" />
                    ) : (
                      <ContentCopyIcon fontSize="small" />
                    )}
                  </IconButton>
                </span>
              </Tooltip>
            </Stack>
          </Box>
        </Stack>

        {errorMsg && (
          <Alert severity="error" sx={{ mt: 2 }} onClose={() => setErrorMsg(null)}>
            {errorMsg}
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
