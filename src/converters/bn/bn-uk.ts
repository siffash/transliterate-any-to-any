import { Text } from "types";

export const bnUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnIpaGemDRules } = await import("data/bn/bn-ipa_gemd.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaUkRules } = await import("data/ipa/ipa-uk.rules");

  const transliterator = RBT.fromRules(bnIpaRules + bnIpaGemDRules + ipaUkRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
