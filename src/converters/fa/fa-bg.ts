import { Text } from "types";

export const faBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaBgRules } = await import("data/ipa/ipa-bg.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaTRestoreCyrlRules } = await import("data/ipa/ipa_t-restore_cyrl.rules");

  return convertText(
    text,
    ipaTHoldRules +
      ipaGemRules +
      faIpaARules +
      ipaBgRules +
      "::Title;" +
      faLowerRules +
      ipaTRestoreCyrlRules,
    { source: faIpa },
  );
};
