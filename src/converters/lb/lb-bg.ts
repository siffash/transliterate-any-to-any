import { Text } from "types";

export const lbBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  return convertText(text, latnSilentHRules + latnBgRules, { source: lbLatn });
};
