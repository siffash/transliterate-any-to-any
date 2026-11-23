import { Text } from "types";

export const heFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaFiRules } = await import("data/ipa/ipa-fi.rules");

  return convertText(text, ipaFiRules + "::Title;", { source: heIpa });
};
