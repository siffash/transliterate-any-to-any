import { Text } from "types";

export const bgUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgIpaRules } = await import("data/bg/bg-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaUrInitialARules } = await import("data/ipa/ipa-ur_initial-a.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { ipaUrEyRules } = await import("data/ipa/ipa-ur_ey.rules");

  return convertText(
    text,
    bgIpaRules + ipaDevoiceVRules + ipaUrInitialARules + ipaUrRules + ipaUrEyRules,
  );
};
