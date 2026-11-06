import { Text } from "types";

export const heKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { heIpa } = await import("converters/he/he-ipa");
  const { frHeIpaRRules } = await import("data/ipa/fr_he-ipa_r.rules");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");

  const transliterator = RBT.fromRules(frHeIpaRRules + ipaKaRules);

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
