export type Script =
  | "Hani"
  | "Jpan"
  | "Kore"
  | "Thai"
  | "Deva"
  | "Beng"
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
  | "th"
  | "hi"
  | "bn"
  | "ar"
  | "fa"
  | "ur"
  | "he"
  | "ka"
  | "hy"
  | "el"
  | "ru"
  | "uk"
  | "bg"
  | "mk"
  | "kk"
  | "tg"
  | "en"
  | "de"
  | "fr"
  | "es"
  | "tr"
  | "az"
  | "sr"
  | "hr"
  | "bs"
  | "ca"
  | "cs"
  | "da"
  | "et"
  | "fi"
  | "hu"
  | "id"
  | "is"
  | "it"
  | "lb"
  | "lt"
  | "lv"
  | "ms"
  | "mt"
  | "nl"
  | "no"
  | "pl"
  | "pt"
  | "ro"
  | "sk"
  | "sl"
  | "sq"
  | "sv"
  | "vi";

export type Spelling = "orthographic" | "established";

export type Options = {
  from?: Language;
  to: Language;
  spelling?: Spelling;
};

export type Text = string | string[];
