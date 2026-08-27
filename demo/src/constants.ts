import { Language } from "transliterate-any-to-any";

export const LINKS = {
  sourceCode: "https://github.com/siffash/transliterate-any-to-any",
  package: "https://www.npmjs.com/package/transliterate-any-to-any",
  article: "https://dev.to/siffash/transliterate-any-to-any",
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

export const SCATTER: { char: string; top: string; left: string; rot: number }[] = [
  { char: "字", top: "5%", left: "39%", rot: -4 }, // Chinese
  { char: "あ", top: "52%", left: "27%", rot: 7 }, // Japanese
  { char: "한", top: "52%", left: "85%", rot: -5 }, // Korean
  { char: "अ", top: "0%", left: "83%", rot: 8 }, // Hindi
  { char: "অ", top: "53%", left: "69%", rot: 5 }, // Bengali
  { char: "ن", top: "40%", left: "21%", rot: -10 }, // Urdu
  { char: "ی", top: "53%", left: "4%", rot: 10 }, // Persian
  { char: "ت", top: "18%", left: "88%", rot: 6 }, // Arabic
  { char: "א", top: "2%", left: "70%", rot: 8 }, // Hebrew
  { char: "ლ", top: "30%", left: "2%", rot: -12 }, // Georgian
  { char: "Թ", top: "2%", left: "96%", rot: -6 }, // Armenian
  { char: "Ω", top: "40%", left: "92%", rot: 12 }, // Greek
  { char: "Є", top: "0%", left: "55%", rot: -7 }, // Ukrainian
  { char: "Ъ", top: "3%", left: "6%", rot: -8 }, // Bulgarian
  { char: "Š", top: "0%", left: "25%", rot: -3 }, // Serbian
  { char: "Ħ", top: "45%", left: "12%", rot: 4 }, // Maltese
  { char: "ß", top: "15%", left: "14%", rot: -9 }, // German
  { char: "ñ", top: "45%", left: "78%", rot: 6 }, // Spanish
];
