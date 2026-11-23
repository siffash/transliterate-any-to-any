import { Text } from "types";

export const ruUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruIpaRules } = await import("data/ru/ru-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaUrInitialARules } = await import("data/ipa/ipa-ur_initial-a.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { ipaUrEyRules } = await import("data/ipa/ipa-ur_ey.rules");

  return convertText(
    text,
    ruIpaRules + ipaDevoiceVRules + ipaUrInitialARules + ipaUrRules + ipaUrEyRules,
  );
};
