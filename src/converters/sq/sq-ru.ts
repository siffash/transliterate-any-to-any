import { Text } from "types";

export const sqRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnFinalERules } = await import("data/sq/sq-latn_final-e.rules");
  const { sqLatnLRules } = await import("data/sq/sq-latn_l.rules");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");

  return convertText(text, sqLatnFinalERules + sqLatnLRules + sqLatnRules + latnRuRules);
};
