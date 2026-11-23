import { Text } from "types";

export const trLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { trLatnHRules } = await import("data/tr/tr-latn_h.rules");
  const { trLatnIyaRules } = await import("data/tr/tr-latn_iya.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, trLatnHRules + trLatnRules + trLatnIyaRules + latnIRules + latnLtRules);
};
