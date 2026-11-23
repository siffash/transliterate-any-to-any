import { Text } from "types";

export const skLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { csSkLatnLvRules } = await import("data/latn/cs_sk-latn_lv.rules");

  return convertText(text, csSkLatnLvRules + skLatnRules + latnLvRules);
};
