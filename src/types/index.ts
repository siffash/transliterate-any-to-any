import { supportedLanguages } from "helpers/languages";

export type Language = (typeof supportedLanguages)[number];

export type Text = string | string[];

export type Options = {
  from: Language;
  to: Language;
};
