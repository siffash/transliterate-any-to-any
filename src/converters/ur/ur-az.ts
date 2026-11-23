import { Text } from "types";

export const urAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaAzRules } = await import("data/ipa/ipa-az.rules");
  const { ipaDottedIRules } = await import("data/ipa/ipa_dotted-i.rules");
  const { latnQHoldRules } = await import("data/latn/latn_q-hold.rules");
  const { latnQRestoreRules } = await import("data/latn/latn_q-restore.rules");

  return convertText(
    text,
    ipaAspHRules + latnQHoldRules + ipaAzRules + ipaDottedIRules + "::Title;" + latnQRestoreRules,
    { source: urIpa },
  );
};
