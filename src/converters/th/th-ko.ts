import { Text } from "types";

export const thKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { thIpaRules } = await import("data/th/th-ipa.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(thIpaRules + ipaKoRules);

  const convert = async (text: string) => {
    return wordSplitter(text, "th", text => transliterator.transliterate(text));
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
