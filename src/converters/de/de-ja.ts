import { Text } from "types";

export const deJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deIpaRules } = await import("data/de/de-ipa.rules");
  const { deIpaIgRules } = await import("data/de/de-ipa_ig.rules");
  const { ipaDevoiceBgRules } = await import("data/ipa/ipa_devoice-bg.rules");
  const { ipaDevoiceDRules } = await import("data/ipa/ipa_devoice-d.rules");
  const { deIpaJaRules } = await import("data/de/de-ipa_ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(
    text,
    deIpaRules + deIpaIgRules + ipaDevoiceBgRules + ipaDevoiceDRules + deIpaJaRules + ipaJaRules,
  );
};
