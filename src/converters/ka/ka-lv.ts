import { Text } from "types";

export const kaLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");

  return convertText(text, kaLatnRules + latnLvRules);
};
