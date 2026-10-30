import { Text } from "types";

export const idKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { idIpaRules } = await import("data/id/id-ipa.rules");
  const { ipaFinalHRules } = await import("data/ipa/ipa_finalh.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(idIpaRules + ipaFinalHRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
