import { Text } from "types";

export const bnHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaHyRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
