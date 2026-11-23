import { Text } from "types";

export const faHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { ipaGemHuRules } = await import("data/ipa/ipa_gemhu.rules");
  const { faIpaUvular } = await import("converters/fa/fa-ipa");
  const { faIpaKRules } = await import("data/fa/fa-ipa_k.rules");
  const { faIpaGhRules } = await import("data/fa/fa-ipa_gh.rules");
  const { faIpaShortIuRules } = await import("data/fa/fa-ipa_short-iu.rules");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaHuRules } = await import("data/ipa/ipa-hu.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaTRestoreRules } = await import("data/ipa/ipa_t-restore.rules");

  return convertText(
    text,
    ipaTHoldRules +
      faIpaKRules +
      faIpaGhRules +
      faIpaShortIuRules +
      ipaGemHuRules +
      faIpaARules +
      ipaHuRules +
      "::Title;" +
      faLowerRules +
      ipaTRestoreRules,
    { source: faIpaUvular },
  );
};
