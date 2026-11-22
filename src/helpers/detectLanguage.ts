import { Language, Text } from "types";
import { supportedLanguages } from "helpers/constants";
import { validateLanguage } from "helpers/validateLanguage";

export const detectLanguage = (text: Text): Language | undefined => {
  const letters = new Set((typeof text === "string" ? text : text.join(" ")).match(/\p{L}/gu));
  if (!letters.size) {
    return undefined;
  }
  const detected = supportedLanguages.find(language => validateLanguage(language, text));
  if (detected) {
    return detected;
  }
  if (
    [...letters].every(letter =>
      supportedLanguages.some(language => validateLanguage(language, letter)),
    )
  ) {
    throw new Error("Source text should be written only in one language.");
  }
  return undefined;
};
