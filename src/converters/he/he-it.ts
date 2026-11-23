import { Text } from "types";

export const heIt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaItRules } = await import("data/ipa/ipa-it.rules");

  return convertText(text, ipaItRules + "::Title;", { source: heIpa });
};
