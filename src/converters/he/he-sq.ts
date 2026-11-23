import { Text } from "types";

export const heSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaSqRules } = await import("data/ipa/ipa-sq.rules");

  return convertText(text, ipaSqRules + "::Title;", { source: heIpa });
};
