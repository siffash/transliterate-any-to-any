import { latnLanguages, supportedLanguages } from "helpers/languages";
import { LatnLanguage, Options, Text } from "types";
import { jaLatn } from "converters/ja-latn";
import { zhLatn } from "converters/zh-latn";
import { koLatn } from "converters/ko-latn";
import { zhJa } from "converters/zh-ja";
import { jaZh } from "converters/ja-zh";
import { jaKo } from "converters/ja-ko";
import { koJa } from "converters/ko-ja";
import { koZh } from "converters/ko-zh";
import { zhKo } from "converters/zh-ko";
import { zhRu } from "converters/zh-ru";
import { zhUk } from "converters/zh-uk";
import { zhBg } from "converters/zh-bg";
import { zhMk } from "converters/zh-mk";
import { mkZh } from "converters/mk-zh";
import { bgZh } from "converters/bg-zh";
import { ruZh } from "converters/ru-zh";
import { ukZh } from "converters/uk-zh";
import { azZh } from "converters/az-zh";
import { arZh } from "converters/ar-zh";
import { hiZh } from "converters/hi-zh";
import { hyZh } from "converters/hy-zh";
import { kaZh } from "converters/ka-zh";
import { elZh } from "converters/el-zh";
import { caZh } from "converters/ca-zh";
import { csZh } from "converters/cs-zh";
import { daZh } from "converters/da-zh";
import { deZh } from "converters/de-zh";
import { esZh } from "converters/es-zh";
import { etZh } from "converters/et-zh";
import { fiZh } from "converters/fi-zh";
import { frZh } from "converters/fr-zh";
import { hrZh } from "converters/hr-zh";
import { huZh } from "converters/hu-zh";
import { idZh } from "converters/id-zh";
import { isZh } from "converters/is-zh";
import { itZh } from "converters/it-zh";
import { kkZh } from "converters/kk-zh";
import { lbZh } from "converters/lb-zh";
import { ltZh } from "converters/lt-zh";
import { lvZh } from "converters/lv-zh";
import { mtZh } from "converters/mt-zh";
import { nlZh } from "converters/nl-zh";
import { noZh } from "converters/no-zh";
import { plZh } from "converters/pl-zh";
import { ptZh } from "converters/pt-zh";
import { roZh } from "converters/ro-zh";
import { skZh } from "converters/sk-zh";
import { slZh } from "converters/sl-zh";
import { sqZh } from "converters/sq-zh";
import { srZh } from "converters/sr-zh";
import { svZh } from "converters/sv-zh";
import { trZh } from "converters/tr-zh";
import { bsZh } from "converters/bs-zh";
import { zhVi } from "converters/zh-vi";
import { viZh } from "converters/vi-zh";
import { ruUk } from "converters/ru-uk";
import { ukRu } from "converters/uk-ru";
import { ukMk } from "converters/uk-mk";
import { mkUk } from "converters/mk-uk";
import { mkBg } from "converters/mk-bg";
import { bgMk } from "converters/bg-mk";
import { bgRu } from "converters/bg-ru";
import { ruBg } from "converters/ru-bg";
import { ruMk } from "converters/ru-mk";
import { mkRu } from "converters/mk-ru";
import { bgUk } from "converters/bg-uk";
import { ukBg } from "converters/uk-bg";
import { enZh } from "converters/en-zh";
import { heZh } from "converters/he-zh";
import { arJa } from "converters/ar-ja";
import { azJa } from "converters/az-ja";
import { bgJa } from "converters/bg-ja";
import { bsJa } from "converters/bs-ja";
import { caJa } from "converters/ca-ja";
import { csJa } from "converters/cs-ja";
import { daJa } from "converters/da-ja";
import { deJa } from "converters/de-ja";
import { elJa } from "converters/el-ja";
import { enJa } from "converters/en-ja";
import { esJa } from "converters/es-ja";
import { etJa } from "converters/et-ja";
import { fiJa } from "converters/fi-ja";
import { frJa } from "converters/fr-ja";
import { heJa } from "converters/he-ja";
import { hiJa } from "converters/hi-ja";
import { hrJa } from "converters/hr-ja";
import { huJa } from "converters/hu-ja";
import { hyJa } from "converters/hy-ja";
import { idJa } from "converters/id-ja";
import { isJa } from "converters/is-ja";
import { itJa } from "converters/it-ja";
import { kaJa } from "converters/ka-ja";
import { kkJa } from "converters/kk-ja";
import { lbJa } from "converters/lb-ja";
import { ltJa } from "converters/lt-ja";
import { lvJa } from "converters/lv-ja";
import { mkJa } from "converters/mk-ja";
import { mtJa } from "converters/mt-ja";
import { nlJa } from "converters/nl-ja";
import { noJa } from "converters/no-ja";
import { plJa } from "converters/pl-ja";
import { ptJa } from "converters/pt-ja";
import { roJa } from "converters/ro-ja";
import { ruJa } from "converters/ru-ja";
import { skJa } from "converters/sk-ja";
import { slJa } from "converters/sl-ja";
import { sqJa } from "converters/sq-ja";
import { srJa } from "converters/sr-ja";
import { svJa } from "converters/sv-ja";
import { trJa } from "converters/tr-ja";
import { ukJa } from "converters/uk-ja";
import { viJa } from "converters/vi-ja";
import { arKo } from "converters/ar-ko";
import { azKo } from "converters/az-ko";
import { bgKo } from "converters/bg-ko";
import { bsKo } from "converters/bs-ko";
import { caKo } from "converters/ca-ko";
import { csKo } from "converters/cs-ko";
import { daKo } from "converters/da-ko";
import { deKo } from "converters/de-ko";
import { elKo } from "converters/el-ko";
import { enKo } from "converters/en-ko";
import { esKo } from "converters/es-ko";
import { etKo } from "converters/et-ko";
import { fiKo } from "converters/fi-ko";
import { frKo } from "converters/fr-ko";
import { heKo } from "converters/he-ko";
import { hiKo } from "converters/hi-ko";
import { hrKo } from "converters/hr-ko";
import { huKo } from "converters/hu-ko";
import { hyKo } from "converters/hy-ko";
import { idKo } from "converters/id-ko";
import { isKo } from "converters/is-ko";
import { itKo } from "converters/it-ko";
import { kaKo } from "converters/ka-ko";
import { kkKo } from "converters/kk-ko";
import { lbKo } from "converters/lb-ko";
import { ltKo } from "converters/lt-ko";
import { lvKo } from "converters/lv-ko";
import { mkKo } from "converters/mk-ko";
import { mtKo } from "converters/mt-ko";
import { nlKo } from "converters/nl-ko";
import { noKo } from "converters/no-ko";
import { plKo } from "converters/pl-ko";
import { ptKo } from "converters/pt-ko";
import { roKo } from "converters/ro-ko";
import { ruKo } from "converters/ru-ko";
import { skKo } from "converters/sk-ko";
import { slKo } from "converters/sl-ko";
import { sqKo } from "converters/sq-ko";
import { srKo } from "converters/sr-ko";
import { svKo } from "converters/sv-ko";
import { trKo } from "converters/tr-ko";
import { ukKo } from "converters/uk-ko";
import { viKo } from "converters/vi-ko";
import { arHi } from "converters/ar-hi";
import { azHi } from "converters/az-hi";
import { bgHi } from "converters/bg-hi";
import { bsHi } from "converters/bs-hi";
import { caHi } from "converters/ca-hi";
import { csHi } from "converters/cs-hi";
import { daHi } from "converters/da-hi";
import { deHi } from "converters/de-hi";
import { elHi } from "converters/el-hi";
import { enHi } from "converters/en-hi";
import { esHi } from "converters/es-hi";
import { etHi } from "converters/et-hi";
import { fiHi } from "converters/fi-hi";
import { frHi } from "converters/fr-hi";
import { heHi } from "converters/he-hi";
import { hrHi } from "converters/hr-hi";
import { huHi } from "converters/hu-hi";
import { hyHi } from "converters/hy-hi";
import { idHi } from "converters/id-hi";
import { isHi } from "converters/is-hi";
import { itHi } from "converters/it-hi";
import { jaHi } from "converters/ja-hi";
import { kaHi } from "converters/ka-hi";
import { kkHi } from "converters/kk-hi";
import { koHi } from "converters/ko-hi";
import { lbHi } from "converters/lb-hi";
import { ltHi } from "converters/lt-hi";
import { lvHi } from "converters/lv-hi";
import { mkHi } from "converters/mk-hi";
import { mtHi } from "converters/mt-hi";
import { nlHi } from "converters/nl-hi";
import { noHi } from "converters/no-hi";
import { plHi } from "converters/pl-hi";
import { ptHi } from "converters/pt-hi";
import { roHi } from "converters/ro-hi";
import { ruHi } from "converters/ru-hi";
import { skHi } from "converters/sk-hi";
import { slHi } from "converters/sl-hi";
import { sqHi } from "converters/sq-hi";
import { srHi } from "converters/sr-hi";
import { svHi } from "converters/sv-hi";
import { trHi } from "converters/tr-hi";
import { ukHi } from "converters/uk-hi";
import { viHi } from "converters/vi-hi";
import { zhHi } from "converters/zh-hi";
import { azAr } from "converters/az-ar";
import { bgAr } from "converters/bg-ar";
import { bsAr } from "converters/bs-ar";
import { caAr } from "converters/ca-ar";
import { csAr } from "converters/cs-ar";
import { daAr } from "converters/da-ar";
import { deAr } from "converters/de-ar";
import { elAr } from "converters/el-ar";
import { enAr } from "converters/en-ar";
import { esAr } from "converters/es-ar";
import { etAr } from "converters/et-ar";
import { fiAr } from "converters/fi-ar";
import { frAr } from "converters/fr-ar";
import { heAr } from "converters/he-ar";
import { hiAr } from "converters/hi-ar";
import { hrAr } from "converters/hr-ar";
import { huAr } from "converters/hu-ar";
import { hyAr } from "converters/hy-ar";
import { idAr } from "converters/id-ar";
import { isAr } from "converters/is-ar";
import { itAr } from "converters/it-ar";
import { jaAr } from "converters/ja-ar";
import { kaAr } from "converters/ka-ar";
import { kkAr } from "converters/kk-ar";
import { koAr } from "converters/ko-ar";
import { lbAr } from "converters/lb-ar";
import { ltAr } from "converters/lt-ar";
import { lvAr } from "converters/lv-ar";
import { mkAr } from "converters/mk-ar";
import { mtAr } from "converters/mt-ar";
import { nlAr } from "converters/nl-ar";
import { noAr } from "converters/no-ar";
import { plAr } from "converters/pl-ar";
import { ptAr } from "converters/pt-ar";
import { roAr } from "converters/ro-ar";
import { ruAr } from "converters/ru-ar";
import { skAr } from "converters/sk-ar";
import { slAr } from "converters/sl-ar";
import { sqAr } from "converters/sq-ar";
import { srAr } from "converters/sr-ar";
import { svAr } from "converters/sv-ar";
import { trAr } from "converters/tr-ar";
import { ukAr } from "converters/uk-ar";
import { viAr } from "converters/vi-ar";
import { zhAr } from "converters/zh-ar";
import { azHe } from "converters/az-he";
import { bgHe } from "converters/bg-he";
import { bsHe } from "converters/bs-he";
import { caHe } from "converters/ca-he";
import { csHe } from "converters/cs-he";
import { daHe } from "converters/da-he";
import { deHe } from "converters/de-he";
import { elHe } from "converters/el-he";
import { enHe } from "converters/en-he";
import { esHe } from "converters/es-he";
import { etHe } from "converters/et-he";
import { fiHe } from "converters/fi-he";
import { frHe } from "converters/fr-he";
import { hrHe } from "converters/hr-he";
import { huHe } from "converters/hu-he";
import { hyHe } from "converters/hy-he";
import { idHe } from "converters/id-he";
import { isHe } from "converters/is-he";
import { itHe } from "converters/it-he";
import { jaHe } from "converters/ja-he";
import { kaHe } from "converters/ka-he";
import { kkHe } from "converters/kk-he";
import { koHe } from "converters/ko-he";
import { lbHe } from "converters/lb-he";
import { ltHe } from "converters/lt-he";
import { lvHe } from "converters/lv-he";
import { mkHe } from "converters/mk-he";
import { mtHe } from "converters/mt-he";
import { nlHe } from "converters/nl-he";
import { noHe } from "converters/no-he";
import { plHe } from "converters/pl-he";
import { ptHe } from "converters/pt-he";
import { roHe } from "converters/ro-he";
import { ruHe } from "converters/ru-he";
import { skHe } from "converters/sk-he";
import { slHe } from "converters/sl-he";
import { sqHe } from "converters/sq-he";
import { srHe } from "converters/sr-he";
import { svHe } from "converters/sv-he";
import { trHe } from "converters/tr-he";
import { ukHe } from "converters/uk-he";
import { viHe } from "converters/vi-he";
import { zhHe } from "converters/zh-he";
import { latnAscii } from "converters/latn-ascii";
import { elEn } from "converters/el-en";
import { hyEn } from "converters/hy-en";
import { kaEn } from "converters/ka-en";
import { hiEn } from "converters/hi-en";
import { ruEn } from "converters/ru-en";
import { ukEn } from "converters/uk-en";
import { bgEn } from "converters/bg-en";
import { mkEn } from "converters/mk-en";
import { ipaEn } from "converters/ipa-en";

