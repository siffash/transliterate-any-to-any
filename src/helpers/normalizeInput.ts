import { languages } from "helpers/constants";
import { toHalfwidth } from "helpers/toHalfwidth";
import { Language, Text } from "types";

export const normalizeInput = <T extends Text>(text: T, from: Language): T => {
  const { script } = languages[from];
  const normalize = (s: string) => {
    const normalized = s
      .replace(/['‘`´ʼʻ′＇]/g, "’")
      .normalize("NFC")
      .replace(/(?<=\p{Script=Cyrillic})[\u0300\u0301]/gu, mark => (script === "Cyrl" ? "" : mark))
      .replace(/(?<=[ij])\u0307/g, "")
      .replace(/\u0640|\p{Variation_Selector}|[\u200B\u2060\uFEFF\u00AD]/gu, "")
      .replace(/(?<![\p{L}\p{M}])[\u200C\u200D]+|[\u200C\u200D]+(?![\p{L}\p{M}])/gu, "")
      .replace(/(?<=\p{Script=Arabic}\p{M}*)\u200D(?=\p{Script=Arabic})/gu, "")
      .replace(/[\u200C\u200D]/g, joiner =>
        script !== "Arab" || from === "ar"
          ? ""
          : joiner === "\u200C" && from === "ur"
            ? " "
            : joiner,
      )
      .replace(
        /[\u05BE\u30A0\u2010\u2011]|(?<=\p{scx=Katakana})[=＝](?=\p{scx=Katakana})|(?<![\p{scx=Kana}\p{scx=Hira}])－/gu,
        "-",
      );
    return script === "Latn" ? toHalfwidth(normalized, false, false) : normalized;
  };

  return (Array.isArray(text) ? text.map(normalize) : normalize(text)) as T;
};
