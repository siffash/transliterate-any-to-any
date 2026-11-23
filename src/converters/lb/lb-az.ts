import { Text } from "types";

export const lbAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, latnSilentHRules + latnAzRules, { source: lbLatn });
};
