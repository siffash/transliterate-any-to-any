import { Text } from "types";

export const faPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { faIpaUvular } = await import("converters/fa/fa-ipa");
  const { faIpaHyRules } = await import("data/fa/fa-ipa_hy.rules");
  const { faIpaGhRules } = await import("data/fa/fa-ipa_gh.rules");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaPlArabRules } = await import("data/ipa/ipa-pl_arab.rules");
  const { ipaPlRules } = await import("data/ipa/ipa-pl.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaTRestoreRules } = await import("data/ipa/ipa_t-restore.rules");

  return convertText(
    text,
    ipaTHoldRules +
      faIpaHyRules +
      faIpaGhRules +
      faIpaARules +
      ipaPlArabRules +
      ipaPlRules +
      "::Title;" +
      faLowerRules +
      ipaTRestoreRules,
    { source: faIpaUvular },
  );
};
