import { Text } from "types";

export const sqTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnFinalERules } = await import("data/sq/sq-latn_final-e.rules");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  return convertText(text, sqLatnFinalERules + sqLatnRules + latnTgRules);
};
