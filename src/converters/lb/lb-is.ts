import { Text } from "types";

export const lbIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, latnIsRules, { source: lbLatn });
};
