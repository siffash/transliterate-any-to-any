import { Text } from "types";

export const faKk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faKkRules } = await import("data/fa/fa-kk.rules");
  const { ipaKkRules } = await import("data/ipa/ipa-kk.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaTRestoreCyrlRules } = await import("data/ipa/ipa_t-restore_cyrl.rules");

  return convertText(
    text,
    ipaTHoldRules +
      ipaGemDRules +
      faKkRules +
      ipaKkRules +
      "::Title;" +
      faLowerRules +
      ipaTRestoreCyrlRules,
    { source: faIpa },
  );
};
