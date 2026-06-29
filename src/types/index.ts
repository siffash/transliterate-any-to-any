export type Script =
  | "Hani"
  | "Jpan"
  | "Kore"
  | "Deva"
  | "Arab"
  | "Hebr"
  | "Geor"
  | "Armn"
  | "Grek"
  | "Cyrl"
  | "Latn";

export type Direction = "LTR" | "RTL";

export type Language =
  | "zh"
  | "ja"
  | "ko"
  | "hi"
  | "ar"
  | "he"
  | "ka"
  | "hy"
  | "el"
  | "ru"
  | "uk"
  | "bg"
  | "mk"
  | "az"
  | "bs"
  | "ca"
  | "cs"
  | "da"
  | "de"
  | "en"
  | "es"
  | "et"
  | "fi"
  | "fr"
  | "hr"
  | "hu"
  | "id"
  | "is"
  | "it"
  | "kk"
  | "lb"
  | "lt"
  | "lv"
  | "mt"
  | "nl"
  | "no"
  | "pl"
  | "pt"
  | "ro"
  | "sk"
  | "sl"
  | "sq"
  | "sr"
  | "sv"
  | "tr"
  | "vi";

export type Options = {
  from: Language;
  to: Language;
};

export type Text = string | string[];
