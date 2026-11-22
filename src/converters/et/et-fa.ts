import { Text } from "types";

export const etFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etIpaRules } = await import("data/et/et-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaOeRules } = await import("data/ipa/ipa-fa_oe.rules");

  const transliterator = RBT.fromRules(etIpaRules + ipaFaOeRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
