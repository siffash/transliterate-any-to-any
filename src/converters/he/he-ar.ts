import { Text } from "types";

export const heAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { heArHamzaRules } = await import("data/he/he-ar_hamza.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { ipaYyRules } = await import("data/ipa/ipa_yy.rules");

  return convertText(text, ipaArRules + ipaYyRules + heArHamzaRules, {
    source: words => heIpa(words, { addVowels: false, pharyngealHet: true }),
  });
};
