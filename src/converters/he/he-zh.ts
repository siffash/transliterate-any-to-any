import { Text } from "types";

export const heZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { ipaZhTiRules } = await import("data/ipa/ipa-zh_ti.rules");

  return convertText(text, ipaZhTiRules + ipaZhRules, { source: heIpa });
};
