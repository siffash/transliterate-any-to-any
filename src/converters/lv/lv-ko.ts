import { Text } from "types";

export const lvKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lvIpaRules } = await import("data/lv/lv-ipa.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(lvIpaRules + ipaKoFinalKpRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
