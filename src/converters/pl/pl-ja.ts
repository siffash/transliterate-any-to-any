import { Text } from "types";

export const plJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plIpaJaRules } = await import("data/pl/pl-ipa_ja.rules");
  const { plIpaRules } = await import("data/pl/pl-ipa.rules");
  const { ipaDevoiceBgRules } = await import("data/ipa/ipa_devoice-bg.rules");
  const { ipaDevoiceDRules } = await import("data/ipa/ipa_devoice-d.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaDevoiceZRules } = await import("data/ipa/ipa_devoice-z.rules");
  const { plIpaDziRules } = await import("data/pl/pl-ipa_dzi.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(
    text,
    plIpaJaRules +
      plIpaRules +
      ipaDevoiceBgRules +
      ipaDevoiceDRules +
      ipaDevoiceVRules +
      plIpaDziRules +
      ipaDevoiceZRules +
      ipaJaRules,
  );
};
