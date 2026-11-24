import { Text } from "types";

export const sqSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnFinalERules } = await import("data/sq/sq-latn_final-e.rules");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { sqLatnDhRules } = await import("data/sq/sq-latn_dh.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");

  return convertText(text, sqLatnFinalERules + sqLatnRules + sqLatnDhRules + latnSlRules);
};
