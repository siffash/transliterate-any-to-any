import { Language, Text } from "types";
import { languages } from "helpers/constants";

const validateLanguageByRegex = (regex: string, text: string) =>
  new RegExp(`^[${regex}\\p{scx=Common}]+$`, "ui").test(text);

export const validateLanguage = (language: Language, text: Text): boolean => {
  const { regex } = languages[language];
  if (typeof text === "string") {
    return validateLanguageByRegex(regex, text);
  }
  return text.every(text => validateLanguageByRegex(regex, text));
};
