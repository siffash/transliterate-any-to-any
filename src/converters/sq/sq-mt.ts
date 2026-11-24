import { Text } from "types";

export const sqMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { sqLatnDhRules } = await import("data/sq/sq-latn_dh.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  return convertText(text, sqLatnRules + sqLatnDhRules + latnMtRules);
};
