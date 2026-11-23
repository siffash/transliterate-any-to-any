import { Text } from "types";

export const daLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnVvRules } = await import("data/latn/latn_vv.rules");

  return convertText(text, daLatnRules + latnLtRules + latnVvRules);
};
