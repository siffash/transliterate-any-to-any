import { Text } from "types";

export const bnAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
