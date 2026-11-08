import { Text } from "types";

export const tgAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { tgIpaRules } = await import("data/tg/tg-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { tgIpaPersoArabicRules } = await import("data/tg/tg-ipa_perso-arabic.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { ruAr } = await import("converters/ru/ru-ar");
  const { convertTgRussianWords } = await import("helpers/convertTgRussianWords");

  const transliterator = RBT.fromRules(
    tgIpaRules + ipaDevoiceVRules + tgIpaPersoArabicRules + ipaArRules,
  );

  return convertTgRussianWords(text, ruAr, text => transliterator.transliterate(text));
};
