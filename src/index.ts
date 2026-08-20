export { transliterate } from "./transliterate";
export { type Script, type Language } from "./types";
export { scripts, languages } from "helpers/constants";
export { confirmLanguageByScript } from "helpers/confirmLanguageByScript";

// *** EXPERIMENTS ***

import { settings } from "helpers/rbt-distributor";
import { transliterate } from "./transliterate";
const test = async () => {
  const getTranslit = async () => await transliterate("D'Armi", { from: "it", to: "ms" });
  settings.JS_IMPLEMENTATION = false;
  const cpp = await getTranslit();
  settings.JS_IMPLEMENTATION = true;
  const js = await getTranslit();
  if (JSON.stringify(cpp) === JSON.stringify(js)) {
    console.log("IDENTICAL!");
    console.log(cpp);
  } else {
    console.log("_NOT_ IDENTICAL!");
    console.log(cpp);
    console.log(js);
  }
};
test();
