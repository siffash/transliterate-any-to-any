import { Text } from "types";

export const skJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skIpaRules } = await import("data/sk/sk-ipa.rules");
  const { ipaDevoiceBgRules } = await import("data/ipa/ipa_devoice-bg.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaDevoiceZRules } = await import("data/ipa/ipa_devoice-z.rules");
  const { csSkIpaRzhJaRules } = await import("data/ipa/cs_sk-ipa_rzh-ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(
    text,
    skIpaRules +
      ipaDevoiceBgRules +
      ipaDevoiceVRules +
      ipaDevoiceZRules +
      csSkIpaRzhJaRules +
      ipaJaRules,
  );
};
