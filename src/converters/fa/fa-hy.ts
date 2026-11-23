import { Text } from "types";

export const faHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { faIpaHyRules } = await import("data/fa/fa-ipa_hy.rules");
  const { faIpaHyAspirateRules } = await import("data/fa/fa-ipa_hy-aspirate.rules");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaHyTRestoreRules } = await import("data/ipa/ipa-hy_t-restore.rules");

  return convertText(
    text,
    ipaTHoldRules +
      faIpaHyRules +
      faIpaHyAspirateRules +
      faIpaARules +
      ipaHyRules +
      "::Title;" +
      faLowerRules +
      ipaHyTRestoreRules,
    { source: faIpa },
  );
};
