import { Text } from "types";

export const heNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaNlRules } = await import("data/ipa/ipa-nl.rules");

  return convertText(text, ipaNlRules + "::Title;", { source: heIpa });
};
