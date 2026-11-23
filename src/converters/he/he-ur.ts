import { Text } from "types";

export const heUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { ipaYyRules } = await import("data/ipa/ipa_yy.rules");

  return convertText(text, ipaUrRules + ipaYyRules, {
    source: words => heIpa(words, { addVowels: false, pharyngealHet: true }),
  });
};
