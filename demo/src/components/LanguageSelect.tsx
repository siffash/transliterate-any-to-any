import { Autocomplete, FormControl, TextField } from "@mui/material";
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
      <Autocomplete
        id={id}
        options={(Object.keys(languages) as Language[]).sort((a, b) =>
          languages[a].name.localeCompare(languages[b].name),
        )}
        value={value}
        onChange={(_, newValue) => {
          if (newValue) onChange(newValue as Language);
        }}
        getOptionLabel={code => languages[code as Language].name}
        isOptionEqualToValue={(option, selected) => option === selected}
        filterOptions={(options, { inputValue }) => {
          const query = inputValue.toLowerCase();

          return options.filter(code => {
            const name = languages[code as Language].name.toLowerCase();
            const value = code.toLowerCase();

            return name.includes(query) || value.includes(query);
          });
        }}
        renderInput={params => <TextField {...params} label={label} size="small" />}
        disableClearable
        sx={{
          bgcolor: "background.paper",
        }}
      />
    </FormControl>
  );
};
