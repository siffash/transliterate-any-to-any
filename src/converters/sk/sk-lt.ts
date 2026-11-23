import { Text } from "types";

export const skLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { csSkLatnLtRules } = await import("data/latn/cs_sk-latn_lt.rules");

  return convertText(text, csSkLatnLtRules + skLatnRules + latnLtRules);
};
