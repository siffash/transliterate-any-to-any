import { Text } from "types";

export const heSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaSlRules } = await import("data/ipa/ipa-sl.rules");

  return convertText(text, ipaSlRules + "::Title;", { source: heIpa });
};
