import { Text } from "types";

export const arHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaHyRRules } = await import("data/ipa/ipa-hy_r.rules");
  const { ipaHyThRules } = await import("data/ipa/ipa-hy_th.rules");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");
  const { arIpaHyRules } = await import("data/ar/ar-ipa_hy.rules");

  return convertText(
    text,
    arIpaHyRules + ipaHyThRules + ipaHyRRules + ipaHyRules + "::Title;" + arLowerRules,
    { source: arIpa },
  );
};
