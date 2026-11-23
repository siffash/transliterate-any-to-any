import { Text } from "types";

export const sqDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnFinalERules } = await import("data/sq/sq-latn_final-e.rules");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, sqLatnFinalERules + sqLatnRules + latnDeRules);
};
