import { Text } from "types";

export const itKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { itIpaKoRules } = await import("data/it/it-ipa_ko.rules");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(itIpaRules + itIpaKoRules + ipaKoFinalKpRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
