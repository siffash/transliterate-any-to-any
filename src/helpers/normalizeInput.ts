import { languages } from "helpers/constants";
import { Language, Text } from "types";

/*
 * Normalize the source text before validation and conversion:
 * - unifies apostrophes as ’ and composes the text (NFC);
 * - drops the Arabic tatweel (تـلـعـفـر), variation selectors (葛 + U+E0100) and the joiners that only change how
 *   letters are drawn: zero-width spaces, a ZWJ/ZWNJ that doesn't stand between two letters, the ZWJ of Arabic
 *   script and any ZWJ/ZWNJ of other scripts (서 + ZWNJ + 울). Urdu writes a compound with a ZWNJ as with a space
 *   (اسلام‌آباد, اسلام آباد);
 * - drops the stress marks of Cyrillic (Ко́рсаков, Ско́пје), once the letters with an accent (ѓ, ќ, ѝ) are composed;
 * - reads the Hebrew maqaf (בן־דב) and the Japanese double hyphen (メドゥー゠中村, also typed as =) as hyphens.
 * @param text - The source text (string or array of strings).
 * @param from - The source language.
 * @returns The normalized text, of the same shape as the input.
 */
export const normalizeInput = <T extends Text>(text: T, from: Language): T => {
  const { script } = languages[from];
  const normalize = (s: string) =>
    s
      .replace(/['‘`´ʼʻ′＇]/g, "’")
      .normalize("NFC")
      .replace(/(?<=\p{Script=Cyrillic})[\u0300\u0301]/gu, mark => (script === "Cyrl" ? "" : mark))
      .replace(/\u0640|\p{Variation_Selector}|[\u200B\u2060\uFEFF\u00AD]/gu, "")
      .replace(/(?<![\p{L}\p{M}])[\u200C\u200D]+|[\u200C\u200D]+(?![\p{L}\p{M}])/gu, "")
      .replace(/(?<=\p{Script=Arabic}\p{M}*)\u200D(?=\p{Script=Arabic})/gu, "")
      .replace(/[\u200C\u200D]/g, joiner =>
        script !== "Arab" ? "" : joiner === "\u200C" && from === "ur" ? " " : joiner,
      )
      .replace(/[\u05BE\u30A0]|(?<=\p{scx=Katakana})[=＝](?=\p{scx=Katakana})/gu, "-");

  return (Array.isArray(text) ? text.map(normalize) : normalize(text)) as T;
};
