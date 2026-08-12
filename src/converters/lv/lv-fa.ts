import { Text } from "types";

export const lvFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lvIpaRules } = await import("constants/lv-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(lvIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