export const transliterate = async <T extends Text>(
  text: T,
  { from, to, ascii = false }: Options,
): Promise<T> => {
  if (!text) {
    throw new Error("Text is empty");
  }
  if (!supportedLanguages.includes(from)) {
    throw new Error(`Unsupported input language: ${from}`);
  }
  if (!supportedLanguages.includes(to)) {
    throw new Error(`Unsupported output language: ${to}`);
  }

  try {
    switch (to) {
      // if OUTPUT language is English
      case "en":
        switch (from) {
          case "el":
            return (await elEn(text, ascii)) as T;
          case "hy":
            return (await hyEn(text, ascii)) as T;
          case "ka":
            return (await kaEn(text, ascii)) as T;
          case "hi":
            return (await hiEn(text, ascii)) as T;
          case "ru":
            return (await ruEn(text, ascii)) as T;
          case "uk":
            return (await ukEn(text, ascii)) as T;
          case "bg":
            return (await bgEn(text, ascii)) as T;
          case "mk":
            return (await mkEn(text, ascii)) as T;
          case "ar":
          case "he":
            return (await ipaEn(text, ascii)) as T;
        }
        break;

      // if OUTPUT language is Vietnamese
      case "vi":
        switch (from) {
          case "zh":
            return (await zhVi(text, ascii)) as T;
        }
        break;

      // if OUTPUT language is Bulgarian
      case "bg":
        switch (from) {
          case "mk":
            return (await mkBg(text)) as T;
          case "ru":
            return (await ruBg(text)) as T;
          case "uk":
            return (await ukBg(text)) as T;
          case "zh":
            return (await zhBg(text)) as T;
        }
        break;

      // if OUTPUT language is Macedonian
      case "mk":
        switch (from) {
          case "bg":
            return (await bgMk(text)) as T;
          case "ru":
            return (await ruMk(text)) as T;
          case "uk":
            return (await ukMk(text)) as T;
          case "zh":
            return (await zhMk(text)) as T;
        }
        break;

      // if OUTPUT language is Russian
      case "ru":
        switch (from) {
          case "bg":
            return (await bgRu(text)) as T;
          case "mk":
            return (await mkRu(text)) as T;
          case "uk":
            return (await ukRu(text)) as T;
          case "zh":
            return (await zhRu(text)) as T;
        }
        break;

      // if OUTPUT language is Ukrainian
      case "uk":
        switch (from) {
          case "bg":
            return (await bgUk(text)) as T;
          case "ru":
            return (await ruUk(text)) as T;
          case "mk":
            return (await mkUk(text)) as T;
          case "zh":
            return (await zhUk(text)) as T;
        }
        break;

      // if OUTPUT language is Japanese
      case "ja":
        switch (from) {
          case "ko":
            return (await koJa(text)) as T;
          case "zh":
            return (await zhJa(text)) as T;
          case "ar":
            return (await arJa(text)) as T;
          case "az":
            return (await azJa(text)) as T;
          case "bg":
            return (await bgJa(text)) as T;
          case "bs":
            return (await bsJa(text)) as T;
          case "ca":
            return (await caJa(text)) as T;
          case "cs":
            return (await csJa(text)) as T;
          case "da":
            return (await daJa(text)) as T;
          case "de":
            return (await deJa(text)) as T;
          case "el":
            return (await elJa(text)) as T;
          case "en":
            return (await enJa(text)) as T;
          case "es":
            return (await esJa(text)) as T;
          case "et":
            return (await etJa(text)) as T;
          case "fi":
            return (await fiJa(text)) as T;
          case "fr":
            return (await frJa(text)) as T;
          case "he":
            return (await heJa(text)) as T;
          case "hi":
            return (await hiJa(text)) as T;
          case "hr":
            return (await hrJa(text)) as T;
          case "hu":
            return (await huJa(text)) as T;
          case "hy":
            return (await hyJa(text)) as T;
          case "id":
            return (await idJa(text)) as T;
          case "is":
            return (await isJa(text)) as T;
          case "it":
            return (await itJa(text)) as T;
          case "ka":
            return (await kaJa(text)) as T;
          case "kk":
            return (await kkJa(text)) as T;
          case "lb":
            return (await lbJa(text)) as T;
          case "lt":
            return (await ltJa(text)) as T;
          case "lv":
            return (await lvJa(text)) as T;
          case "mk":
            return (await mkJa(text)) as T;
          case "mt":
            return (await mtJa(text)) as T;
          case "nl":
            return (await nlJa(text)) as T;
          case "no":
            return (await noJa(text)) as T;
          case "pl":
            return (await plJa(text)) as T;
          case "pt":
            return (await ptJa(text)) as T;
          case "ro":
            return (await roJa(text)) as T;
          case "ru":
            return (await ruJa(text)) as T;
          case "sk":
            return (await skJa(text)) as T;
          case "sl":
            return (await slJa(text)) as T;
          case "sq":
            return (await sqJa(text)) as T;
          case "sr":
            return (await srJa(text)) as T;
          case "sv":
            return (await svJa(text)) as T;
          case "tr":
            return (await trJa(text)) as T;
          case "uk":
            return (await ukJa(text)) as T;
          case "vi":
            return (await viJa(text)) as T;
        }
        break;

      // if OUTPUT language is Korean
      case "ko":
        switch (from) {
          case "ja":
            return (await jaKo(text)) as T;
          case "zh":
            return (await zhKo(text)) as T;
          case "ar":
            return (await arKo(text)) as T;
          case "az":
            return (await azKo(text)) as T;
          case "bg":
            return (await bgKo(text)) as T;
          case "bs":
            return (await bsKo(text)) as T;
          case "ca":
            return (await caKo(text)) as T;
          case "cs":
            return (await csKo(text)) as T;
          case "da":
            return (await daKo(text)) as T;
          case "de":
            return (await deKo(text)) as T;
          case "el":
            return (await elKo(text)) as T;
          case "en":
            return (await enKo(text)) as T;
          case "es":
            return (await esKo(text)) as T;
          case "et":
            return (await etKo(text)) as T;
          case "fi":
            return (await fiKo(text)) as T;
          case "fr":
            return (await frKo(text)) as T;
          case "he":
            return (await heKo(text)) as T;
          case "hi":
            return (await hiKo(text)) as T;
          case "hr":
            return (await hrKo(text)) as T;
          case "hu":
            return (await huKo(text)) as T;
          case "hy":
            return (await hyKo(text)) as T;
          case "id":
            return (await idKo(text)) as T;
          case "is":
            return (await isKo(text)) as T;
          case "it":
            return (await itKo(text)) as T;
          case "ka":
            return (await kaKo(text)) as T;
          case "kk":
            return (await kkKo(text)) as T;
          case "lb":
            return (await lbKo(text)) as T;
          case "lt":
            return (await ltKo(text)) as T;
          case "lv":
            return (await lvKo(text)) as T;
          case "mk":
            return (await mkKo(text)) as T;
          case "mt":
            return (await mtKo(text)) as T;
          case "nl":
            return (await nlKo(text)) as T;
          case "no":
            return (await noKo(text)) as T;
          case "pl":
            return (await plKo(text)) as T;
          case "pt":
            return (await ptKo(text)) as T;
          case "ro":
            return (await roKo(text)) as T;
          case "ru":
            return (await ruKo(text)) as T;
          case "sk":
            return (await skKo(text)) as T;
          case "sl":
            return (await slKo(text)) as T;
          case "sq":
            return (await sqKo(text)) as T;
          case "sr":
            return (await srKo(text)) as T;
          case "sv":
            return (await svKo(text)) as T;
          case "tr":
            return (await trKo(text)) as T;
          case "uk":
            return (await ukKo(text)) as T;
          case "vi":
            return (await viKo(text)) as T;
        }
        break;

      // if OUTPUT language is Hindi
      case "hi":
        switch (from) {
          case "ar":
            return (await arHi(text)) as T;
          case "az":
            return (await azHi(text)) as T;
          case "bg":
            return (await bgHi(text)) as T;
          case "bs":
            return (await bsHi(text)) as T;
          case "ca":
            return (await caHi(text)) as T;
          case "cs":
            return (await csHi(text)) as T;
          case "da":
            return (await daHi(text)) as T;
          case "de":
            return (await deHi(text)) as T;
          case "el":
            return (await elHi(text)) as T;
          case "en":
            return (await enHi(text)) as T;
          case "es":
            return (await esHi(text)) as T;
          case "et":
            return (await etHi(text)) as T;
          case "fi":
            return (await fiHi(text)) as T;
          case "fr":
            return (await frHi(text)) as T;
          case "he":
            return (await heHi(text)) as T;
          case "hr":
            return (await hrHi(text)) as T;
          case "hu":
            return (await huHi(text)) as T;
          case "hy":
            return (await hyHi(text)) as T;
          case "id":
            return (await idHi(text)) as T;
          case "is":
            return (await isHi(text)) as T;
          case "it":
            return (await itHi(text)) as T;
          case "ja":
            return (await jaHi(text)) as T;
          case "ka":
            return (await kaHi(text)) as T;
          case "kk":
            return (await kkHi(text)) as T;
          case "ko":
            return (await koHi(text)) as T;
          case "lb":
            return (await lbHi(text)) as T;
          case "lt":
            return (await ltHi(text)) as T;
          case "lv":
            return (await lvHi(text)) as T;
          case "mk":
            return (await mkHi(text)) as T;
          case "mt":
            return (await mtHi(text)) as T;
          case "nl":
            return (await nlHi(text)) as T;
          case "no":
            return (await noHi(text)) as T;
          case "pl":
            return (await plHi(text)) as T;
          case "pt":
            return (await ptHi(text)) as T;
          case "ro":
            return (await roHi(text)) as T;
          case "ru":
            return (await ruHi(text)) as T;
          case "sk":
            return (await skHi(text)) as T;
          case "sl":
            return (await slHi(text)) as T;
          case "sq":
            return (await sqHi(text)) as T;
          case "sr":
            return (await srHi(text)) as T;
          case "sv":
            return (await svHi(text)) as T;
          case "tr":
            return (await trHi(text)) as T;
          case "uk":
            return (await ukHi(text)) as T;
          case "vi":
            return (await viHi(text)) as T;
          case "zh":
            return (await zhHi(text)) as T;
        }
        break;

      // if OUTPUT language is Arabic
      case "ar":
        switch (from) {
          case "az":
            return (await azAr(text)) as T;
          case "bg":
            return (await bgAr(text)) as T;
          case "bs":
            return (await bsAr(text)) as T;
          case "ca":
            return (await caAr(text)) as T;
          case "cs":
            return (await csAr(text)) as T;
          case "da":
            return (await daAr(text)) as T;
          case "de":
            return (await deAr(text)) as T;
          case "el":
            return (await elAr(text)) as T;
          case "en":
            return (await enAr(text)) as T;
          case "es":
            return (await esAr(text)) as T;
          case "et":
            return (await etAr(text)) as T;
          case "fi":
            return (await fiAr(text)) as T;
          case "fr":
            return (await frAr(text)) as T;
          case "he":
            return (await heAr(text)) as T;
          case "hi":
            return (await hiAr(text)) as T;
          case "hr":
            return (await hrAr(text)) as T;
          case "hu":
            return (await huAr(text)) as T;
          case "hy":
            return (await hyAr(text)) as T;
          case "id":
            return (await idAr(text)) as T;
          case "is":
            return (await isAr(text)) as T;
          case "it":
            return (await itAr(text)) as T;
          case "ja":
            return (await jaAr(text)) as T;
          case "ka":
            return (await kaAr(text)) as T;
          case "kk":
            return (await kkAr(text)) as T;
          case "ko":
            return (await koAr(text)) as T;
          case "lb":
            return (await lbAr(text)) as T;
          case "lt":
            return (await ltAr(text)) as T;
          case "lv":
            return (await lvAr(text)) as T;
          case "mk":
            return (await mkAr(text)) as T;
          case "mt":
            return (await mtAr(text)) as T;
          case "nl":
            return (await nlAr(text)) as T;
          case "no":
            return (await noAr(text)) as T;
          case "pl":
            return (await plAr(text)) as T;
          case "pt":
            return (await ptAr(text)) as T;
          case "ro":
            return (await roAr(text)) as T;
          case "ru":
            return (await ruAr(text)) as T;
          case "sk":
            return (await skAr(text)) as T;
          case "sl":
            return (await slAr(text)) as T;
          case "sq":
            return (await sqAr(text)) as T;
          case "sr":
            return (await srAr(text)) as T;
          case "sv":
            return (await svAr(text)) as T;
          case "tr":
            return (await trAr(text)) as T;
          case "uk":
            return (await ukAr(text)) as T;
          case "vi":
            return (await viAr(text)) as T;
          case "zh":
            return (await zhAr(text)) as T;
        }
        break;

      // if OUTPUT language is Hebrew
      case "he":
        switch (from) {
          case "az":
            return (await azHe(text)) as T;
          case "bg":
            return (await bgHe(text)) as T;
          case "bs":
            return (await bsHe(text)) as T;
          case "ca":
            return (await caHe(text)) as T;
          case "cs":
            return (await csHe(text)) as T;
          case "da":
            return (await daHe(text)) as T;
          case "de":
            return (await deHe(text)) as T;
          case "el":
            return (await elHe(text)) as T;
          case "en":
            return (await enHe(text)) as T;
          case "es":
            return (await esHe(text)) as T;
          case "et":
            return (await etHe(text)) as T;
          case "fi":
            return (await fiHe(text)) as T;
          case "fr":
            return (await frHe(text)) as T;
          case "hr":
            return (await hrHe(text)) as T;
          case "hu":
            return (await huHe(text)) as T;
          case "hy":
            return (await hyHe(text)) as T;
          case "id":
            return (await idHe(text)) as T;
          case "is":
            return (await isHe(text)) as T;
          case "it":
            return (await itHe(text)) as T;
          case "ja":
            return (await jaHe(text)) as T;
          case "ka":
            return (await kaHe(text)) as T;
          case "kk":
            return (await kkHe(text)) as T;
          case "ko":
            return (await koHe(text)) as T;
          case "lb":
            return (await lbHe(text)) as T;
          case "lt":
            return (await ltHe(text)) as T;
          case "lv":
            return (await lvHe(text)) as T;
          case "mk":
            return (await mkHe(text)) as T;
          case "mt":
            return (await mtHe(text)) as T;
          case "nl":
            return (await nlHe(text)) as T;
          case "no":
            return (await noHe(text)) as T;
          case "pl":
            return (await plHe(text)) as T;
          case "pt":
            return (await ptHe(text)) as T;
          case "ro":
            return (await roHe(text)) as T;
          case "ru":
            return (await ruHe(text)) as T;
          case "sk":
            return (await skHe(text)) as T;
          case "sl":
            return (await slHe(text)) as T;
          case "sq":
            return (await sqHe(text)) as T;
          case "sr":
            return (await srHe(text)) as T;
          case "sv":
            return (await svHe(text)) as T;
          case "tr":
            return (await trHe(text)) as T;
          case "uk":
            return (await ukHe(text)) as T;
          case "vi":
            return (await viHe(text)) as T;
          case "zh":
            return (await zhHe(text)) as T;
        }
        break;

      // if OUTPUT language is Chinese
      case "zh":
        switch (from) {
          case "az":
            return (await azZh(text)) as T;
          case "ar":
            return (await arZh(text)) as T;
          case "hi":
            return (await hiZh(text)) as T;
          case "hy":
            return (await hyZh(text)) as T;
          case "ka":
            return (await kaZh(text)) as T;
          case "el":
            return (await elZh(text)) as T;
          case "he":
            return (await heZh(text)) as T;
          case "en":
            return (await enZh(text)) as T;
          case "ca":
            return (await caZh(text)) as T;
          case "cs":
            return (await csZh(text)) as T;
          case "da":
            return (await daZh(text)) as T;
          case "de":
            return (await deZh(text)) as T;
          case "es":
            return (await esZh(text)) as T;
          case "et":
            return (await etZh(text)) as T;
          case "fi":
            return (await fiZh(text)) as T;
          case "fr":
            return (await frZh(text)) as T;
          case "hr":
            return (await hrZh(text)) as T;
          case "hu":
            return (await huZh(text)) as T;
          case "id":
            return (await idZh(text)) as T;
          case "is":
            return (await isZh(text)) as T;
          case "it":
            return (await itZh(text)) as T;
          case "kk":
            return (await kkZh(text)) as T;
          case "lb":
            return (await lbZh(text)) as T;
          case "lt":
            return (await ltZh(text)) as T;
          case "lv":
            return (await lvZh(text)) as T;
          case "mt":
            return (await mtZh(text)) as T;
          case "nl":
            return (await nlZh(text)) as T;
          case "no":
            return (await noZh(text)) as T;
          case "pl":
            return (await plZh(text)) as T;
          case "pt":
            return (await ptZh(text)) as T;
          case "ro":
            return (await roZh(text)) as T;
          case "sk":
            return (await skZh(text)) as T;
          case "sl":
            return (await slZh(text)) as T;
          case "sq":
            return (await sqZh(text)) as T;
          case "sr":
            return (await srZh(text)) as T;
          case "sv":
            return (await svZh(text)) as T;
          case "tr":
            return (await trZh(text)) as T;
          case "bs":
            return (await bsZh(text)) as T;
          case "bg":
            return (await bgZh(text)) as T;
          case "mk":
            return (await mkZh(text)) as T;
          case "ru":
            return (await ruZh(text)) as T;
          case "uk":
            return (await ukZh(text)) as T;
          case "ko":
            return (await koZh(text)) as T;
          case "ja":
            return (await jaZh(text)) as T;
          case "vi":
            return (await viZh(text)) as T;
        }
        break;
    }

    // if OUTPUT language is Latin
    if (latnLanguages.includes(to as LatnLanguage)) {
      // if input language is Latin
      if (latnLanguages.includes(from as LatnLanguage)) {
        if (ascii === true) {
          return (await latnAscii(text)) as T;
        } else {
          return text as T;
        }
      }

      // if input language is Japanese
      if (from === "ja") {
        return (await jaLatn(text, ascii)) as T;
      }

      // if input language is Korean
      if (from === "ko") {
        return (await koLatn(text, ascii)) as T;
      }

      // if input language is Chinese
      if (from === "zh") {
        return (await zhLatn(text, ascii)) as T;
      }
    }

    // Mandarin, Japanese, Korean, Arabic, Hebrew, Hindi > IPA > Georgian / Armenian
    // if OUTPUT language is Armenian
    else if (to === "hy") {
      //
    }
    // if OUTPUT language is Georgian
    else if (to === "ka") {
      //
    }
  } catch (e: unknown) {
    throw new Error(typeof e === "string" ? e : JSON.stringify(e), { cause: e });
  }

  throw new Error("Transliteration failed: the language pair is not supported");
};
