import { Text } from "types";

export const faMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { faIpaEhRules } = await import("data/fa/fa-ipa_eh.rules");
  const { ipaMsRules } = await import("data/ipa/ipa-ms.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaTRestoreRules } = await import("data/ipa/ipa_t-restore.rules");

  return convertText(
    text,
    ipaTHoldRules +
      ipaGemRules +
      faIpaARules +
      faIpaEhRules +
      ipaMsRules +
      "::Title;" +
      faLowerRules +
      ipaTRestoreRules,
    { source: faIpa },
  );
};
