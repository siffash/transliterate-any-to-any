import { Text } from "types";

export const lbTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  return convertText(text, latnTrRules, { source: lbLatn });
};
