import { Text } from "types";

export const heHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(text, ipaHiRules, { source: heIpa });
};
