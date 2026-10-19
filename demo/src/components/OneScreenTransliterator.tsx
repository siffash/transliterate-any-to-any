import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  CircularProgress,
  IconButton,
  Snackbar,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { multilingualTextStack } from "../theme";
import { useTransliterator } from "../hooks/useTransliterator";
import type { SpeechInput } from "../hooks/useSpeechRecognition";
import { MAX_CHARS } from "../constants";
import { LanguageSelect } from "./LanguageSelect";
import { CodeBadge } from "./CodeBadge";

const panelSx = {
  flex: 1,
  minHeight: 0,
  borderRadius: 3,
  bgcolor: "background.default",
  border: "1px solid",
  borderColor: "divider",
  display: "flex",
  flexDirection: "column",
  position: "relative",
} as const;

// The text area fills its panel and scrolls inside it
const textAreaSx = {
  px: 2,
  pt: 1,
  flex: 1,
  minHeight: 0,
  "& .MuiInputBase-root": {
    height: "100%",
    alignItems: "stretch",
    fontFamily: multilingualTextStack,
    fontSize: "1.05rem",
  },
  // Not the hidden copy that MUI measures the text with
  "& textarea:not([aria-hidden])": {
    height: "100% !important",
    overflow: "auto !important",
  },
};

const spinnerSx = { position: "absolute", top: 14, right: 16 } as const;

/**
 * The transliterator card laid out like the Google Translate app, for
 * OneScreenLayout: the source panel takes all the space until there is a
 * transliteration, and then shares it equally with the target panel. The
 * options are useTransliterator's.
 */
export const OneScreenTransliterator = ({
  speech,
  copyText,
  syncUrl,
  suppressErrors,
}: {
  speech: SpeechInput;
  copyText: (text: string) => Promise<void>;
  syncUrl: boolean;
  suppressErrors?: boolean;
}) => {
  const {
    langFrom,
    langTo,
    sourceText,
    targetText,
    loading,
    errorMsg,
    setErrorMsg,
    copied,
    swapRotation,
    charCount,
    micSupported,
    isListening,
    sourceTextInputRef,
    handleSourceChange,
    handleSwap,
    handleClear,
    handleCopy,
    handleMicToggle,
    handleFromLang,
    handleToLang,
  } = useTransliterator({ speech, copyText, syncUrl, suppressErrors });

  // The target panel appears with the first transliteration, and stays while
  // the next one loads (e.g. after a language change), so that the layout
  // doesn't jump; it goes away with the source text or on an error
  const [showTarget, setShowTarget] = useState(false);
  useEffect(() => {
    if (targetText) setShowTarget(true);
    else if (!sourceText.trim() || errorMsg) setShowTarget(false);
  }, [targetText, sourceText, errorMsg]);

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, px: 2, pt: 1, pb: 2 }}>
        <LanguageSelect
          id="from-lang"
          label="From"
          value={langFrom}
          onChange={handleFromLang}
          blurOnSelect="touch"
          sx={{ flex: 1, minWidth: 0 }}
        />
        <Tooltip title="Swap languages">
          <IconButton
            onClick={handleSwap}
            aria-label="Swap languages"
            sx={{
              flexShrink: 0,
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
        <LanguageSelect
          id="to-lang"
          label="To"
          value={langTo}
          onChange={handleToLang}
          blurOnSelect="touch"
          sx={{ flex: 1, minWidth: 0 }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          px: 2,
          pb: 1,
        }}
      >
        {/* Source panel */}
        <Box sx={panelSx}>
          <Box sx={{ px: 2, pt: 1.5 }}>
            <CodeBadge code={langFrom} />
          </Box>
          <TextField
            multiline
            placeholder="Type, paste, or dictate text to transliterate"
            value={sourceText}
            onChange={e => handleSourceChange(e.target.value)}
            variant="standard"
            slotProps={{
              input: { disableUnderline: true },
              htmlInput: { maxLength: MAX_CHARS, "aria-label": "Source text" },
            }}
            sx={textAreaSx}
            inputRef={sourceTextInputRef}
          />
          {loading && !showTarget && <CircularProgress size={18} sx={spinnerSx} />}
          <Stack
            component="div"
            direction="row"
            sx={{ alignItems: "center", justifyContent: "space-between", px: 1.5, py: 0.5 }}
          >
            <Tooltip
              title={
                micSupported
                  ? isListening
                    ? "Stop listening"
                    : "Voice input"
                  : "Voice input not supported on this device"
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
        {showTarget && (
          <Box sx={panelSx}>
            <Box sx={{ px: 2, pt: 1.5 }}>
              <CodeBadge code={langTo} />
            </Box>
            <TextField
              multiline
              placeholder="Transliteration appears here"
              value={targetText}
              variant="standard"
              slotProps={{
                input: { readOnly: true, disableUnderline: true },
                htmlInput: { "aria-label": "Transliterated text" },
              }}
              sx={textAreaSx}
            />
            {loading && <CircularProgress size={18} sx={spinnerSx} />}
            <Stack
              component="div"
              direction="row"
              sx={{ alignItems: "center", justifyContent: "flex-end", px: 1.5, py: 0.5 }}
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
        )}

        {/* At the bottom of the layout's column (see OneScreenLayout) rather than
            of the screen, over the footer, so that it stays above the keyboard too */}
        {!!errorMsg && (
          <Snackbar
            open
            message={
              <Alert severity="error" onClose={() => setErrorMsg(null)}>
                {errorMsg}
              </Alert>
            }
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            sx={{
              position: "absolute",
              "& .MuiSnackbarContent-root": { padding: 0 },
              "& .MuiSnackbarContent-message": { padding: 0, flexGrow: 1 },
            }}
          />
        )}
      </Box>
    </>
  );
};
