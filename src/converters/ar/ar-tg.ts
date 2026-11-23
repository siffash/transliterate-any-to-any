import { Text } from "types";

export const arTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { arIpaTgRules } = await import("data/ar/ar-ipa_tg.rules");
  const { arFaUrIpaTgRules } = await import("data/ipa/ar_fa_ur-ipa_tg.rules");
  const { ipaTgRules } = await import("data/ipa/ipa-tg.rules");

  return convertText(
    text,
    arIpaTgRules + arFaUrIpaTgRules + ipaTgRules + "::Title;" + arLowerRules,
    { source: words => arIpa(words, { dropLoneArticle: true }) },
  );
};
