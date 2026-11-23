import { Text } from "types";

export const lbCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnCsRules } = await import("data/latn/latn-cs.rules");

  return convertText(text, latnCsRules, { source: lbLatn });
};
