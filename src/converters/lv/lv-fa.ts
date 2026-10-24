import { Text } from "types";

export const lvFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lvIpaRules } = await import("data/lv/lv-ipa.rules");
  const { lvIpaFaRules } = await import("data/lv/lv-ipa_fa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(lvIpaRules + lvIpaFaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
