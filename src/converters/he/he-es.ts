import { Text } from "types";

export const heEs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaEsRules } = await import("constants/ipa-es.rules");

  const transliterator = RBT.fromRules(ipaEsRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
