import { Text } from "types";

export const plKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plIpaRules } = await import("data/pl/pl-ipa.rules");
  const { ipaDevoiceBgRules } = await import("data/ipa/ipa_devoice-bg.rules");
  const { ipaDevoiceDRules } = await import("data/ipa/ipa_devoice-d.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaDevoiceZRules } = await import("data/ipa/ipa_devoice-z.rules");
  const { plIpaDziRules } = await import("data/pl/pl-ipa_dzi.rules");
  const { plIpaKoRules } = await import("data/pl/pl-ipa_ko.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(
    text,
    plIpaRules +
      ipaDevoiceBgRules +
      ipaDevoiceDRules +
      ipaDevoiceVRules +
      plIpaDziRules +
      ipaDevoiceZRules +
      plIpaKoRules +
      ipaKoFinalKpRules +
      ipaKoRules,
  );
};
