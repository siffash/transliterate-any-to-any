import { useEffect, useState } from "react";
import {
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
import ShareIcon from "@mui/icons-material/Share";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { multilingualTextStack, swapButtonSx } from "../theme";
import { useTransliterator } from "../hooks/useTransliterator";
import type { SpeechInput } from "../hooks/useSpeechRecognition";
import type { SpeechOutput } from "../hooks/useSpeechSynthesis";
import { MAX_CHARS } from "../constants";
import { LanguageSelect } from "./LanguageSelect";
import { ListenButton } from "./ListenButton";
import { SourceAlert } from "./SourceAlert";
import { useReportResultShown } from "./OneScreenLayout";

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
  pt: 2,
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

const SPINNER_SIZE = 32;
const spinnerSx = {
  position: "absolute",
  top: "50%",
  left: "50%",
  mt: `${-SPINNER_SIZE / 2}px`,
  ml: `${-SPINNER_SIZE / 2}px`,
} as const;

/**
 * The transliterator card laid out like the Google Translate app, for
 * OneScreenLayout: the source panel takes all the space until there is a
 * transliteration, and then shares it equally with the target panel. The
 * options are useTransliterator's.
 */
export const OneScreenTransliterator = ({
  speech,
  tts,
  copyText,
  syncUrl,
  suppressErrors,
}: {
  speech: SpeechInput;
  tts: SpeechOutput;
  copyText: (text: string) => Promise<void>;
  syncUrl: boolean;
  suppressErrors?: boolean;
}) => {
  const {
    langFrom,
    langTo,
    sourceLang,
    autoDetectedLang,
    sourceText,
    targetText,
    loading,
    errorMsg,
    setErrorMsg,
    detectedLang,
    copied,
    linkCopied,
    setLinkCopied,
    swapRotation,
    canSwap,
    charCount,
    micSupported,
    isListening,
    ttsSupported,
    sourceListen,
    targetListen,
    sourceTextInputRef,
    handleSourceChange,
    handleSwap,
    handleClear,
    handleCopy,
    handleShare,
    handleMicToggle,
    handleSourceListen,
    handleTargetListen,
    handleFromLang,
    handleToLang,
    handleSwitchToDetected,
    handleDismissDetected,
  } = useTransliterator({ speech, tts, copyText, syncUrl, suppressErrors });

  // The target panel appears as soon as a transliteration starts loading, and
  // stays while the next one loads (e.g. after a language change), so that the
  // layout doesn't jump; it goes away with the source text or on an error
  const [showTarget, setShowTarget] = useState(false);
  useEffect(() => {
    if (loading || targetText) setShowTarget(true);
    else if (!sourceText.trim() || errorMsg || detectedLang) setShowTarget(false);
  }, [loading, targetText, sourceText, errorMsg, detectedLang]);

  const reportResultShown = useReportResultShown();
  useEffect(() => reportResultShown(showTarget), [showTarget, reportResultShown]);

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, px: 2, pt: 1, pb: 2 }}>
        <LanguageSelect
          id="from-lang"
          label="From"
          value={langFrom}
          onChange={handleFromLang}
          detect={{ detectedLang: autoDetectedLang }}
          blurOnSelect="touch"
          sx={{ flex: 1, minWidth: 0 }}
        />
        <Tooltip title="Swap languages">
          <Box component="span" sx={{ flexShrink: 0 }}>
            <IconButton
              onClick={handleSwap}
              disabled={!canSwap}
              aria-label="Swap languages"
              sx={{ ...swapButtonSx, transform: `rotate(${swapRotation}deg)` }}
            >
              <SwapHorizIcon />
            </IconButton>
          </Box>
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
          <Stack
            component="div"
            direction="row"
            sx={{ alignItems: "center", justifyContent: "space-between", px: 1.5, py: 0.5 }}
          >
            <Stack component="div" direction="row" sx={{ alignItems: "center" }}>
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
              {ttsSupported && (
                <ListenButton
                  lang={sourceLang}
                  {...sourceListen}
                  onClick={handleSourceListen}
                  ariaLabel="Listen to source text"
                />
              )}
            </Stack>
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
            <TextField
              multiline
              placeholder={loading ? "" : "Transliteration appears here"}
              value={targetText}
              variant="standard"
              slotProps={{
                input: { readOnly: true, disableUnderline: true },
                htmlInput: { "aria-label": "Transliterated text", "aria-busy": loading },
              }}
              // The previous result stays, dimmed, while the next one loads
              sx={[textAreaSx, { opacity: loading ? 0.4 : 1, transition: "opacity 0.2s" }]}
            />
            {loading && (
              <CircularProgress size={SPINNER_SIZE} sx={spinnerSx} aria-label="Transliterating" />
            )}
            <Stack
              component="div"
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between", px: 1.5, py: 0.5 }}
            >
              {ttsSupported ? (
                <ListenButton
                  lang={langTo}
                  {...targetListen}
                  onClick={handleTargetListen}
                  ariaLabel="Listen to transliteration"
                />
              ) : (
                <span />
              )}
              <Stack component="div" direction="row" sx={{ alignItems: "center" }}>
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
                <Tooltip title="Share">
                  <span>
                    <IconButton onClick={handleShare} disabled={!targetText} aria-label="Share">
                      <ShareIcon fontSize="small" />
                    </IconButton>
                  </span>
                </Tooltip>
              </Stack>
            </Stack>
          </Box>
        )}

        {/* At the bottom of the layout's column (see OneScreenLayout) rather than
            of the screen, over the footer, so that it stays above the keyboard too */}
        <Snackbar
          open={linkCopied && !errorMsg && !detectedLang}
          autoHideDuration={3000}
          onClose={(_, reason) => reason !== "clickaway" && setLinkCopied(false)}
          message="Link copied to clipboard"
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          sx={{ position: "absolute" }}
        />

        {(!!errorMsg || !!detectedLang) && (
          <Snackbar
            open
            message={
              <SourceAlert
                errorMsg={errorMsg}
                detectedLang={detectedLang}
                onCloseError={() => setErrorMsg(null)}
                onSwitch={handleSwitchToDetected}
                onCloseDetected={handleDismissDetected}
              />
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
