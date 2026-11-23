import { Text } from "types";

export const sqEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnFinalERules } = await import("data/sq/sq-latn_final-e.rules");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, sqLatnFinalERules + sqLatnRules + latnElRules);
};
