import { Text } from "types";

export const skKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { csSkIpaKoDjRules } = await import("data/ipa/cs_sk-ipa_ko-dj.rules");
  const { skIpaRules } = await import("data/sk/sk-ipa.rules");
  const { ipaDevoiceBgRules } = await import("data/ipa/ipa_devoice-bg.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaDevoiceZRules } = await import("data/ipa/ipa_devoice-z.rules");
  const { csSkIpaRzhKoRules } = await import("data/ipa/cs_sk-ipa_rzh-ko.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { csSkIpaKoPalatalRules } = await import("data/ipa/cs_sk-ipa_ko-palatal.rules");
  const { ipaFinalDRules } = await import("data/ipa/ipa_final-d.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");
  const { skIpaKoVRules } = await import("data/sk/sk-ipa_ko-v.rules");

  const transliterator = RBT.fromRules(
    csSkIpaKoDjRules +
      skIpaRules +
      skIpaKoVRules +
      ipaDevoiceBgRules +
      ipaDevoiceVRules +
      ipaDevoiceZRules +
      csSkIpaRzhKoRules +
      csSkIpaKoPalatalRules +
      ipaFinalDRules +
      ipaKoFinalKpRules +
      ipaKoRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
