import { Text } from "types";
import type { RestoreIpaRule } from "helpers/restoreLettersInIpa";

export const enIpa = async <T = Text>(
  text: Text,
  extraRestoreRules: RestoreIpaRule[] = [],
  skippedRestoreRules: RestoreIpaRule[] = [],
): Promise<T> => {
  const { getPhonemize, getPhonemizeEnG2P } = await import("helpers/getPhonemize");
  const { toIPA } = await getPhonemize();
  const { filterIpa } = await import("helpers/filterIpa");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeEnIpa } = await import("helpers/normalizeEnIpa");
  const { RBT } = await import("helpers/rbt");
  const { enIpaRules } = await import("data/en/en-ipa.rules");

  const transliterator = RBT.fromRules(enIpaRules);
  const IRISH_O = /^o’(\p{Lu}.*)$/iu;

  // toIPA looks each word's language up in a plain object, so "constructor" finds
  // Object.prototype.constructor and throws: such words go to the English G2P directly
  const predict = async (word: string): Promise<string> => {
    // phonemize reads the Irish O' as /oʊ/ (O'Hara → Оухара, オウハラ), but O’Hara like Ohara (Охара, オハラ, 奥哈拉)
    word = word.replaceAll("’", "'").replace(/^(o)'(?=\p{L})/iu, "$1’");
    // and joined with a capitalized name it misreads the name (O'Brien /ˈɑbɹin/, O'Reilly /ˈɑɹeɪɫi/), so the name is read alone
    const irish = word.match(IRISH_O);
    if (irish) {
      return "ɔ" + (await predict(irish[1]));
    }
    // phonemize spells out a word in capitals letter by letter (JOHNSON ДЖЕЙОЭЙЧЕНЕСОУЭН), so it reads it in lowercase
    if (word.length > 1 && word === word.toUpperCase() && word !== word.toLowerCase()) {
      word = word.toLowerCase();
    }
    if (!(word.toLowerCase() in Object.prototype)) {
      return toIPA(word);
    }
    const { EnglishG2P } = await getPhonemizeEnG2P();
    return new EnglishG2P().predict(word, "en") ?? word;
  };

  // phonemize reads the abbreviation St as "street", but before a name it is Saint /sənt/ (St Helens, St Andrews)
  const SAINT = /(?<![\p{L}\p{M}])S[tT]\.?(?=\s+\p{Lu})/gu;

  const convert = async (text: string) =>
    await wordSplitter(text.replace(SAINT, "Sent"), "en", async (word: string) => {
      const ipa = filterIpa(await predict(word), word, "en");
      const converted = transliterator.transliterate(
        normalizeEnIpa(word, ipa, extraRestoreRules, skippedRestoreRules),
      );
      // The apostrophe goes back after the spelling restores, which it would shift (O'Keeffe):
      // Cyrillic targets keep it (О’Хара, О’Нил), the other IPA rules delete it
      return IRISH_O.test(word.replaceAll("'", "’")) ? converted.replace(/^ɔ/u, "ɔ’") : converted;
    });

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};
