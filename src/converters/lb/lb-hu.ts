import { Text } from "types";

export const lbHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");

  return convertText(text, latnHuRules, { source: lbLatn });
};
