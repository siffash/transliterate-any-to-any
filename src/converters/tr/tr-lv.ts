import { Text } from "types";

export const trLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { trLatnGRules } = await import("data/tr/tr-latn_g.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnLvUmlautRules } = await import("data/latn/latn-lv_umlaut.rules");

  return convertText(text, trLatnGRules + trLatnRules + latnLvUmlautRules + latnLvRules);
};
