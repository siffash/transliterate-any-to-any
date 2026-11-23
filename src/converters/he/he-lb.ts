import { Text } from "types";

export const heLb = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaLbRules } = await import("data/ipa/ipa-lb.rules");

  return convertText(text, ipaLbRules + "::Title;", { source: heIpa });
};
