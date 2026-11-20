import { Alert, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Language, languages } from "transliterate-any-to-any";

export const SourceAlert = ({
  errorMsg,
  detectedLang,
  onCloseError,
  onSwitch,
  onCloseDetected,
}: {
  errorMsg: string | null;
  detectedLang: Language | null;
  onCloseError: () => void;
  onSwitch: () => void;
  onCloseDetected: () => void;
}) =>
  errorMsg || !detectedLang ? (
    <Alert severity="error" onClose={onCloseError}>
      {errorMsg}
    </Alert>
  ) : (
    <Alert
      severity="warning"
      action={
        <>
          <Button color="inherit" size="small" onClick={onSwitch}>
            Switch
          </Button>
          <IconButton color="inherit" size="small" onClick={onCloseDetected} aria-label="Close">
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
      sx={{
        alignItems: "center",
        ".MuiAlert-action": { pt: 0 },
      }}
    >
      This looks like {languages[detectedLang].name}.
    </Alert>
  );
