import { Text } from "types";

export const heCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaCaRules } = await import("data/ipa/ipa-ca.rules");

  return convertText(text, ipaCaRules + "::Title;", { source: heIpa });
};
