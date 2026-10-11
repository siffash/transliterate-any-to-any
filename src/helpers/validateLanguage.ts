import { Language, Text } from "types";
import { languages } from "helpers/constants";

const validateLanguageByRegex = (regex: string, text: string) =>
  new RegExp(`^[${regex}\\p{scx=Common}]+$`, "ui").test(text);

/*
 * Confirm if the text contains only the letters/characters of the specified language.
 * @param language - The language to check.
 * @param text - The text to check (string or array of strings).
 * @returns true if the text contains only the letters/characters of the specified language, false otherwise.
 */
export const validateLanguage = (language: Language, text: Text): boolean => {
  const { regex } = languages[language];
  if (typeof text === "string") {
    return validateLanguageByRegex(regex, text);
  }
  return text.every(text => validateLanguageByRegex(regex, text));
};
