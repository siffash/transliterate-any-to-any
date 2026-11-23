import { Text } from "types";

export const faLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { faIpaUvular } = await import("converters/fa/fa-ipa");
  const { faIpaKRules } = await import("data/fa/fa-ipa_k.rules");
  const { faIpaGhRules } = await import("data/fa/fa-ipa_gh.rules");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaLtRules } = await import("data/ipa/ipa-lt.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaTRestoreRules } = await import("data/ipa/ipa_t-restore.rules");

  return convertText(
    text,
    ipaTHoldRules +
      faIpaKRules +
      faIpaGhRules +
      ipaGemRules +
      faIpaARules +
      ipaLtRules +
      "::Title;" +
      faLowerRules +
      ipaTRestoreRules,
    { source: faIpaUvular },
  );
};
