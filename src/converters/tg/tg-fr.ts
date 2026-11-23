import { Text } from "types";

export const tgFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnOuHiatusRules } = await import("data/latn/latn_ou-hiatus.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  return convertText(text, tgLatnRules + latnOuHiatusRules + latnFrRules);
};
