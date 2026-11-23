import { Text } from "types";

export const heIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaIsRules } = await import("data/ipa/ipa-is.rules");

  return convertText(text, ipaIsRules + "::Title;", { source: heIpa });
};
