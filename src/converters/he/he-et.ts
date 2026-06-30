import { Text } from "types";

export const heEt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { heIpa } = await import("converters/he-ipa");
  const { ipaEtRules } = await import("constants/ipa-et.rules");

  const transliterator = RBT.fromRules(ipaEtRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
