import { Text } from "types";

export const thKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { thIpa } = await import("converters/th/th-ipa");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeTh } = await import("helpers/normalizeTh");

  const toIpa = await thIpa();
  const transliterator = RBT.fromRules(ipaKaRules);

  const convert = async (text: string) => {
    return wordSplitter(normalizeTh(text), "th", text => transliterator.transliterate(toIpa(text)));
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
