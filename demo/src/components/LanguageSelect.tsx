import { Autocomplete, FormControl, TextField, type SxProps, type Theme } from "@mui/material";
import { Language, languages } from "transliterate-any-to-any";
import { AUTO_DETECT, type SourceLanguage } from "../constants";

const sortedLanguages = (Object.keys(languages) as Language[]).sort((a, b) =>
  languages[a].name.localeCompare(languages[b].name),
);

export const LanguageSelect = ({
  id,
  label,
  value,
  onChange,
  detect,
  blurOnSelect,
  sx,
}: {
  id: string;
  label: string;
  value: SourceLanguage;
  onChange: (code: SourceLanguage) => void;
  detect?: { detectedLang: Language | undefined };
  blurOnSelect?: boolean | "touch" | "mouse";
  sx?: SxProps<Theme>;
}) => {
  const getName = (code: SourceLanguage) =>
    code === AUTO_DETECT ? "Detect language" : languages[code].name;

  return (
    <FormControl size="small" sx={[{ minWidth: 180 }, ...(Array.isArray(sx) ? sx : [sx])]}>
      <Autocomplete<SourceLanguage, false, true>
        id={id}
        options={detect ? [AUTO_DETECT, ...sortedLanguages] : sortedLanguages}
        value={value}
        onChange={(_, newValue) => {
          if (newValue) onChange(newValue);
        }}
        getOptionLabel={code =>
          code === AUTO_DETECT && detect?.detectedLang
            ? languages[detect.detectedLang].name
            : getName(code)
        }
        getOptionKey={code => code}
        renderOption={({ key, ...props }, code) => (
          <li key={key} {...props}>
            {getName(code)}
          </li>
        )}
        isOptionEqualToValue={(option, selected) => option === selected}
        filterOptions={(options, { inputValue }) => {
          const query = inputValue.toLowerCase();

          return options.filter(code => {
            const name = getName(code).toLowerCase();
            const value = code.toLowerCase();

            return name.includes(query) || value.includes(query);
          });
        }}
        renderInput={params => (
          <TextField
            {...params}
            label={value === AUTO_DETECT && detect?.detectedLang ? `${label} (detected)` : label}
            size="small"
          />
        )}
        disableClearable
        blurOnSelect={blurOnSelect}
        sx={{
          bgcolor: "background.paper",
        }}
      />
    </FormControl>
  );
};
