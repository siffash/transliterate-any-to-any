import { Text } from "types";

export const heLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaLtRules } = await import("data/ipa/ipa-lt.rules");

  return convertText(text, ipaLtRules + "::Title;", { source: heIpa });
};
