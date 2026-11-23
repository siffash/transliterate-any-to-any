import { Text } from "types";

export const heFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaFrRules } = await import("data/ipa/ipa-fr.rules");

  return convertText(text, ipaFrRules + "::Title;", { source: heIpa });
};
