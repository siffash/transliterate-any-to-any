import { Text } from "types";

export const caUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caIpaRules } = await import("data/ca/ca-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { caIpaXRules } = await import("data/ca/ca-ipa_x.rules");
  const { caLatnSantRules } = await import("data/ca/ca-latn_sant.rules");
  const { ipaUrInitialARules } = await import("data/ipa/ipa-ur_initial-a.rules");

  return convertText(
    text,
    caLatnSantRules + caIpaRules + caIpaXRules + ipaUrInitialARules + ipaUrRules,
  );
};
