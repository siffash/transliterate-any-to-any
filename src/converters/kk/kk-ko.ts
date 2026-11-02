import { Text } from "types";

export const kkKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kkIpaRules } = await import("data/kk/kk-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(
    kkIpaRules + ipaDevoiceVRules + ipaKoFinalKpRules + ipaKoRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
