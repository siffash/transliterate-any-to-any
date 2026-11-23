import { Text } from "types";

export const faTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaTrRules } = await import("data/fa/fa-ipa_tr.rules");
  const { ipaTrRules } = await import("data/ipa/ipa-tr.rules");
  const { ipaDottedIRules } = await import("data/ipa/ipa_dotted-i.rules");
  const { ipaTHoldRules } = await import("data/ipa/ipa_t-hold.rules");
  const { ipaTRestoreRules } = await import("data/ipa/ipa_t-restore.rules");

  return convertText(
    text,
    ipaTHoldRules +
      faIpaTrRules +
      ipaTrRules +
      ipaDottedIRules +
      "::Title;" +
      faLowerRules +
      ipaTRestoreRules,
    { source: faIpa },
  );
};
