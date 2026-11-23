import { Text } from "types";

export const heTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { frHeIpaRRules } = await import("data/ipa/fr_he-ipa_r.rules");
  const { ipaTgRules } = await import("data/ipa/ipa-tg.rules");

  return convertText(text, frHeIpaRRules + ipaTgRules + "::Title;", { source: heIpa });
};
