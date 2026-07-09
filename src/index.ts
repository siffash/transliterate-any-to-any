export { transliterate } from "transliterate";
export { scripts, languages } from "helpers/constants";
export { confirmLanguageByScript } from "helpers/confirmLanguageByScript";
export { Script, Language } from "types";

// *** EXPERIMENTS ***

import { transliterate } from "transliterate";
const test = async () => {
  console.log(await transliterate("Грозный", { from: "ru", to: "et" }));
};
test();
