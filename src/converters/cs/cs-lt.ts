import { Text } from "types";

export const csLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { csSkLatnLtRules } = await import("data/latn/cs_sk-latn_lt.rules");

  return convertText(text, csSkLatnLtRules + csLatnRules + latnLtRules);
};
