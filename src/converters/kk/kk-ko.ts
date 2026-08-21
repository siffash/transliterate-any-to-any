import { Text } from "types";

export const kkKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kkIpaRules } = await import("data/kk/kk-ipa.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(kkIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
