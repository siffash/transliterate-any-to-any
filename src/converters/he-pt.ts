import { Text } from "types";

export const hePt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { heIpa } = await import("converters/he-ipa");
  const { ipaPtRules } = await import("constants/ipa-pt.rules");

  const transliterator = RBT.fromRules(ipaPtRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
