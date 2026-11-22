import { useState } from "react";
import {
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckIcon from "@mui/icons-material/Check";
import type { Spelling } from "transliterate-any-to-any";
import { LINKS } from "../constants";

const OPTIONS: { value: Spelling; label: string; description: string }[] = [
  {
    value: "orthographic",
    label: "Orthographic",
    description: "Re-spelled by the target language's own rules",
  },
  {
    value: "established",
    label: "Established",
    description:
      "As usually written in the target language: Latin-script names kept, and the English romanization for some scripts",
  },
];

export const SpellingMenu = ({
  spelling,
  onChange,
  onOpenLink,
}: {
  spelling: Spelling;
  onChange: (spelling: Spelling) => void;
  onOpenLink?: (href: string) => void;
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const current = OPTIONS.find(option => option.value === spelling) ?? OPTIONS[0];

  return (
    <>
      <Tooltip title="Spelling">
        <Button
          onClick={event => setAnchorEl(event.currentTarget)}
          color="inherit"
          size="small"
          endIcon={<ArrowDropDownIcon />}
          aria-haspopup="menu"
          aria-expanded={Boolean(anchorEl)}
          aria-label={`Spelling: ${current.label}`}
          sx={{
            color: "text.secondary",
            whiteSpace: "nowrap",
            borderRadius: 3,
            "& .MuiButton-endIcon": { ml: 0 },
          }}
        >
          {current.label}
        </Button>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        slotProps={{ paper: { sx: { maxWidth: 320 } } }}
      >
        {OPTIONS.map(({ value, label, description }) => (
          <MenuItem
            key={value}
            selected={value === spelling}
            role="menuitemradio"
            aria-checked={value === spelling}
            onClick={() => {
              onChange(value);
              setAnchorEl(null);
            }}
            sx={{ alignItems: "flex-start", whiteSpace: "normal" }}
          >
            <ListItemIcon sx={{ mt: 0.5 }}>
              {value === spelling && <CheckIcon fontSize="small" />}
            </ListItemIcon>
            <ListItemText
              primary={label}
              secondary={description}
              sx={{ my: 0.25 }}
              slotProps={{ secondary: { sx: { lineHeight: 1.35 } } }}
            />
          </MenuItem>
        ))}
        <Divider />
        <MenuItem
          component="a"
          href={LINKS.spelling}
          target="_blank"
          rel="noopener noreferrer"
          onClick={event => {
            setAnchorEl(null);
            if (!onOpenLink) return;
            event.preventDefault();
            onOpenLink(LINKS.spelling);
          }}
          sx={{ justifyContent: "center", minHeight: 0, py: 0.5 }}
        >
          <Typography variant="caption" color="primary">
            Learn more
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
