import { Text } from "types";

export const thAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { thIpa } = await import("converters/th/th-ipa");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeTh } = await import("helpers/normalizeTh");

  const toIpa = await thIpa();
  const transliterator = RBT.fromRules(ipaArRules);

  const convert = async (text: string) => {
    return transliterator.transliterate(await wordSplitter(normalizeTh(text), "th", toIpa));
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
