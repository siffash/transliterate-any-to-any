import { Language } from "transliterate-any-to-any";

export const LINKS = {
  sourceCode: "https://github.com/siffash/transliterate-any-to-any",
  package: "https://www.npmjs.com/package/transliterate-any-to-any",
  article: "https://dev.to/siffash/transliterate-any-to-any",
  support: "https://github.com/sponsors/siffash",
};

export const DEFAULT_LANGS: { langFrom: Language; langTo: Language } = {
  langFrom: "en",
  langTo: "bg",
};

export const LOCAL_STORAGE_KEYS = {
  colorMode: "color-mode",
  langFrom: "lang-from",
  langTo: "lang-to",
};

export const MAX_CHARS = 5000;
export const DEBOUNCE_MS = 350;

export const SCATTER: { char: string; top: string; left: string; rot: number; lang: string }[] = [
  { char: "字", top: "2%", left: "36%", rot: -4, lang: "Chinese" },
  { char: "シ", top: "2%", left: "16%", rot: 7, lang: "Japanese" },
  { char: "한", top: "53%", left: "95%", rot: -5, lang: "Korean" },
  { char: "अ", top: "0%", left: "83%", rot: 8, lang: "Hindi" },
  { char: "অ", top: "43%", left: "84%", rot: 10, lang: "Bengali" },
  { char: "ی", top: "51%", left: "4%", rot: 10, lang: "Persian" },
  { char: "ت", top: "13%", left: "89%", rot: 6, lang: "Arabic" },
  { char: "א", top: "2%", left: "71%", rot: 8, lang: "Hebrew" },
  { char: "ლ", top: "30%", left: "2%", rot: -12, lang: "Georgian" },
  { char: "Թ", top: "2%", left: "96%", rot: -6, lang: "Armenian" },
  { char: "Ω", top: "30%", left: "93%", rot: 12, lang: "Greek" },
  { char: "Є", top: "0%", left: "59%", rot: -7, lang: "Ukrainian" },
  { char: "Ъ", top: "3%", left: "6%", rot: -8, lang: "Bulgarian" },
  { char: "Š", top: "0%", left: "26%", rot: -3, lang: "Serbian" },
  { char: "Ħ", top: "45%", left: "14%", rot: 4, lang: "Maltese" },
  { char: "ß", top: "23%", left: "12%", rot: -9, lang: "German" },
  { char: "ñ", top: "0%", left: "48%", rot: 6, lang: "Spanish" },
];
