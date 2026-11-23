import { Text } from "types";

export const heBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaBsRules } = await import("data/ipa/ipa-bs.rules");

  return convertText(text, ipaBsRules + "::Title;", { source: heIpa });
};
