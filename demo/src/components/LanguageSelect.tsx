import { FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import { Language, languages } from "transliterate-any-to-any";

export const LanguageSelect = ({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (code: Language) => void;
}) => {
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
};
