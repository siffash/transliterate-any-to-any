import { Text } from "types";

export const heEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaElRules } = await import("data/ipa/ipa-el.rules");

  return convertText(text, ipaElRules + "::Title;", { source: heIpa });
};
