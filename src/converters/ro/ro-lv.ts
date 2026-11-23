import { Text } from "types";

export const roLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { roLatnVjvRules } = await import("data/ro/ro-latn_vjv.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");

  return convertText(text, roLatnRules + roLatnVjvRules + latnLvRules);
};
