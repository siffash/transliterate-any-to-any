import { Text } from "types";

export const heBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaBnYRules } = await import("data/ipa/ipa-bn_y.rules");
  const { ipaBnAjRules } = await import("data/ipa/ipa-bn_aj.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, ipaBnAjRules + ipaBnYRules + ipaBnRules, { source: heIpa });
};
