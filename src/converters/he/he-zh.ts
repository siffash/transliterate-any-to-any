import { Text } from "types";

export const heZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(ipaZhRules);

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
