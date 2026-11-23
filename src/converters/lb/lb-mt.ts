import { Text } from "types";

export const lbMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  return convertText(text, latnMtRules, { source: lbLatn });
};
