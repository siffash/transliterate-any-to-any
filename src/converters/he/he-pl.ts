import { Text } from "types";

export const hePl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { heIpa } = await import("converters/he-ipa");
  const { ipaPlRules } = await import("constants/ipa-pl.rules");

  const transliterator = RBT.fromRules(ipaPlRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
