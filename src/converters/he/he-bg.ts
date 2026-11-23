import { Text } from "types";

export const heBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaBgRules } = await import("data/ipa/ipa-bg.rules");

  return convertText(text, ipaBgRules + "::Title;", { source: heIpa });
};
