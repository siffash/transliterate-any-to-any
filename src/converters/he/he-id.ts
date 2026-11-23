import { Text } from "types";

export const heId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaIdRules } = await import("data/ipa/ipa-id.rules");

  return convertText(text, ipaIdRules + "::Title;", { source: heIpa });
};
