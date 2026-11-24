import { Text } from "types";

export const sqFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { sqLatnDhRules } = await import("data/sq/sq-latn_dh.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");

  return convertText(text, sqLatnRules + sqLatnDhRules + latnFiRules);
};
