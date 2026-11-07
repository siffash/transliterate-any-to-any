import { Text } from "types";
import { languages } from "helpers/constants";

// Ц, Щ, Ы and Ь left the Tajik alphabet in 1998, so a word with them is a Russian name in Russian
// spelling (Наталья, Хрущёв, Пермь)
const RUSSIAN = /[ЦЩЫЬцщыь]/u;

/**
 * Converts Tajik text into a Cyrillic target, sending Russian-spelled words through tg-ru and the
 * ru-<target> converter, which knows how the target writes Russian names (uk Ігор, Пермь → Перм).
 * @param text - The Tajik text.
 * @param ruTarget - The ru-<target> converter.
 * @param convert - Converts the rest of the text.
 * @returns the converted text.
 */
export const convertTgRussianWords = async <T = Text>(
  text: Text,
  ruTarget: (words: string[]) => Promise<unknown>,
  convert: (text: string) => string,
): Promise<T> => {
  const { tgRu } = await import("converters/tg/tg-ru");
  const { convertWithExceptions } = await import("helpers/convertWithExceptions");

  const texts = typeof text === "string" ? [text] : text;
  const word = new RegExp(`[${languages.tg.regex}\\p{L}]+`, "gu");
  const words = [
    ...new Set(texts.flatMap(text => text.match(word) ?? []).filter(word => RUSSIAN.test(word))),
  ];
  const converted = words.length
    ? ((await ruTarget((await tgRu(words)) as string[])) as string[])
    : [];
  const russian = new Map(words.map((word, i) => [word, converted[i]]));

  const result = texts.map(text =>
    convertWithExceptions(text, "tg", word => russian.get(word), convert),
  );
  return (typeof text === "string" ? result[0] : result) as T;
};
