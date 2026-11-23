import { Text } from "types";

export const viRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { viLatnRuUkRules } = await import("data/vi/vi-latn_ru-uk.rules");
  const { latnRuPalatalRules } = await import("data/latn/latn-ru_palatal.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");

  return convertText(text, viLatnRules + viLatnRuUkRules + latnRuPalatalRules + latnRuRules);
};
