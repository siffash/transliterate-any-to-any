import { Text } from "types";

export const srLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");

  return convertText(text, srLatnRules + latnLvRules);
};
