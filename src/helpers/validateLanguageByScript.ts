import { Language, Text } from "types";
import { languages, scripts } from "helpers/constants";

const confirmLanguageByRegex = (regex: string, text: string) =>
  new RegExp(`^[${regex}\\p{scx=Common}]+$`, "u").test(text);

/*
 * Confirm if the text is written in the script of the language.
 * @param language - The language to check.
 * @param text - The text to check (string or array of strings).
 * @returns true if the text is written in the script of the language, false otherwise.
 */
export const validateLanguageByScript = (language: Language, text: Text): boolean => {
  const { regex } = scripts[languages[language].script];
  if (typeof text === "string") {
    return confirmLanguageByRegex(regex, text);
  }
  return text.every(text => confirmLanguageByRegex(regex, text));
};
