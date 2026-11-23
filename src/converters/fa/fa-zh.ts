import { Text } from "types";

export const faZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { ipaZhChaRules } = await import("data/ipa/ipa-zh_cha.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaZhTRestoreRules } = await import("data/ipa/ipa-zh_t-restore.rules");

  return convertText(
    text,
    ipaTHoldRules + ipaGemRules + faIpaARules + ipaZhChaRules + ipaZhRules + ipaZhTRestoreRules,
    { source: faIpa },
  );
};
