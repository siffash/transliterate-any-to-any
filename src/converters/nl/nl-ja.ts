import { Text } from "types";

export const nlJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlIpaRules } = await import("data/nl/nl-ipa.rules");
  const { nlIpaJaRules } = await import("data/nl/nl-ipa_ja.rules");
  const { ipaDevoiceBgRules } = await import("data/ipa/ipa_devoice-bg.rules");
  const { ipaDevoiceDRules } = await import("data/ipa/ipa_devoice-d.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaDevoiceZRules } = await import("data/ipa/ipa_devoice-z.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(
    text,
    nlIpaRules +
      nlIpaJaRules +
      ipaDevoiceBgRules +
      ipaDevoiceDRules +
      ipaDevoiceVRules +
      ipaDevoiceZRules +
      ipaJaRules,
  );
};
