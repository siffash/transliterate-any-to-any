import { Text } from "types";

export const heMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaMkRules } = await import("data/ipa-mk.rules");

  const transliterator = RBT.fromRules(ipaMkRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
