import { Text } from "types";

export const lbEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, latnEnRules, { source: lbLatn });
};
