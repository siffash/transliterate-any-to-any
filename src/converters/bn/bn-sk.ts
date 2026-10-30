import { Text } from "types";

export const bnSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnIpaGemDRules } = await import("data/bn/bn-ipa_gemd.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaSkRules } = await import("data/ipa/ipa-sk.rules");

  const transliterator = RBT.fromRules(bnIpaRules + bnIpaGemDRules + ipaSkRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
