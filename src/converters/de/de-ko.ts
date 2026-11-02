import { Text } from "types";

export const deKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { deIpaRules } = await import("data/de/de-ipa.rules");
  const { ipaDevoiceBgRules } = await import("data/ipa/ipa_devoice-bg.rules");
  const { ipaDevoiceDRules } = await import("data/ipa/ipa_devoice-d.rules");
  const { deIpaKoRules } = await import("data/de/de-ipa_ko.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(
    deIpaRules +
      ipaDevoiceBgRules +
      ipaDevoiceDRules +
      deIpaKoRules +
      ipaKoFinalKpRules +
      ipaKoRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
