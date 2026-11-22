import { Text } from "types";

export const tgUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnApostropheDropRules } = await import("data/latn/latn_apostrophe-drop.rules");
  const { tgLatnUkRules } = await import("data/tg/tg-latn_uk.rules");
  const { latnUkHiatusRules } = await import("data/latn/latn-uk_hiatus.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { ruUk } = await import("converters/ru/ru-uk");
  const { convertTgRussianWords } = await import("helpers/convertTgRussianWords");

  const transliterator = RBT.fromRules(
    tgLatnRules + latnApostropheDropRules + tgLatnUkRules + latnUkHiatusRules + latnUkRules,
  );

  return convertTgRussianWords(text, ruUk, text => transliterator.transliterate(text));
};
