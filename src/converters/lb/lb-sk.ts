import { Text } from "types";

export const lbSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  return convertText(text, latnSkRules, { source: lbLatn });
};
