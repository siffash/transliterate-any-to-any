import { Text } from "types";

export const faFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { faIpaEhRules } = await import("data/fa/fa-ipa_eh.rules");
  const { ipaFiRules } = await import("data/ipa/ipa-fi.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaTRestoreRules } = await import("data/ipa/ipa_t-restore.rules");

  return convertText(
    text,
    ipaTHoldRules +
      ipaGemTRules +
      faIpaARules +
      faIpaEhRules +
      ipaFiRules +
      "::Title;" +
      faLowerRules +
      ipaTRestoreRules,
    { source: faIpa },
  );
};
