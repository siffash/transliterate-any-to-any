import { Text } from "types";

export const lbSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");

  return convertText(text, latnSlRules, { source: lbLatn });
};
