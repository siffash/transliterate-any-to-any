import { Text } from "types";

export const bnFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaFiRules } = await import("data/ipa/ipa-fi.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaGemTRules + ipaFiRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
