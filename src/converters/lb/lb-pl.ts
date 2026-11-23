import { Text } from "types";

export const lbPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");

  return convertText(text, latnPlRules, { source: lbLatn });
};
