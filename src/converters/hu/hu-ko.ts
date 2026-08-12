import { Text } from "types";

export const huKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { huIpaRules } = await import("constants/hu-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(huIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
