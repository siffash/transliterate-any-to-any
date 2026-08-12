import { Text } from "types";

export const bnKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
