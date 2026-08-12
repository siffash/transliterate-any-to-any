import { Text } from "types";

export const heEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaEnRules } = await import("data/ipa-en.rules");

  const transliterator = RBT.fromRules(ipaEnRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
