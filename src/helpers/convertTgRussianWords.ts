import { Text } from "types";
import { languages } from "helpers/constants";

const RUSSIAN = /[ЦЩЫЬцщыь]/u;

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
