import { Text } from "types";

export const heHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaHuRules } = await import("data/ipa/ipa-hu.rules");

  return convertText(text, ipaHuRules + "::Title;", { source: heIpa });
};
