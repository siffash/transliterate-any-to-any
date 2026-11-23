import { Text } from "types";

export const lbDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnDeRules } = await import("data/latn/latn-de.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, latnIRules + latnDeRules, { source: lbLatn });
};
