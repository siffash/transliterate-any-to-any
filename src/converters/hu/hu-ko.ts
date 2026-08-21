import { Text } from "types";

export const huKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { huIpaRules } = await import("data/hu/hu-ipa.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(huIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
