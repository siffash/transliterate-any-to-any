import { Text } from "types";

export const skKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { skIpaRules } = await import("data/sk/sk-ipa.rules");
  const { csSkIpaRzhKoRules } = await import("data/ipa/cs_sk-ipa_rzh-ko.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { csSkIpaKoRules } = await import("data/ipa/cs_sk-ipa_ko.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(
    skIpaRules + csSkIpaRzhKoRules + csSkIpaKoRules + ipaKoFinalKpRules + ipaKoRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
