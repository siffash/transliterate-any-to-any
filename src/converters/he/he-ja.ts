import { Text } from "types";

export const heJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { heIpaJaRules } = await import("data/he/he-ipa_ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(text, heIpaJaRules + ipaJaRules, { source: heIpa });
};
