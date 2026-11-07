import { Text } from "types";

export const tgBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");
  const { ruBg } = await import("converters/ru/ru-bg");
  const { convertTgRussianWords } = await import("helpers/convertTgRussianWords");

  const transliterator = RBT.fromRules(tgLatnRules + latnBgRules);

  return convertTgRussianWords(text, ruBg, text => transliterator.transliterate(text));
};
