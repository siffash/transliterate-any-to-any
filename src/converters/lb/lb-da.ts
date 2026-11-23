import { Text } from "types";

export const lbDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnDaRules } = await import("data/latn/latn-da.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, latnIRules + latnDaRules, { source: lbLatn });
};
