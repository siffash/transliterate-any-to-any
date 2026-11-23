import { Text } from "types";

export const heTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaTrRules } = await import("data/ipa/ipa-tr.rules");
  const { ipaDottedIRules } = await import("data/ipa/ipa_dotted-i.rules");

  return convertText(text, ipaTrRules + ipaDottedIRules + "::Title;", { source: heIpa });
};
