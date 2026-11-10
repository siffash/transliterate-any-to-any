import { Language, Text } from "types";
import { supportedLanguages } from "helpers/constants";
import { validateLanguage } from "helpers/validateLanguage";

/*
 * Detect the language of the text by the letters/characters it contains.
 * @param text - The text to check (string or array of strings).
 * @returns the language, or undefined if the text has no letters or has letters that no supported language uses.
 * @throws if the text mixes letters of different languages (e.g. different scripts).
 */
export const detectLanguage = (text: Text): Language | undefined => {
  const letters = new Set((typeof text === "string" ? text : text.join(" ")).match(/\p{L}/gu));
  if (!letters.size) {
    return undefined;
  }
  const detected = supportedLanguages.find(language => validateLanguage(language, text));
  if (detected) {
    return detected;
  }
  // no language matches the whole text, though each of its letters matches some language
  if (
    [...letters].every(letter =>
      supportedLanguages.some(language => validateLanguage(language, letter)),
    )
  ) {
    throw new Error("Source text should be written only in one language.");
  }
  return undefined;
};
