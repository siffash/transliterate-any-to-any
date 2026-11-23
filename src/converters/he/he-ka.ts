import { Text } from "types";

export const heKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { frHeIpaRRules } = await import("data/ipa/fr_he-ipa_r.rules");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");

  return convertText(text, frHeIpaRRules + ipaKaRules, { source: heIpa });
};
