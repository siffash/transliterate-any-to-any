import { Text } from "types";

export const heLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaLvRules } = await import("data/ipa/ipa-lv.rules");

  return convertText(text, ipaLvRules + "::Title;", { source: heIpa });
};
