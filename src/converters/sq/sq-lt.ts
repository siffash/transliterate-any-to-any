import { Text } from "types";

export const sqLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { sqLatnLtRules } = await import("data/sq/sq-latn_lt.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");

  return convertText(text, sqLatnLtRules + sqLatnRules + latnLtRules);
};
