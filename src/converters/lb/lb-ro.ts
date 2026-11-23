import { Text } from "types";

export const lbRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnRoKRules } = await import("data/latn/latn-ro_k.rules");

  return convertText(text, latnIRules + latnRoRules + latnRoKRules, { source: lbLatn });
};
