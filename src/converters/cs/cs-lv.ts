import { Text } from "types";

export const csLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { csLatnNjRules } = await import("data/cs/cs-latn_nj.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { csSkLatnLvRules } = await import("data/latn/cs_sk-latn_lv.rules");

  return convertText(text, csLatnNjRules + csSkLatnLvRules + csLatnRules + latnLvRules);
};
