import { Chip } from "@mui/material";

export const CodeBadge = ({ code }: { code: string }) => {
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
};
