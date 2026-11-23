import { Text } from "types";

export const heDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaDeRules } = await import("data/ipa/ipa-de.rules");

  return convertText(text, ipaDeRules + "::Title;", { source: heIpa });
};
