import { Text } from "types";

export const heCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { heIpaHiatusRules } = await import("data/he/he-ipa_hiatus.rules");
  const { ipaSaltilloApostropheRules } = await import("data/ipa/ipa_saltillo-apostrophe.rules");
  const { ipaCsRules } = await import("data/ipa/ipa-cs.rules");

  return convertText(
    text,
    heIpaHiatusRules + ipaCsRules + "::Title;" + ipaSaltilloApostropheRules,
    { source: heIpa },
  );
};
