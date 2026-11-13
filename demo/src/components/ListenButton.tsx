import { IconButton, Tooltip } from "@mui/material";
import StopIcon from "@mui/icons-material/Stop";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { languages, type Language } from "transliterate-any-to-any";

/**
 * Reads its text area's text aloud, or stops reading it. The caller leaves it
 * out where text-to-speech isn't supported at all.
 */
export const ListenButton = ({
  lang,
  langSupported,
  disabled,
  speaking,
  onClick,
  ariaLabel,
}: {
  lang: Language | undefined;
  langSupported: boolean;
  disabled: boolean;
  speaking: boolean;
  onClick: () => void;
  ariaLabel: string;
}) => (
  <Tooltip
    title={
      langSupported || !lang
        ? speaking
          ? "Stop"
          : "Listen"
        : `Listening isn't available for ${languages[lang]?.name ?? lang} on this device`
    }
  >
    <span>
      <IconButton
        onClick={onClick}
        disabled={disabled}
        color={speaking ? "primary" : "default"}
        aria-label={ariaLabel}
        aria-pressed={speaking}
      >
        {speaking ? <StopIcon /> : <VolumeUpIcon />}
      </IconButton>
    </span>
  </Tooltip>
);
