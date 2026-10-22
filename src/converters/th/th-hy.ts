import { Text } from "types";

export const thHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { thIpa } = await import("converters/th/th-ipa");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeTh } = await import("helpers/normalizeTh");

  const toIpa = await thIpa();
  const transliterator = RBT.fromRules(ipaHyRules + "::Title;");

  const convert = async (text: string) => {
    return wordSplitter(normalizeTh(text), "th", text => transliterator.transliterate(toIpa(text)));
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
