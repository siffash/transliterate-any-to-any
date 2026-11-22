import { Text } from "types";

export const heFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { heIpa } = await import("converters/he/he-ipa");
  const { heIpaFaRules } = await import("data/he/he-ipa_fa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaYyRules } = await import("data/ipa/ipa_yy.rules");

  const transliterator = RBT.fromRules(heIpaFaRules + ipaFaRules + ipaYyRules);

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text, { addVowels: false, pharyngealHet: true });
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text, { addVowels: false, pharyngealHet: true });
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
