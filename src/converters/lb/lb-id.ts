import { Text } from "types";

export const lbId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, latnIdRules, { source: lbLatn });
};
