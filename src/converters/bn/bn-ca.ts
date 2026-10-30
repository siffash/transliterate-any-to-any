import { Text } from "types";

export const bnCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnIpaGemRules } = await import("data/bn/bn-ipa_gem.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaCaRules } = await import("data/ipa/ipa-ca.rules");

  const transliterator = RBT.fromRules(bnIpaRules + bnIpaGemRules + ipaCaRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
