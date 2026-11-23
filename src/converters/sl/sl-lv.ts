import { Text } from "types";

export const slLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");

  return convertText(text, slLatnRules + latnLvRules);
};
