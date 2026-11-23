import { Text } from "types";

export const lbMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  return convertText(text, latnMsRules, { source: lbLatn });
};
