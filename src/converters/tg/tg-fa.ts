import { Text } from "types";

export const tgFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { tgIpaRules } = await import("data/tg/tg-ipa.rules");
  const { tgIpaPersoArabicNamesRules } = await import("data/tg/tg-ipa_perso-arabic-names.rules");
  const { tgIpaShortURules } = await import("data/tg/tg-ipa_short-u.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { tgIpaPersoArabicRules } = await import("data/tg/tg-ipa_perso-arabic.rules");
  const { tgIpaOvaRules } = await import("data/tg/tg-ipa_ova.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ruFa } = await import("converters/ru/ru-fa");
  const { convertTgRussianWords } = await import("helpers/convertTgRussianWords");

  const transliterator = RBT.fromRules(
    tgIpaRules +
      tgIpaPersoArabicNamesRules +
      tgIpaShortURules +
      ipaDevoiceVRules +
      tgIpaPersoArabicRules +
      tgIpaOvaRules +
      ipaFaRules,
  );

  return convertTgRussianWords(text, ruFa, text => transliterator.transliterate(text));
};
