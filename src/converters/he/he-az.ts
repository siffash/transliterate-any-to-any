import { Text } from "types";

export const heAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaAzRules } = await import("data/ipa/ipa-az.rules");
  const { ipaDottedIRules } = await import("data/ipa/ipa_dotted-i.rules");

  return convertText(text, ipaAzRules + ipaDottedIRules + "::Title;", { source: heIpa });
};
