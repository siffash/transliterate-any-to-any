import { Text } from "types";

export const faAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaAzRules } = await import("data/fa/fa-ipa_az.rules");
  const { ipaAzRules } = await import("data/ipa/ipa-az.rules");
  const { ipaDottedIRules } = await import("data/ipa/ipa_dotted-i.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaTRestoreRules } = await import("data/ipa/ipa_t-restore.rules");

  return convertText(
    text,
    ipaTHoldRules +
      faIpaAzRules +
      ipaAzRules +
      ipaDottedIRules +
      "::Title;" +
      faLowerRules +
      ipaTRestoreRules,
    { source: faIpa },
  );
};
