import { Text } from "types";

export const heFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(ipaFaRules);

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
