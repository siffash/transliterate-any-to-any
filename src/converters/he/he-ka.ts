import { Text } from "types";

export const heKa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { heIpa } = await import("converters/he-ipa");
  const { ipaKaRules } = await import("constants/ipa-ka.rules");

  const transliterator = RBT.fromRules(ipaKaRules);

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
