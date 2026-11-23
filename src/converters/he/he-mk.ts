import { Text } from "types";

export const heMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaMkRules } = await import("data/ipa/ipa-mk.rules");

  return convertText(text, ipaMkRules + "::Title;", { source: heIpa });
};
