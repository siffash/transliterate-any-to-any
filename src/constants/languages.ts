export const latnLanguages = [
  "az",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "en",
  "es",
  "et",
  "fi",
  "fr",
  "hr",
  "hu",
  "id",
  "is",
  "it",
  "kk",
  "lb",
  "lt",
  "lv",
  "mt",
  "nl",
  "no",
  "pl",
  "pt",
  "ro",
  "sk",
  "sl",
  "sq",
  "sr",
  "sv",
  "tr",
  "vi",
] as const;

export const cyrlLanguages = ["bg", "mk", "ru", "uk"] as const;

export const otherLanguages = ["ar", "el", "he", "hi", "hy", "ja", "ka", "ko", "zh"] as const;

export const supportedLanguages = [...latnLanguages, ...cyrlLanguages, ...otherLanguages] as const;
