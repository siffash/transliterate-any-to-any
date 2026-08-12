import { Text } from "types";

export const idKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { idIpaRules } = await import("constants/id-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(idIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
