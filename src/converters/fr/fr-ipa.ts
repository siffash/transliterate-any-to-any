import { Text } from "types";
import type { NormalizeFrIpaOptions } from "helpers/normalizeFrIpa";

type FrIpaOptions = Omit<NormalizeFrIpaOptions, "bareBourg"> & {
  velarA?: boolean;
  velarNasals?: boolean;
  spelledEy?: boolean;
};

export const frIpa = async <T = Text>(
  text: Text,
  {
    velarA = false,
    japanese = false,
    doubleR = false,
    keepSchwa = false,
    velarNasals = false,
    finalIeu = false,
    spelledEy = false,
    doubleConsonants = false,
  }: FrIpaOptions = {},
): Promise<T> => {
  const { frIpaMap } = await import("data/fr/fr-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { frIpaRules } = await import("data/fr/fr-ipa.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { filterIpa } = await import("helpers/filterIpa");
  const { normalizeFrIpa } = await import("helpers/normalizeFrIpa");
  const { frIpaEyRules } = await import("data/fr/fr-ipa_ey.rules");

  const transliterator = RBT.fromRules(spelledEy ? frIpaEyRules + frIpaRules : frIpaRules);

  const convert = async (text: string) =>
    await wordSplitter(
      text,
      "fr",
      (word: string) => {
        word = word.toLocaleLowerCase("fr");
        const ipa =
          (!(spelledEy && /ey[bcdfghjklmnpqrstvwxz]/.test(word)) &&
            Object.prototype.hasOwnProperty.call(frIpaMap, word) &&
            filterIpa(frIpaMap[word], word, "fr")) ||
          transliterator.transliterate(word);
        return normalizeFrIpa(
          word,
          velarNasals
            ? ipa.replace(/([ɑɔɛœ])\u0303/g, "$1ŋ")
            : velarA
              ? ipa.replaceAll("ɑ̃", "ɑŋ")
              : ipa,
          { japanese, doubleR, keepSchwa, finalIeu, bareBourg: !velarA, doubleConsonants },
        );
      },
      true,
    );

  // Saint links to a vowel (or a mute h) after the hyphen: Saint-Étienne [sɛ̃tetjɛn], Сент-Этьен
  // ja/ko/th syllabify the t onto the next word (サンテチェンヌ); zh keeps it before the hyphen, which ipa-zh reads as 圣.
  // Bourg links a k the same way: Bourg-en-Bresse [buʁkɑ̃bʁɛs], Бурк-ан-Брес, ブール＝カン＝ブレス, 부르캉브레스
  const liaisons = [
    {
      spelling: /(^|[^\p{L}\p{M}])saint-[aeiouyhàâéèêëîïôûœ]/iu,
      ipa: /(^|[^\p{L}\p{M}])(s[ɛea](?:\u0303|n|ŋ)?)-(?=[aɑeɛəiɔoœøuyw])/gu,
      consonant: "t",
    },
    {
      spelling: /(^|[^\p{L}\p{M}])bourg-[aeiouyhàâéèêëîïôûœ]/iu,
      ipa: /(^|[^\p{L}\p{M}])(buʁ)-(?=[aɑeɛəiɔoœøuyw])/gu,
      consonant: "k",
    },
  ];
  const liaison = async (text: string) =>
    liaisons.reduce(
      (ipa, { spelling, ipa: linked, consonant }) =>
        spelling.test(text)
          ? ipa.replace(
              linked,
              (japanese || velarNasals) && !velarA ? `$1$2-${consonant}` : `$1$2${consonant}-`,
            )
          : ipa,
      await convert(text),
    );

  if (typeof text === "string") {
    return (await liaison(text)) as T;
  } else {
    return (await Promise.all(text.map(liaison))) as T;
  }
};
