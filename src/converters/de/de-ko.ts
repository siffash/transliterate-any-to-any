import { Text } from "types";

export const deKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { deIpaRules } = await import("data/de/de-ipa.rules");
  const { deIpaIgRules } = await import("data/de/de-ipa_ig.rules");
  const { ipaDevoiceBgRules } = await import("data/ipa/ipa_devoice-bg.rules");
  const { ipaDevoiceDRules } = await import("data/ipa/ipa_devoice-d.rules");
  const { deIpaKoRules } = await import("data/de/de-ipa_ko.rules");
  const { ipaKoIchRules } = await import("data/ipa/ipa-ko_ich.rules");
  const { ipaKoErRules } = await import("data/ipa/ipa-ko_er.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(
    deIpaRules +
      deIpaIgRules +
      ipaDevoiceBgRules +
      ipaDevoiceDRules +
      deIpaKoRules +
      ipaKoIchRules +
      ipaKoErRules +
      ipaKoFinalKpRules +
      ipaKoRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
