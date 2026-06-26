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

export const cyrlLanguages = ["ru", "uk", "bg", "mk"] as const;

export const otherLanguages = ["zh", "ja", "ko", "hi", "ar", "he", "ka", "hy", "el"] as const;

export const supportedLanguages = [...latnLanguages, ...cyrlLanguages, ...otherLanguages] as const;
