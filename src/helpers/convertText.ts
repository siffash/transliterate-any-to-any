import { Language, Text } from "types";
import { RBT } from "helpers/rbt";
import { copyCase } from "helpers/copyCase";
import { keepElision } from "helpers/keepElision";

export interface ConvertTextOptions {
  source?: (words: string[]) => Promise<string[]> | string[];
  post?: (text: string) => string;
  elision?: boolean | string;
  caseLang?: Language;
}

export const mapText = async (
  text: Text,
  convert: (text: string) => string | Promise<string>,
): Promise<Text> => (typeof text === "string" ? convert(text) : Promise.all(text.map(convert)));

export const convertText = async (
  text: Text,
  rules: string,
  { source, post, elision, caseLang }: ConvertTextOptions = {},
): Promise<Text> => {
  const transliterator = RBT.fromRules(rules);
  const words = typeof text === "string" ? [text] : text;
  const sources = source ? await source(words) : words;
  const result = sources.map((word, i) => {
    const converted = elision
      ? keepElision(word, transliterator, elision === true ? undefined : elision)
      : transliterator.transliterate(word);
    const processed = post ? post(converted) : converted;
    return caseLang ? copyCase(words[i], processed, caseLang) : processed;
  });
  return typeof text === "string" ? result[0] : result;
};
