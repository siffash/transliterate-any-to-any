import { Text } from "types";

export const sqKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnFinalERules } = await import("data/sq/sq-latn_final-e.rules");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { sqLatnDhRules } = await import("data/sq/sq-latn_dh.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  return convertText(text, sqLatnFinalERules + sqLatnRules + sqLatnDhRules + latnKaRules);
};
