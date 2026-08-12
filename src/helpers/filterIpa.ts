import { Language } from "types";
import { languages, scripts } from "helpers/constants";

const allowedIpaChars = new Set(
  "abcdefghijklmnopqrstuvwxyzâæçêðôõøăčďęħĩŋœťũžơưɐɑɒɓɔɕɖɗɘəɚɛɜɝɟɡɢɣɤɰɥɦɧɨɪɫɭɯɱɲɳɵɹɽɾʀʁʂʃʈʉʊʋʌʎʏʐʑʒʔʕʝʰʱʲʷʼˈ'’ˌ̧̇ːˠˤ˥˧˩̝̟̥̩̪̯͈̃̊̚͡βθχẽɸ",
);

export const filterIpa = (
  ipa: string,
  original: string,
  language: Language,
  additional: string = "",
): string => {
  if (!ipa || !original || typeof ipa !== "string" || typeof original !== "string") {
    return ipa;
  }

  const { regex } = scripts[languages[language].script];
  const originalChars = new Set(original.replace(new RegExp(`[${regex}]+`, "gu"), ""));
  const additionalChars = new Set(additional);

  return [...ipa]
    .filter(char => new Set([...allowedIpaChars, ...originalChars, ...additionalChars]).has(char))
    .join("");
};
