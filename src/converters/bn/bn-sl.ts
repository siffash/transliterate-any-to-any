import { Text } from "types";

export const bnSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnIpaGemRules } = await import("data/bn/bn-ipa_gem.rules");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaSlRules } = await import("data/ipa/ipa-sl.rules");

  const transliterator = RBT.fromRules(bnIpaRules + bnIpaGemRules + ipaSlRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
