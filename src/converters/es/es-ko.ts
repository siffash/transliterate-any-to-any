import { Text } from "types";

export const esKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaKoWRules } = await import("data/ipa/ipa-ko_w.rules");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { ipaLlJRules } = await import("data/ipa/ipa_ll-j.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(
    esIpaRules + ipaLlJRules + ipaKoWRules + ipaKoFinalKpRules + ipaKoRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
