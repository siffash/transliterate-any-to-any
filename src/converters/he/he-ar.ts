import { Text } from "types";

export const heAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { heIpa } = await import("converters/he/he-ipa");
  const { heArHamzaRules } = await import("data/he/he-ar_hamza.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { ipaYyRules } = await import("data/ipa/ipa_yy.rules");

  const transliterator = RBT.fromRules(ipaArRules + ipaYyRules + heArHamzaRules);

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text, { addVowels: false, pharyngealHet: true });
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text, { addVowels: false, pharyngealHet: true });
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
