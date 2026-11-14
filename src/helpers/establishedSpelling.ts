import { languages } from "helpers/constants";
import { Language } from "types";

// See docs/transliterating-to-latin.md

// Latin-script targets that re-spell Latin-script names (all other Latin targets keep them unchanged)
const respellingLatinTargets: Language[] = ["az", "lt", "lv", "sq", "sr"];

const nonLatinSources = (Object.keys(languages) as Language[]).filter(
  l => languages[l].script !== "Latn",
);

// Non-Latin sources whose names each Latin-script target keeps in the English romanization
// (missing targets & sources use the target's own spelling)
const englishRomanizationSources: Partial<Record<Language, Language[]>> = {
  bs: ["ar", "fa", "hi", "bn", "ur", "zh", "ja", "ko", "th"],
  ca: ["tg", "ar", "fa", "hi", "bn", "ur", "zh", "ja", "ko", "th", "he"],
  cs: ["th", "el"],
  da: ["tg", "ar", "fa", "hi", "bn", "ur", "zh", "ja", "ko", "th", "el", "he", "hy"],
  de: ["ar", "fa", "hi", "bn", "ur", "zh", "ja", "ko", "th", "el", "he"],
  es: ["tg", "ar", "fa", "hi", "bn", "ur", "zh", "ja", "ko", "th", "el", "he", "hy"],
  et: ["ar", "fa", "hi", "bn", "ur", "zh", "ja", "ko", "th", "el", "he"],
  fi: ["ar", "fa", "hi", "bn", "ur", "zh", "ja", "ko", "th", "el", "he"],
  fr: ["tg", "ar", "fa", "hi", "bn", "ur", "zh", "ja", "ko", "th", "el", "he", "hy"],
  hr: ["ar", "fa", "hi", "bn", "ur", "zh", "ja", "ko", "th"],
  hu: ["th"],
  id: nonLatinSources,
  is: ["ru", "uk", "bg", "mk", "kk", "ar", "fa", "hi", "bn", "ur", "zh", "ja", "ko", "th", "he"],
  it: ["tg", "ar", "fa", "hi", "bn", "ur", "zh", "ja", "ko", "th", "el", "he", "ka", "hy"],
  lb: ["ar", "fa", "hi", "bn", "ur", "zh", "ja", "ko", "th", "el", "he"],
  ms: nonLatinSources,
  mt: nonLatinSources,
  nl: ["ar", "fa", "hi", "bn", "ur", "zh", "ja", "ko", "th", "el", "he"],
  no: ["tg", "ar", "fa", "hi", "bn", "ur", "zh", "ja", "ko", "th", "el", "he"],
  pl: ["hi", "bn", "ur", "zh", "ja", "ko", "th"],
  pt: nonLatinSources,
  ro: ["ar", "fa", "hi", "bn", "ur", "zh", "ja", "ko", "th", "el", "he"],
  sk: ["th", "el"],
  sl: ["tg", "th"],
  sq: ["zh", "ja", "ko", "th", "he", "ka", "hy"],
  sv: ["ar", "fa", "hi", "bn", "ur", "zh", "ja", "ko", "th", "el", "he"],
  tr: ["hi", "bn", "ur", "zh", "ja", "ko", "th"],
  vi: nonLatinSources.filter(l => l !== "zh"),
};

export const keepsLatinText = (to: Language) => !respellingLatinTargets.includes(to);

export const usesEnglishRomanization = (from: Language, to: Language) =>
  englishRomanizationSources[to]?.includes(from) ?? false;

/*
 * Confirm if the spelling option can change the transliteration from one language to another.
 * @param options.from - The source language.
 * @param options.to - The target language.
 * @returns true if `spelling: "established"` can give another result than `spelling: "orthographic"`,
 * false otherwise (also for an unsupported language).
 */
export const spellingAffects = ({ from, to }: { from: Language; to: Language }): boolean =>
  from !== to &&
  !!languages[from] &&
  languages[to]?.script === "Latn" &&
  ((languages[from].script === "Latn" && keepsLatinText(to)) || usesEnglishRomanization(from, to));
