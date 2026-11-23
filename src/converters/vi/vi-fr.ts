import { Text } from "types";

export const viFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { viLatnGRules } = await import("data/vi/vi-latn_g.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, viLatnRules + viLatnGRules + latnIRules + latnFrRules);
};
