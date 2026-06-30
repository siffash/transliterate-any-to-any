import { Text } from "types";

export const koVi = async (text: Text) => {
  const Aromanize = (await import("aromanize")).default;
  const { RBT } = await import("icu-transliterator");
  const { koLatnRules } = await import("constants/ko-latn.rules");
  const { latnViRules } = await import("constants/latn-vi.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(koLatnRules + latnViRules);

  const convert = async (text: string) => {
    const split = wordSplitter(text, "ko");
    const romanized = Aromanize.romanize(split);
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
