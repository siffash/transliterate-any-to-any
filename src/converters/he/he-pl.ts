import { Text } from "types";

export const hePl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { heIpa } = await import("converters/he/he-ipa");
  const { heIpaHiatusRules } = await import("data/he/he-ipa_hiatus.rules");
  const { heIpaPlRules } = await import("data/he/he-ipa_pl.rules");
  const { ipaSaltilloQuoteRules } = await import("data/ipa/ipa_saltillo-quote.rules");
  const { ipaPlRules } = await import("data/ipa/ipa-pl.rules");

  const transliterator = RBT.fromRules(
    heIpaHiatusRules + heIpaPlRules + ipaPlRules + "::Title;" + ipaSaltilloQuoteRules,
  );

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
