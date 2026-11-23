import { Text } from "types";

export const sqLb = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnFinalERules } = await import("data/sq/sq-latn_final-e.rules");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");

  return convertText(text, sqLatnFinalERules + sqLatnRules + latnLbRules);
};
