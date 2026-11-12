import { Text } from "types";

export const heCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { heIpa } = await import("converters/he/he-ipa");
  const { heIpaHiatusRules } = await import("data/he/he-ipa_hiatus.rules");
  const { ipaSaltilloApostropheRules } = await import("data/ipa/ipa_saltillo-apostrophe.rules");
  const { ipaCsRules } = await import("data/ipa/ipa-cs.rules");

  const transliterator = RBT.fromRules(
    heIpaHiatusRules + ipaCsRules + "::Title;" + ipaSaltilloApostropheRules,
  );

  if (typeof text === "string") {
    const ipa = await heIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await heIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
