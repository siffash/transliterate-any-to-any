import { Text } from "types";

export const heTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  // No ipaThKaranRules: a final cluster here is most often an unwritten vowel (אופק → โอฟก, Ofek),
  // which ์ would silence
  const transliterator = RBT.fromRules(ipaThOpenRules + ipaThRules);

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
