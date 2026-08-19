import { Text } from "types";

export const lvFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lvIpaRules } = await import("data/lv/lv-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(lvIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
