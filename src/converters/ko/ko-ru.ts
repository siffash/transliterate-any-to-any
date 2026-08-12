import { Text } from "types";

export const koRu = async (text: Text) => {
  const Aromanize = (await import("aromanize")).default;
  const { RBT } = await import("helpers/rbt-distributor");
  const { koRuRules } = await import("data/ko-ru.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(koRuRules);

  const convert = async (text: string) => {
    const split = await wordSplitter(text, "ko", text => Aromanize.romanize(text));
    return transliterator.transliterate(split);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
