import { Text } from "types";

export const lbEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, latnEtRules, { source: lbLatn });
};
