import { Text } from "types";

export const viRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { viLatnRuUkRules } = await import("data/vi/vi-latn_ru-uk.rules");
  const { latnRuPalatalRules } = await import("data/latn/latn-ru_palatal.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");

  const transliterator = RBT.fromRules(
    viLatnRules + viLatnRuUkRules + latnRuPalatalRules + latnRuRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
