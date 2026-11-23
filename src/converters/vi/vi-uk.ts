import { Text } from "types";

export const viUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { viLatnRuUkRules } = await import("data/vi/vi-latn_ru-uk.rules");
  const { latnUkPalatalRules } = await import("data/latn/latn-uk_palatal.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");

  return convertText(text, viLatnRules + viLatnRuUkRules + latnUkPalatalRules + latnUkRules);
};
