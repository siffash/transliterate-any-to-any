import { Text } from "types";

export const heSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaSvRules } = await import("data/ipa/ipa-sv.rules");

  return convertText(text, ipaSvRules + "::Title;", { source: heIpa });
};
