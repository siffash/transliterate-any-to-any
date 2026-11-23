import { Text } from "types";

export const lbBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");

  return convertText(text, latnBsRules, { source: lbLatn });
};
