import { Text } from "types";

export const heEl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { heIpa } = await import("converters/he-ipa");
  const { ipaElRules } = await import("constants/ipa-el.rules");

  const transliterator = RBT.fromRules(ipaElRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
