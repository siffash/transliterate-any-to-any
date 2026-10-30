import { Text } from "types";

export const bnEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaEtRules } = await import("data/ipa/ipa-et.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaGemTRules + ipaEtRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
