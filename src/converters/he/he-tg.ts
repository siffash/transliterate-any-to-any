import { Text } from "types";

export const heTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaTgRules } = await import("data/ipa/ipa-tg.rules");

  const transliterator = RBT.fromRules(ipaTgRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
