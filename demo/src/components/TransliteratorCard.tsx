import {
  Alert,
  Box,
  Card,
  CardContent,
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
import { useSpeechRecognition } from "../hooks/useSpeechRecognition";
import { useTransliterator } from "../hooks/useTransliterator";
import { MAX_CHARS } from "../constants";
import { LanguageSelect } from "./LanguageSelect";
import { CodeBadge } from "./CodeBadge";

const copyText = (text: string) => navigator.clipboard.writeText(text);

export const TransliteratorCard = ({ suppressErrors = false }: { suppressErrors?: boolean }) => {
  const speech = useSpeechRecognition();
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
  } = useTransliterator({ speech, copyText, syncUrl: true, suppressErrors });

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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 3,
          }}
        >
          <LanguageSelect id="from-lang" label="From" value={langFrom} onChange={handleFromLang} />
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
          <LanguageSelect id="to-lang" label="To" value={langTo} onChange={handleToLang} />
        </Box>

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
            <Box sx={{ px: 2, pt: 2 }}>
              <CodeBadge code={langFrom} />
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
              inputRef={sourceTextInputRef}
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
            <Box sx={{ px: 2, pt: 2 }}>
              <CodeBadge code={langTo} />
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
              "& .MuiSnackbarContent-root": { padding: 0 },
              "& .MuiSnackbarContent-message": { padding: 0, flexGrow: 1 },
            }}
          />
        )}
      </CardContent>
    </Card>
  );
};
