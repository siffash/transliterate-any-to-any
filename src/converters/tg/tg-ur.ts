import { Text } from "types";

export const tgUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { tgIpaRules } = await import("data/tg/tg-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { tgIpaPersoArabicRules } = await import("data/tg/tg-ipa_perso-arabic.rules");
  const { tgIpaOvaRules } = await import("data/tg/tg-ipa_ova.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { ruUr } = await import("converters/ru/ru-ur");
  const { convertTgRussianWords } = await import("helpers/convertTgRussianWords");

  const transliterator = RBT.fromRules(
    tgIpaRules + ipaDevoiceVRules + tgIpaPersoArabicRules + tgIpaOvaRules + ipaUrRules,
  );

  return convertTgRussianWords(text, ruUr, text => transliterator.transliterate(text));
};
