import { Text } from "types";

export const faUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaShahrRules } = await import("data/fa/fa-ipa_shahr.rules");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaUkRules } = await import("data/ipa/ipa-uk.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaTRestoreCyrlRules } = await import("data/ipa/ipa_t-restore_cyrl.rules");

  return convertText(
    text,
    ipaTHoldRules +
      ipaGemDRules +
      faIpaShahrRules +
      faIpaARules +
      ipaUkRules +
      "::Title;" +
      faLowerRules +
      ipaTRestoreCyrlRules,
    { source: faIpa },
  );
};
