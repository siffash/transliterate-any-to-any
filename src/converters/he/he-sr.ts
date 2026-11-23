import { Text } from "types";

export const heSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaSrRules } = await import("data/ipa/ipa-sr.rules");

  return convertText(text, ipaSrRules + "::Title;", { source: heIpa });
};
