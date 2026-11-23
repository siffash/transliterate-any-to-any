import { Text } from "types";

export const lbKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  return convertText(text, latnSilentHRules + latnKaRules, { source: lbLatn });
};
