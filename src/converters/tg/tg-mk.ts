import { Text } from "types";

export const tgMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");
  const { ruMk } = await import("converters/ru/ru-mk");
  const { convertTgRussianWords } = await import("helpers/convertTgRussianWords");

  const transliterator = RBT.fromRules(tgLatnRules + latnMkRules);

  return convertTgRussianWords(text, ruMk, text => transliterator.transliterate(text));
};
