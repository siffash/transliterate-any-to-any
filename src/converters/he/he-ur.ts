import { Text } from "types";

export const heUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { ipaYyRules } = await import("data/ipa/ipa_yy.rules");

  const transliterator = RBT.fromRules(ipaUrRules + ipaYyRules);

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text, { addVowels: false, pharyngealHet: true });
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text, { addVowels: false, pharyngealHet: true });
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
