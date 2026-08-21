import { Text } from "types";

export const daKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { daIpaRules } = await import("data/da/da-ipa.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(daIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
