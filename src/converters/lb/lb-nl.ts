import { Text } from "types";

export const lbNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, latnIRules + latnNlRules, { source: lbLatn });
};
