import { Text } from "types";

export const idJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { idIpaRules } = await import("data/id/id-ipa.rules");
  const { ipaFinalHRules } = await import("data/ipa/ipa_finalh.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(idIpaRules + ipaFinalHRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
