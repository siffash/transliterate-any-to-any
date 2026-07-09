import { Text } from "types";

export const heFi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaFiRules } = await import("constants/ipa-fi.rules");

  const transliterator = RBT.fromRules(ipaFiRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
