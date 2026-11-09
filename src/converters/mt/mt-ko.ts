import { Text } from "types";

export const mtKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mtIpaRules } = await import("data/mt/mt-ipa.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaJoinRules } = await import("data/ipa/ipa_join.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(mtIpaRules + ipaKoFinalKpRules + ipaJoinRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
