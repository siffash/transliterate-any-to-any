import { Text } from "types";

export const arUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arIpaRuRules } = await import("data/ar/ar-ipa_ru.rules");
  const { ruAlRules } = await import("data/ru/ru_al.rules");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaUkRules } = await import("data/ipa/ipa-uk.rules");

  const transliterator = RBT.fromRules(
    ipaGemDRules + arIpaRuRules + ipaUkRules + ruAlRules + "::Title;" + arLowerRules,
  );

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
