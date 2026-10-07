import { Text } from "types";

export const thAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { thIpaRules } = await import("data/th/th-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(thIpaRules + ipaArRules);

  const convert = async (text: string) => {
    return wordSplitter(text, "th", text => transliterator.transliterate(text));
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
