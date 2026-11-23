import { Text } from "types";

export const heHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { frHeIpaRRules } = await import("data/ipa/fr_he-ipa_r.rules");
  const { ipaHyThRules } = await import("data/ipa/ipa-hy_th.rules");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(text, ipaHyThRules + frHeIpaRRules + ipaHyRules + hyEvRules + "::Title;", {
    source: heIpa,
  });
};
