import { Text } from "types";

export const sqEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { sqLatnDhRules } = await import("data/sq/sq-latn_dh.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, sqLatnRules + sqLatnDhRules + latnEtRules);
};
