import { Text } from "types";

export const sqTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { sqLatnDhRules } = await import("data/sq/sq-latn_dh.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  return convertText(text, sqLatnRules + sqLatnDhRules + latnTrRules);
};
