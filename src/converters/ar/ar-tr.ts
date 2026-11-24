import { Text } from "types";

export const arTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arTrRules } = await import("data/ar/ar-tr.rules");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { arIpaTrRules } = await import("data/ar/ar-ipa_tr.rules");
  const { ipaTrRules } = await import("data/ipa/ipa-tr.rules");
  const { ipaDottedIRules } = await import("data/ipa/ipa_dotted-i.rules");

  return convertText(
    text,
    arIpaTrRules + ipaTrRules + arTrRules + ipaDottedIRules + "::Title;" + arLowerRules,
    {
      source: arIpa,
    },
  );
};
