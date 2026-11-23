import { Text } from "types";

export const heHr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaHrRules } = await import("data/ipa/ipa-hr.rules");

  return convertText(text, ipaHrRules + "::Title;", { source: heIpa });
};
