import { Text } from "types";

export const lbSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, latnIRules + latnSvRules, { source: lbLatn });
};
