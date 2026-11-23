import { Text } from "types";
import type { RestoreIpaRule } from "helpers/restoreLettersInIpa";

export const enIpa = async <T = Text>(
  text: Text,
  extraRestoreRules: RestoreIpaRule[] = [],
  skippedRestoreRules: RestoreIpaRule[] = [],
  extraIpaRules = "",
): Promise<T> => {
  const { mapText } = await import("helpers/convertText");
  const { getPhonemize, getPhonemizeEnG2P } = await import("helpers/getPhonemize");
  const { toIPA } = await getPhonemize();
  const { filterIpa } = await import("helpers/filterIpa");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeEnIpa } = await import("helpers/normalizeEnIpa");
  const { RBT } = await import("helpers/rbt");
  const { enIpaRules } = await import("data/en/en-ipa.rules");
  const { enIpaOwRules } = await import("data/en/en-ipa_ow.rules");

  const transliterator = RBT.fromRules(enIpaRules + extraIpaRules + enIpaOwRules);
  const IRISH_O = /^o’(\p{Lu}.*)$/iu;

  const predict = async (word: string): Promise<string> => {
    word = word.replaceAll("’", "'").replace(/^(o)'(?=\p{L})/iu, "$1’");
    const irish = word.match(IRISH_O);
    if (irish) {
      return "ɔ" + (await predict(irish[1]));
    }
    if (word.length > 1 && word === word.toUpperCase() && word !== word.toLowerCase()) {
      word = word.toLowerCase();
    }
    if (!(word.toLowerCase() in Object.prototype)) {
      return toIPA(word);
    }
    const { EnglishG2P } = await getPhonemizeEnG2P();
    return new EnglishG2P().predict(word, "en") ?? word;
  };

  const SAINT = /(?<![\p{L}\p{M}])S[tT]\.?(?=\s+\p{Lu})/gu;

  const convert = async (text: string) =>
    await wordSplitter(text.replace(SAINT, "Sent"), "en", async (word: string) => {
      const ipa = filterIpa(await predict(word), word, "en");
      const converted = transliterator.transliterate(
        normalizeEnIpa(word, ipa, extraRestoreRules, skippedRestoreRules),
      );
      return IRISH_O.test(word.replaceAll("'", "’")) ? converted.replace(/^ɔ/u, "ɔ’") : converted;
    });

  return (await mapText(text, convert)) as T;
};
