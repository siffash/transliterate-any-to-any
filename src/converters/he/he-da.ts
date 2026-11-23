import { Text } from "types";

export const heDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaDaRules } = await import("data/ipa/ipa-da.rules");

  return convertText(text, ipaDaRules + "::Title;", { source: heIpa });
};
