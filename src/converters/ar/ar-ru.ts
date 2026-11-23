import { Text } from "types";

export const arRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arIpaRuRules } = await import("data/ar/ar-ipa_ru.rules");
  const { ruAlRules } = await import("data/ru/ru_al.rules");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaRuRules } = await import("data/ipa/ipa-ru.rules");
  const { ruLlRules } = await import("data/ru/ru_ll.rules");
  const { ruLSoftRules } = await import("data/ru/ru_l-soft.rules");

  return convertText(
    text,
    ipaGemDRules +
      arIpaRuRules +
      ipaRuRules +
      ruLlRules +
      ruAlRules +
      ruLSoftRules +
      "::Title;" +
      arLowerRules,
    { source: words => arIpa(words, { firstArticleE: true }) },
  );
};
