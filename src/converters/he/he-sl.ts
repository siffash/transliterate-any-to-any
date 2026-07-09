import { Text } from "types";

export const heSl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaSlRules } = await import("constants/ipa-sl.rules");

  const transliterator = RBT.fromRules(ipaSlRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
