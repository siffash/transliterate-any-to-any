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
  const { csSkIpaKoRules } = await import("data/ipa/cs_sk-ipa_ko.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(
    csSkIpaKoDjRules +
      skIpaRules +
      ipaDevoiceBgRules +
      ipaDevoiceVRules +
      ipaDevoiceZRules +
      csSkIpaRzhKoRules +
      csSkIpaKoPalatalRules +
      csSkIpaKoRules +
      ipaKoFinalKpRules +
      ipaKoRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
