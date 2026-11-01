import { Text } from "types";

export const viUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { viLatnRuUkRules } = await import("data/vi/vi-latn_ru-uk.rules");
  const { latnUkPalatalRules } = await import("data/latn/latn-uk_palatal.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");

  const transliterator = RBT.fromRules(
    viLatnRules + viLatnRuUkRules + latnUkPalatalRules + latnUkRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
