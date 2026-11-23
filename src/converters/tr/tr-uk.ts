import { Text } from "types";

export const trUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnOeRules } = await import("data/latn/latn_oe.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");

  return convertText(text, trLatnRules + latnOeRules + latnUkRules);
};
