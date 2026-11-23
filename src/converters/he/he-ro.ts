import { Text } from "types";

export const heRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaRoRules } = await import("data/ipa/ipa-ro.rules");

  return convertText(text, ipaRoRules + "::Title;", { source: heIpa });
};
