import { Text } from "types";

export const sqKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { sqIpaRules } = await import("data/sq/sq-ipa.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(sqIpaRules + ipaKoFinalKpRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
