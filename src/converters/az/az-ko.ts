import { Text } from "types";

export const azKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { azIpaRules } = await import("data/az/az-ipa.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(azIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
