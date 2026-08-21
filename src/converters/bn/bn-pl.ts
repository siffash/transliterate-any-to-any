import { Text } from "types";

export const bnPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaPlRules } = await import("data/ipa/ipa-pl.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaPlRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
