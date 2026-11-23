import { Text } from "types";

export const lbHr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnHrRules } = await import("data/latn/latn-hr.rules");

  return convertText(text, latnHrRules, { source: lbLatn });
};
