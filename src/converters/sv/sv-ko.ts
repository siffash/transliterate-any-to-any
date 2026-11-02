import { Text } from "types";

export const svKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { svIpaRules } = await import("data/sv/sv-ipa.rules");
  const { svNoIpaRRules } = await import("data/ipa/sv_no-ipa_r.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(svIpaRules + svNoIpaRRules + ipaKoFinalKpRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
