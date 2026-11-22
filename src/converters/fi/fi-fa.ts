import { Text } from "types";

export const fiFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { fiIpaRules } = await import("data/fi/fi-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaOeRules } = await import("data/ipa/ipa-fa_oe.rules");

  const transliterator = RBT.fromRules(fiIpaRules + ipaFaOeRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
