import { Text } from "types";

export const bsKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bsIpaRules } = await import("constants/bs-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(bsIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
