import { Text } from "types";

export const hePl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { heIpaHiatusRules } = await import("data/he/he-ipa_hiatus.rules");
  const { heIpaPlRules } = await import("data/he/he-ipa_pl.rules");
  const { ipaSaltilloQuoteRules } = await import("data/ipa/ipa_saltillo-quote.rules");
  const { ipaPlRules } = await import("data/ipa/ipa-pl.rules");

  return convertText(
    text,
    heIpaHiatusRules + heIpaPlRules + ipaPlRules + "::Title;" + ipaSaltilloQuoteRules,
    { source: heIpa },
  );
};
