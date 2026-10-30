import { Text } from "types";

export const bnEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaEsRules } = await import("data/ipa/ipa-es.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaGemRules + ipaEsRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
