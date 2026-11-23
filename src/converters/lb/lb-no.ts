import { Text } from "types";

export const lbNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnNoRules } = await import("data/latn/latn-no.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, latnIRules + latnNoRules, { source: lbLatn });
};
