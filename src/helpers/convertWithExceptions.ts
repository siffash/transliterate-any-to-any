import { Language } from "types";
import { languages } from "helpers/constants";

export const convertWithExceptions = (
  text: string,
  language: Language,
  exception: (word: string) => string | undefined,
  convert: (text: string) => string,
): string => {
  const { regex } = languages[language];
  let result = "";
  let start = 0;

  for (const match of text.matchAll(new RegExp(`[${regex}\\p{L}]+`, "gu"))) {
    const elided = /^\p{L}{1,2}['’]/u.exec(match[0])?.[0] ?? "";
    let replacement = exception(match[0]);
    let cut = match.index;

    if (replacement === undefined && elided) {
      replacement = exception(match[0].slice(elided.length));
      cut += elided.length;
    }

    if (replacement === undefined) continue;
    result += convert(text.slice(start, cut)) + replacement;
    start = match.index + match[0].length;
  }

  return result + convert(text.slice(start));
};
