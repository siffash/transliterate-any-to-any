import { Text } from "types";

export const mtLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");

  return convertText(text, mtLatnRules + latnLvRules);
};
