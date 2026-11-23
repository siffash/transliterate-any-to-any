import { Text } from "types";

export const heFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { heIpaFaRules } = await import("data/he/he-ipa_fa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaYyRules } = await import("data/ipa/ipa_yy.rules");

  return convertText(text, heIpaFaRules + ipaFaRules + ipaYyRules, {
    source: words => heIpa(words, { addVowels: false, pharyngealHet: true }),
  });
};
