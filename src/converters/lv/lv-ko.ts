import { Text } from "types";

export const lvKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lvIpaRules } = await import("data/lv-ipa.rules");
  const { ipaKoRules } = await import("data/ipa-ko.rules");

  const transliterator = RBT.fromRules(lvIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
