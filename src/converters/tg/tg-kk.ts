import { Text } from "types";

export const tgKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnKkRules } = await import("data/latn/latn-kk.rules");
  const { tgLatnKkRules } = await import("data/tg/tg-latn_kk.rules");
  const { ruKk } = await import("converters/ru/ru-kk");
  const { convertTgRussianWords } = await import("helpers/convertTgRussianWords");

  const transliterator = RBT.fromRules(tgLatnRules + latnKkRules + tgLatnKkRules);

  return convertTgRussianWords(text, ruKk, text => transliterator.transliterate(text));
};
