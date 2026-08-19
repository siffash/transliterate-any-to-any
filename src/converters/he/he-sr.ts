import { Text } from "types";

export const heSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaSrRules } = await import("data/ipa/ipa-sr.rules");

  const transliterator = RBT.fromRules(ipaSrRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
