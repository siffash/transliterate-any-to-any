import { Text } from "types";

export const csKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csSkIpaKoDjRules } = await import("data/ipa/cs_sk-ipa_ko-dj.rules");
  const { csIpaRules } = await import("data/cs/cs-ipa.rules");
  const { ipaDevoiceBgRules } = await import("data/ipa/ipa_devoice-bg.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaDevoiceZRules } = await import("data/ipa/ipa_devoice-z.rules");
  const { csSkIpaRzhKoRules } = await import("data/ipa/cs_sk-ipa_rzh-ko.rules");
  const { csIpaLabialERules } = await import("data/cs/cs-ipa_labial-e.rules");
  const { csIpaHardERules } = await import("data/cs/cs-ipa_hard-e.rules");
  const { csIpaHardIRules } = await import("data/cs/cs-ipa_hard-i.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { csSkIpaKoPalatalRules } = await import("data/ipa/cs_sk-ipa_ko-palatal.rules");
  const { ipaFinalDRules } = await import("data/ipa/ipa_final-d.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(
    text,
    csSkIpaKoDjRules +
      csIpaLabialERules +
      csIpaHardERules +
      csIpaHardIRules +
      csIpaRules +
      ipaDevoiceBgRules +
      ipaDevoiceVRules +
      ipaDevoiceZRules +
      csSkIpaRzhKoRules +
      csSkIpaKoPalatalRules +
      ipaFinalDRules +
      ipaKoFinalKpRules +
      ipaKoRules,
  );
};
