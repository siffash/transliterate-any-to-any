import { Text } from "types/languages";

export const heAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { heIpa } = await import("utils/he-ipa");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(ipaArRules);

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
