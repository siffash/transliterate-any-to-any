import { Text } from "types";

export const bnRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnIpaGemDRules } = await import("data/bn/bn-ipa_gemd.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaRuRules } = await import("data/ipa/ipa-ru.rules");

  const transliterator = RBT.fromRules(bnIpaRules + bnIpaGemDRules + ipaRuRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
