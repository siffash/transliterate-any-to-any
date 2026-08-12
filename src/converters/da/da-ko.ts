import { Text } from "types";

export const daKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { daIpaRules } = await import("constants/da-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(daIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
