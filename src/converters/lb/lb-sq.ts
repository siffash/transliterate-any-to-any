import { Text } from "types";

export const lbSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  return convertText(text, latnSilentHRules + latnSqRules, { source: lbLatn });
};
