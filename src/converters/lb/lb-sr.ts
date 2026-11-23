import { Text } from "types";

export const lbSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  return convertText(text, latnSilentHRules + latnSrRules, { source: lbLatn });
};
