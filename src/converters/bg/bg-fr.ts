import { Text } from "types";

export const bgFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnOuHiatusRules } = await import("data/latn/latn_ou-hiatus.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  return convertText(text, bgLatnRules + latnOuHiatusRules + latnFrRules);
};
