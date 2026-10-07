import { Text } from "types";

export const thHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { thIpaRules } = await import("data/th/th-ipa.rules");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(thIpaRules + ipaHyRules + "::Title;");

  const convert = async (text: string) => {
    return wordSplitter(text, "th", text => transliterator.transliterate(text));
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
