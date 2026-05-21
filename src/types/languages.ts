import { latnLanguages, cyrlLanguages, otherLanguages, supportedLanguages } from "languages";

export type LatnLanguage = (typeof latnLanguages)[number];
export type CyrlLanguage = (typeof cyrlLanguages)[number];
export type OtherLanguage = (typeof otherLanguages)[number];

export type Language = (typeof supportedLanguages)[number];

export type Text = string | string[];
