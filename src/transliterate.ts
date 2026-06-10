import { latnLanguages, supportedLanguages } from "languages";
import { LatnLanguage, Options, Text } from "types/languages";
import { jaLatn } from "utils/ja-latn";
import { zhLatn } from "utils/zh-latn";
import { koLatn } from "utils/ko-latn";
import { zhJa } from "utils/zh-ja";
import { jaZh } from "utils/ja-zh";
import { jaKo } from "utils/ja-ko";
import { koJa } from "utils/ko-ja";
import { koZh } from "utils/ko-zh";
import { zhKo } from "utils/zh-ko";
import { zhRu } from "utils/zh-ru";
import { zhUk } from "utils/zh-uk";
import { zhBg } from "utils/zh-bg";
import { zhMk } from "utils/zh-mk";
import { mkZh } from "utils/mk-zh";
import { bgZh } from "utils/bg-zh";
import { ruZh } from "utils/ru-zh";
import { ukZh } from "utils/uk-zh";
import { azZh } from "utils/az-zh";
import { arZh } from "utils/ar-zh";
import { hiZh } from "utils/hi-zh";
import { hyZh } from "utils/hy-zh";
import { kaZh } from "utils/ka-zh";
import { elZh } from "utils/el-zh";
import { caZh } from "utils/ca-zh";
import { csZh } from "utils/cs-zh";
import { daZh } from "utils/da-zh";
import { deZh } from "utils/de-zh";
import { esZh } from "utils/es-zh";
import { etZh } from "utils/et-zh";
import { fiZh } from "utils/fi-zh";
import { frZh } from "utils/fr-zh";
import { hrZh } from "utils/hr-zh";
import { huZh } from "utils/hu-zh";
import { idZh } from "utils/id-zh";
import { isZh } from "utils/is-zh";
import { itZh } from "utils/it-zh";
import { kkZh } from "utils/kk-zh";
import { lbZh } from "utils/lb-zh";
import { ltZh } from "utils/lt-zh";
import { lvZh } from "utils/lv-zh";
import { mtZh } from "utils/mt-zh";
import { nlZh } from "utils/nl-zh";
import { noZh } from "utils/no-zh";
import { plZh } from "utils/pl-zh";
import { ptZh } from "utils/pt-zh";
import { roZh } from "utils/ro-zh";
import { skZh } from "utils/sk-zh";
import { slZh } from "utils/sl-zh";
import { sqZh } from "utils/sq-zh";
import { srZh } from "utils/sr-zh";
import { svZh } from "utils/sv-zh";
import { trZh } from "utils/tr-zh";
import { bsZh } from "utils/bs-zh";
import { zhVi } from "utils/zh-vi";
import { viZh } from "utils/vi-zh";
import { ruUk } from "utils/ru-uk";
import { ukRu } from "utils/uk-ru";
import { ukMk } from "utils/uk-mk";
import { mkUk } from "utils/mk-uk";
import { mkBg } from "utils/mk-bg";
import { bgMk } from "utils/bg-mk";
import { bgRu } from "utils/bg-ru";
import { ruBg } from "utils/ru-bg";
import { ruMk } from "utils/ru-mk";
import { mkRu } from "utils/mk-ru";
import { bgUk } from "utils/bg-uk";
import { ukBg } from "utils/uk-bg";
import { enZh } from "utils/en-zh";
import { heZh } from "utils/he-zh";
import { arJa } from "utils/ar-ja";
import { azJa } from "utils/az-ja";
import { bgJa } from "utils/bg-ja";
import { bsJa } from "utils/bs-ja";
import { caJa } from "utils/ca-ja";
import { csJa } from "utils/cs-ja";
import { daJa } from "utils/da-ja";
import { deJa } from "utils/de-ja";
import { elJa } from "utils/el-ja";
import { enJa } from "utils/en-ja";
import { esJa } from "utils/es-ja";
import { etJa } from "utils/et-ja";
import { fiJa } from "utils/fi-ja";
import { frJa } from "utils/fr-ja";
import { heJa } from "utils/he-ja";
import { hiJa } from "utils/hi-ja";
import { hrJa } from "utils/hr-ja";
import { huJa } from "utils/hu-ja";
import { hyJa } from "utils/hy-ja";
import { idJa } from "utils/id-ja";
import { isJa } from "utils/is-ja";
import { itJa } from "utils/it-ja";
import { kaJa } from "utils/ka-ja";
import { kkJa } from "utils/kk-ja";
import { lbJa } from "utils/lb-ja";
import { ltJa } from "utils/lt-ja";
import { lvJa } from "utils/lv-ja";
import { mkJa } from "utils/mk-ja";
import { mtJa } from "utils/mt-ja";
import { nlJa } from "utils/nl-ja";
import { noJa } from "utils/no-ja";
import { plJa } from "utils/pl-ja";
import { ptJa } from "utils/pt-ja";
import { roJa } from "utils/ro-ja";
import { ruJa } from "utils/ru-ja";
import { skJa } from "utils/sk-ja";
import { slJa } from "utils/sl-ja";
import { sqJa } from "utils/sq-ja";
import { srJa } from "utils/sr-ja";
import { svJa } from "utils/sv-ja";
import { trJa } from "utils/tr-ja";
import { ukJa } from "utils/uk-ja";
import { viJa } from "utils/vi-ja";
import { arKo } from "utils/ar-ko";
import { azKo } from "utils/az-ko";
import { bgKo } from "utils/bg-ko";
import { bsKo } from "utils/bs-ko";
import { caKo } from "utils/ca-ko";
import { csKo } from "utils/cs-ko";
import { daKo } from "utils/da-ko";
import { deKo } from "utils/de-ko";
import { elKo } from "utils/el-ko";
import { enKo } from "utils/en-ko";
import { esKo } from "utils/es-ko";
import { etKo } from "utils/et-ko";
import { fiKo } from "utils/fi-ko";
import { frKo } from "utils/fr-ko";
import { heKo } from "utils/he-ko";
import { hiKo } from "utils/hi-ko";
import { hrKo } from "utils/hr-ko";
import { huKo } from "utils/hu-ko";
import { hyKo } from "utils/hy-ko";
import { idKo } from "utils/id-ko";
import { isKo } from "utils/is-ko";
import { itKo } from "utils/it-ko";
import { kaKo } from "utils/ka-ko";
import { kkKo } from "utils/kk-ko";
import { lbKo } from "utils/lb-ko";
import { ltKo } from "utils/lt-ko";
import { lvKo } from "utils/lv-ko";
import { mkKo } from "utils/mk-ko";
import { mtKo } from "utils/mt-ko";
import { nlKo } from "utils/nl-ko";
import { noKo } from "utils/no-ko";
import { plKo } from "utils/pl-ko";
import { ptKo } from "utils/pt-ko";
import { roKo } from "utils/ro-ko";
import { ruKo } from "utils/ru-ko";
import { skKo } from "utils/sk-ko";
import { slKo } from "utils/sl-ko";
import { sqKo } from "utils/sq-ko";
import { srKo } from "utils/sr-ko";
import { svKo } from "utils/sv-ko";
import { trKo } from "utils/tr-ko";
import { ukKo } from "utils/uk-ko";
import { viKo } from "utils/vi-ko";
import { arHi } from "utils/ar-hi";
import { azHi } from "utils/az-hi";
import { bgHi } from "utils/bg-hi";
import { bsHi } from "utils/bs-hi";
import { caHi } from "utils/ca-hi";
import { csHi } from "utils/cs-hi";
import { daHi } from "utils/da-hi";
import { deHi } from "utils/de-hi";
import { elHi } from "utils/el-hi";
import { enHi } from "utils/en-hi";
import { esHi } from "utils/es-hi";
import { etHi } from "utils/et-hi";
import { fiHi } from "utils/fi-hi";
import { frHi } from "utils/fr-hi";
import { heHi } from "utils/he-hi";
import { hrHi } from "utils/hr-hi";
import { huHi } from "utils/hu-hi";
import { hyHi } from "utils/hy-hi";
import { idHi } from "utils/id-hi";
import { isHi } from "utils/is-hi";
import { itHi } from "utils/it-hi";
import { jaHi } from "utils/ja-hi";
import { kaHi } from "utils/ka-hi";
import { kkHi } from "utils/kk-hi";
import { koHi } from "utils/ko-hi";
import { lbHi } from "utils/lb-hi";
import { ltHi } from "utils/lt-hi";
import { lvHi } from "utils/lv-hi";
import { mkHi } from "utils/mk-hi";
import { mtHi } from "utils/mt-hi";
import { nlHi } from "utils/nl-hi";
import { noHi } from "utils/no-hi";
import { plHi } from "utils/pl-hi";
import { ptHi } from "utils/pt-hi";
import { roHi } from "utils/ro-hi";
import { ruHi } from "utils/ru-hi";
import { skHi } from "utils/sk-hi";
import { slHi } from "utils/sl-hi";
import { sqHi } from "utils/sq-hi";
import { srHi } from "utils/sr-hi";
import { svHi } from "utils/sv-hi";
import { trHi } from "utils/tr-hi";
import { ukHi } from "utils/uk-hi";
import { viHi } from "utils/vi-hi";
import { zhHi } from "utils/zh-hi";
import { azAr } from "utils/az-ar";
import { bgAr } from "utils/bg-ar";
import { bsAr } from "utils/bs-ar";
import { caAr } from "utils/ca-ar";
import { csAr } from "utils/cs-ar";
import { daAr } from "utils/da-ar";
import { deAr } from "utils/de-ar";
import { elAr } from "utils/el-ar";
import { enAr } from "utils/en-ar";
import { esAr } from "utils/es-ar";
import { etAr } from "utils/et-ar";
import { fiAr } from "utils/fi-ar";
import { frAr } from "utils/fr-ar";
import { heAr } from "utils/he-ar";
import { hiAr } from "utils/hi-ar";
import { hrAr } from "utils/hr-ar";
import { huAr } from "utils/hu-ar";
import { hyAr } from "utils/hy-ar";
import { idAr } from "utils/id-ar";
import { isAr } from "utils/is-ar";
import { itAr } from "utils/it-ar";
import { jaAr } from "utils/ja-ar";
import { kaAr } from "utils/ka-ar";
import { kkAr } from "utils/kk-ar";
import { koAr } from "utils/ko-ar";
import { lbAr } from "utils/lb-ar";
import { ltAr } from "utils/lt-ar";
import { lvAr } from "utils/lv-ar";
import { mkAr } from "utils/mk-ar";
import { mtAr } from "utils/mt-ar";
import { nlAr } from "utils/nl-ar";
import { noAr } from "utils/no-ar";
import { plAr } from "utils/pl-ar";
import { ptAr } from "utils/pt-ar";
import { roAr } from "utils/ro-ar";
import { ruAr } from "utils/ru-ar";
import { skAr } from "utils/sk-ar";
import { slAr } from "utils/sl-ar";
import { sqAr } from "utils/sq-ar";
import { srAr } from "utils/sr-ar";
import { svAr } from "utils/sv-ar";
import { trAr } from "utils/tr-ar";
import { ukAr } from "utils/uk-ar";
import { viAr } from "utils/vi-ar";
import { zhAr } from "utils/zh-ar";
import { azHe } from "utils/az-he";
import { bgHe } from "utils/bg-he";
import { bsHe } from "utils/bs-he";
import { caHe } from "utils/ca-he";
import { csHe } from "utils/cs-he";
import { daHe } from "utils/da-he";
import { deHe } from "utils/de-he";
import { elHe } from "utils/el-he";
import { enHe } from "utils/en-he";
import { esHe } from "utils/es-he";
import { etHe } from "utils/et-he";
import { fiHe } from "utils/fi-he";
import { frHe } from "utils/fr-he";
import { hrHe } from "utils/hr-he";
import { huHe } from "utils/hu-he";
import { hyHe } from "utils/hy-he";
import { idHe } from "utils/id-he";
import { isHe } from "utils/is-he";
import { itHe } from "utils/it-he";
import { jaHe } from "utils/ja-he";
import { kaHe } from "utils/ka-he";
import { kkHe } from "utils/kk-he";
import { koHe } from "utils/ko-he";
import { lbHe } from "utils/lb-he";
import { ltHe } from "utils/lt-he";
import { lvHe } from "utils/lv-he";
import { mkHe } from "utils/mk-he";
import { mtHe } from "utils/mt-he";
import { nlHe } from "utils/nl-he";
import { noHe } from "utils/no-he";
import { plHe } from "utils/pl-he";
import { ptHe } from "utils/pt-he";
import { roHe } from "utils/ro-he";
import { ruHe } from "utils/ru-he";
import { skHe } from "utils/sk-he";
import { slHe } from "utils/sl-he";
import { sqHe } from "utils/sq-he";
import { srHe } from "utils/sr-he";
import { svHe } from "utils/sv-he";
import { trHe } from "utils/tr-he";
import { ukHe } from "utils/uk-he";
import { viHe } from "utils/vi-he";
import { zhHe } from "utils/zh-he";
import { latnAscii } from "utils/latn-ascii";
import { elEn } from "utils/el-en";
import { hyEn } from "utils/hy-en";
import { kaEn } from "utils/ka-en";
import { hiEn } from "utils/hi-en";
import { ruEn } from "utils/ru-en";
import { ukEn } from "utils/uk-en";
import { bgEn } from "utils/bg-en";
import { mkEn } from "utils/mk-en";
import { ipaEn } from "utils/ipa-en";

export const transliterate = async <T extends Text>(
  text: T,
  { from, to, latin_ASCII = false }: Options,
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
    // if OUTPUT language is English
    if (to === "en") {
      // if input language is Greek
      if (from === "el") {
        return (await elEn(text, latin_ASCII)) as T;
      }

      // if input language is Armenian
      if (from === "hy") {
        return (await hyEn(text, latin_ASCII)) as T;
      }

      // if input language is Georgian
      if (from === "ka") {
        return (await kaEn(text, latin_ASCII)) as T;
      }

      // if input language is Hindi
      if (from === "hi") {
        return (await hiEn(text, latin_ASCII)) as T;
      }

      // if input language is Russian
      if (from === "ru") {
        return (await ruEn(text, latin_ASCII)) as T;
      }

      // if input language is Ukrainian
      if (from === "uk") {
        return (await ukEn(text, latin_ASCII)) as T;
      }

      // if input language is Bulgarian
      if (from === "bg") {
        return (await bgEn(text, latin_ASCII)) as T;
      }

      // if input language is Macedonian
      if (from === "mk") {
        return (await mkEn(text, latin_ASCII)) as T;
      }

      // if input language is Arabic or Hebrew
      if (from === "ar" || from === "he") {
        return (await ipaEn(text, latin_ASCII)) as T;
      }
    }

    // if OUTPUT language is Vietnamese
    if (to === "vi") {
      // if input language is Chinese
      if (from === "zh") {
        return (await zhVi(text, latin_ASCII)) as T;
      }
    }

    // if OUTPUT language is Latin
    else if (latnLanguages.includes(to as LatnLanguage)) {
      // if input language is Latin
      if (latnLanguages.includes(from as LatnLanguage)) {
        if (latin_ASCII === true) {
          return (await latnAscii(text)) as T;
        } else {
          return text as T;
        }
      }

      // if input language is Japanese
      if (from === "ja") {
        return (await jaLatn(text, latin_ASCII)) as T;
      }

      // if input language is Korean
      if (from === "ko") {
        return (await koLatn(text, latin_ASCII)) as T;
      }

      // if input language is Chinese
      if (from === "zh") {
        return (await zhLatn(text, latin_ASCII)) as T;
      }
    }

    // if OUTPUT language is Bulgarian
    else if (to === "bg") {
      // if input language is Macedonian
      if (from === "mk") {
        return (await mkBg(text)) as T;
      }

      // if input language is Russian
      if (from === "ru") {
        return (await ruBg(text)) as T;
      }

      // if input language is Ukrainian
      if (from === "uk") {
        return (await ukBg(text)) as T;
      }

      // if input language is Chinese
      if (from === "zh") {
        return (await zhBg(text)) as T;
      }
    }

    // if OUTPUT language is Macedonian
    else if (to === "mk") {
      // if input language is Bulgarian
      if (from === "bg") {
        return (await bgMk(text)) as T;
      }

      // if input language is Russian
      if (from === "ru") {
        return (await ruMk(text)) as T;
      }

      // if input language is Ukrainian
      if (from === "uk") {
        return (await ukMk(text)) as T;
      }

      // if input language is Chinese
      if (from === "zh") {
        return (await zhMk(text)) as T;
      }
    }

    // if OUTPUT language is Russian
    else if (to === "ru") {
      // if input language is Bulgarian
      if (from === "bg") {
        return (await bgRu(text)) as T;
      }

      // if input language is Macedonian
      if (from === "mk") {
        return (await mkRu(text)) as T;
      }

      // if input language is Ukrainian
      if (from === "uk") {
        return (await ukRu(text)) as T;
      }

      // if input language is Chinese
      if (from === "zh") {
        return (await zhRu(text)) as T;
      }
    }

    // if OUTPUT language is Ukrainian
    else if (to === "uk") {
      // if input language is Bulgarian
      if (from === "bg") {
        return (await bgUk(text)) as T;
      }

      // if input language is Russian
      if (from === "ru") {
        return (await ruUk(text)) as T;
      }

      // if input language is Macedonian
      if (from === "mk") {
        return (await mkUk(text)) as T;
      }

      // if input language is Chinese
      if (from === "zh") {
        return (await zhUk(text)) as T;
      }
    }

    // if OUTPUT language is Japanese
    else if (to === "ja") {
      // if input language is Korean
      if (from === "ko") {
        return (await koJa(text)) as T;
      }

      // if input language is Chinese
      if (from === "zh") {
        return (await zhJa(text)) as T;
      }

      // if input language is Arabic
      if (from === "ar") {
        return (await arJa(text)) as T;
      }

      // if input language is Azerbaijani
      if (from === "az") {
        return (await azJa(text)) as T;
      }

      // if input language is Bulgarian
      if (from === "bg") {
        return (await bgJa(text)) as T;
      }

      // if input language is Bosnian
      if (from === "bs") {
        return (await bsJa(text)) as T;
      }

      // if input language is Catalan
      if (from === "ca") {
        return (await caJa(text)) as T;
      }

      // if input language is Czech
      if (from === "cs") {
        return (await csJa(text)) as T;
      }

      // if input language is Danish
      if (from === "da") {
        return (await daJa(text)) as T;
      }

      // if input language is German
      if (from === "de") {
        return (await deJa(text)) as T;
      }

      // if input language is Greek
      if (from === "el") {
        return (await elJa(text)) as T;
      }

      // if input language is English
      if (from === "en") {
        return (await enJa(text)) as T;
      }

      // if input language is Spanish
      if (from === "es") {
        return (await esJa(text)) as T;
      }

      // if input language is Estonian
      if (from === "et") {
        return (await etJa(text)) as T;
      }

      // if input language is Finnish
      if (from === "fi") {
        return (await fiJa(text)) as T;
      }

      // if input language is French
      if (from === "fr") {
        return (await frJa(text)) as T;
      }

      // if input language is Hebrew
      if (from === "he") {
        return (await heJa(text)) as T;
      }

      // if input language is Hindi
      if (from === "hi") {
        return (await hiJa(text)) as T;
      }

      // if input language is Croatian
      if (from === "hr") {
        return (await hrJa(text)) as T;
      }

      // if input language is Hungarian
      if (from === "hu") {
        return (await huJa(text)) as T;
      }

      // if input language is Armenian
      if (from === "hy") {
        return (await hyJa(text)) as T;
      }

      // if input language is Indonesian
      if (from === "id") {
        return (await idJa(text)) as T;
      }

      // if input language is Icelandic
      if (from === "is") {
        return (await isJa(text)) as T;
      }

      // if input language is Italian
      if (from === "it") {
        return (await itJa(text)) as T;
      }

      // if input language is Georgian
      if (from === "ka") {
        return (await kaJa(text)) as T;
      }

      // if input language is Kazakh
      if (from === "kk") {
        return (await kkJa(text)) as T;
      }

      // if input language is Luxembourgish
      if (from === "lb") {
        return (await lbJa(text)) as T;
      }

      // if input language is Lithuanian
      if (from === "lt") {
        return (await ltJa(text)) as T;
      }

      // if input language is Latvian
      if (from === "lv") {
        return (await lvJa(text)) as T;
      }

      // if input language is Macedonian
      if (from === "mk") {
        return (await mkJa(text)) as T;
      }

      // if input language is Maltese
      if (from === "mt") {
        return (await mtJa(text)) as T;
      }

      // if input language is Dutch
      if (from === "nl") {
        return (await nlJa(text)) as T;
      }

      // if input language is Norwegian
      if (from === "no") {
        return (await noJa(text)) as T;
      }

      // if input language is Polish
      if (from === "pl") {
        return (await plJa(text)) as T;
      }

      // if input language is Portuguese
      if (from === "pt") {
        return (await ptJa(text)) as T;
      }

      // if input language is Romanian
      if (from === "ro") {
        return (await roJa(text)) as T;
      }

      // if input language is Russian
      if (from === "ru") {
        return (await ruJa(text)) as T;
      }

      // if input language is Slovak
      if (from === "sk") {
        return (await skJa(text)) as T;
      }

      // if input language is Slovenian
      if (from === "sl") {
        return (await slJa(text)) as T;
      }

      // if input language is Albanian
      if (from === "sq") {
        return (await sqJa(text)) as T;
      }

      // if input language is Serbian
      if (from === "sr") {
        return (await srJa(text)) as T;
      }

      // if input language is Swedish
      if (from === "sv") {
        return (await svJa(text)) as T;
      }

      // if input language is Turkish
      if (from === "tr") {
        return (await trJa(text)) as T;
      }

      // if input language is Ukrainian
      if (from === "uk") {
        return (await ukJa(text)) as T;
      }

      // if input language is Vietnamese
      if (from === "vi") {
        return (await viJa(text)) as T;
      }
    }

    // if OUTPUT language is Korean
    else if (to === "ko") {
      // if input language is Japanese
      if (from === "ja") {
        return (await jaKo(text)) as T;
      }

      // if input language is Chinese
      if (from === "zh") {
        return (await zhKo(text)) as T;
      }

      // if input language is Arabic
      if (from === "ar") {
        return (await arKo(text)) as T;
      }

      // if input language is Azerbaijani
      if (from === "az") {
        return (await azKo(text)) as T;
      }

      // if input language is Bulgarian
      if (from === "bg") {
        return (await bgKo(text)) as T;
      }

      // if input language is Bosnian
      if (from === "bs") {
        return (await bsKo(text)) as T;
      }

      // if input language is Catalan
      if (from === "ca") {
        return (await caKo(text)) as T;
      }

      // if input language is Czech
      if (from === "cs") {
        return (await csKo(text)) as T;
      }

      // if input language is Danish
      if (from === "da") {
        return (await daKo(text)) as T;
      }

      // if input language is German
      if (from === "de") {
        return (await deKo(text)) as T;
      }

      // if input language is Greek
      if (from === "el") {
        return (await elKo(text)) as T;
      }

      // if input language is English
      if (from === "en") {
        return (await enKo(text)) as T;
      }

      // if input language is Spanish
      if (from === "es") {
        return (await esKo(text)) as T;
      }

      // if input language is Estonian
      if (from === "et") {
        return (await etKo(text)) as T;
      }

      // if input language is Finnish
      if (from === "fi") {
        return (await fiKo(text)) as T;
      }

      // if input language is French
      if (from === "fr") {
        return (await frKo(text)) as T;
      }

      // if input language is Hebrew
      if (from === "he") {
        return (await heKo(text)) as T;
      }

      // if input language is Hindi
      if (from === "hi") {
        return (await hiKo(text)) as T;
      }

      // if input language is Croatian
      if (from === "hr") {
        return (await hrKo(text)) as T;
      }

      // if input language is Hungarian
      if (from === "hu") {
        return (await huKo(text)) as T;
      }

      // if input language is Armenian
      if (from === "hy") {
        return (await hyKo(text)) as T;
      }

      // if input language is Indonesian
      if (from === "id") {
        return (await idKo(text)) as T;
      }

      // if input language is Icelandic
      if (from === "is") {
        return (await isKo(text)) as T;
      }

      // if input language is Italian
      if (from === "it") {
        return (await itKo(text)) as T;
      }

      // if input language is Georgian
      if (from === "ka") {
        return (await kaKo(text)) as T;
      }

      // if input language is Kazakh
      if (from === "kk") {
        return (await kkKo(text)) as T;
      }

      // if input language is Luxembourgish
      if (from === "lb") {
        return (await lbKo(text)) as T;
      }

      // if input language is Lithuanian
      if (from === "lt") {
        return (await ltKo(text)) as T;
      }

      // if input language is Latvian
      if (from === "lv") {
        return (await lvKo(text)) as T;
      }

      // if input language is Macedonian
      if (from === "mk") {
        return (await mkKo(text)) as T;
      }

      // if input language is Maltese
      if (from === "mt") {
        return (await mtKo(text)) as T;
      }

      // if input language is Dutch
      if (from === "nl") {
        return (await nlKo(text)) as T;
      }

      // if input language is Norwegian
      if (from === "no") {
        return (await noKo(text)) as T;
      }

      // if input language is Polish
      if (from === "pl") {
        return (await plKo(text)) as T;
      }

      // if input language is Portuguese
      if (from === "pt") {
        return (await ptKo(text)) as T;
      }

      // if input language is Romanian
      if (from === "ro") {
        return (await roKo(text)) as T;
      }

      // if input language is Russian
      if (from === "ru") {
        return (await ruKo(text)) as T;
      }

      // if input language is Slovak
      if (from === "sk") {
        return (await skKo(text)) as T;
      }

      // if input language is Slovenian
      if (from === "sl") {
        return (await slKo(text)) as T;
      }

      // if input language is Albanian
      if (from === "sq") {
        return (await sqKo(text)) as T;
      }

      // if input language is Serbian
      if (from === "sr") {
        return (await srKo(text)) as T;
      }

      // if input language is Swedish
      if (from === "sv") {
        return (await svKo(text)) as T;
      }

      // if input language is Turkish
      if (from === "tr") {
        return (await trKo(text)) as T;
      }

      // if input language is Ukrainian
      if (from === "uk") {
        return (await ukKo(text)) as T;
      }

      // if input language is Vietnamese
      if (from === "vi") {
        return (await viKo(text)) as T;
      }
    }

    // if OUTPUT language is Hindi
    else if (to === "hi") {
      // if input language is Arabic
      if (from === "ar") {
        return (await arHi(text)) as T;
      }

      // if input language is Azerbaijani
      if (from === "az") {
        return (await azHi(text)) as T;
      }

      // if input language is Bulgarian
      if (from === "bg") {
        return (await bgHi(text)) as T;
      }

      // if input language is Bosnian
      if (from === "bs") {
        return (await bsHi(text)) as T;
      }

      // if input language is Catalan
      if (from === "ca") {
        return (await caHi(text)) as T;
      }

      // if input language is Czech
      if (from === "cs") {
        return (await csHi(text)) as T;
      }

      // if input language is Danish
      if (from === "da") {
        return (await daHi(text)) as T;
      }

      // if input language is German
      if (from === "de") {
        return (await deHi(text)) as T;
      }

      // if input language is Greek
      if (from === "el") {
        return (await elHi(text)) as T;
      }

      // if input language is English
      if (from === "en") {
        return (await enHi(text)) as T;
      }

      // if input language is Spanish
      if (from === "es") {
        return (await esHi(text)) as T;
      }

      // if input language is Estonian
      if (from === "et") {
        return (await etHi(text)) as T;
      }

      // if input language is Finnish
      if (from === "fi") {
        return (await fiHi(text)) as T;
      }

      // if input language is French
      if (from === "fr") {
        return (await frHi(text)) as T;
      }

      // if input language is Hebrew
      if (from === "he") {
        return (await heHi(text)) as T;
      }

      // if input language is Croatian
      if (from === "hr") {
        return (await hrHi(text)) as T;
      }

      // if input language is Hungarian
      if (from === "hu") {
        return (await huHi(text)) as T;
      }

      // if input language is Armenian
      if (from === "hy") {
        return (await hyHi(text)) as T;
      }

      // if input language is Indonesian
      if (from === "id") {
        return (await idHi(text)) as T;
      }

      // if input language is Icelandic
      if (from === "is") {
        return (await isHi(text)) as T;
      }

      // if input language is Italian
      if (from === "it") {
        return (await itHi(text)) as T;
      }

      // if input language is Japanese
      if (from === "ja") {
        return (await jaHi(text)) as T;
      }

      // if input language is Georgian
      if (from === "ka") {
        return (await kaHi(text)) as T;
      }

      // if input language is Kazakh
      if (from === "kk") {
        return (await kkHi(text)) as T;
      }

      // if input language is Korean
      if (from === "ko") {
        return (await koHi(text)) as T;
      }

      // if input language is Luxembourgish
      if (from === "lb") {
        return (await lbHi(text)) as T;
      }

      // if input language is Lithuanian
      if (from === "lt") {
        return (await ltHi(text)) as T;
      }

      // if input language is Latvian
      if (from === "lv") {
        return (await lvHi(text)) as T;
      }

      // if input language is Macedonian
      if (from === "mk") {
        return (await mkHi(text)) as T;
      }

      // if input language is Maltese
      if (from === "mt") {
        return (await mtHi(text)) as T;
      }

      // if input language is Dutch
      if (from === "nl") {
        return (await nlHi(text)) as T;
      }

      // if input language is Norwegian
      if (from === "no") {
        return (await noHi(text)) as T;
      }

      // if input language is Polish
      if (from === "pl") {
        return (await plHi(text)) as T;
      }

      // if input language is Portuguese
      if (from === "pt") {
        return (await ptHi(text)) as T;
      }

      // if input language is Romanian
      if (from === "ro") {
        return (await roHi(text)) as T;
      }

      // if input language is Russian
      if (from === "ru") {
        return (await ruHi(text)) as T;
      }

      // if input language is Slovak
      if (from === "sk") {
        return (await skHi(text)) as T;
      }

      // if input language is Slovenian
      if (from === "sl") {
        return (await slHi(text)) as T;
      }

      // if input language is Albanian
      if (from === "sq") {
        return (await sqHi(text)) as T;
      }

      // if input language is Serbian
      if (from === "sr") {
        return (await srHi(text)) as T;
      }

      // if input language is Swedish
      if (from === "sv") {
        return (await svHi(text)) as T;
      }

      // if input language is Turkish
      if (from === "tr") {
        return (await trHi(text)) as T;
      }

      // if input language is Ukrainian
      if (from === "uk") {
        return (await ukHi(text)) as T;
      }

      // if input language is Vietnamese
      if (from === "vi") {
        return (await viHi(text)) as T;
      }

      // if input language is Chinese
      if (from === "zh") {
        return (await zhHi(text)) as T;
      }
    }

    // if OUTPUT language is Arabic
    else if (to === "ar") {
      // if input language is Azerbaijani
      if (from === "az") {
        return (await azAr(text)) as T;
      }

      // if input language is Bulgarian
      if (from === "bg") {
        return (await bgAr(text)) as T;
      }

      // if input language is Bosnian
      if (from === "bs") {
        return (await bsAr(text)) as T;
      }

      // if input language is Catalan
      if (from === "ca") {
        return (await caAr(text)) as T;
      }

      // if input language is Czech
      if (from === "cs") {
        return (await csAr(text)) as T;
      }

      // if input language is Danish
      if (from === "da") {
        return (await daAr(text)) as T;
      }

      // if input language is German
      if (from === "de") {
        return (await deAr(text)) as T;
      }

      // if input language is Greek
      if (from === "el") {
        return (await elAr(text)) as T;
      }

      // if input language is English
      if (from === "en") {
        return (await enAr(text)) as T;
      }

      // if input language is Spanish
      if (from === "es") {
        return (await esAr(text)) as T;
      }

      // if input language is Estonian
      if (from === "et") {
        return (await etAr(text)) as T;
      }

      // if input language is Finnish
      if (from === "fi") {
        return (await fiAr(text)) as T;
      }

      // if input language is French
      if (from === "fr") {
        return (await frAr(text)) as T;
      }

      // if input language is Hebrew
      if (from === "he") {
        return (await heAr(text)) as T;
      }

      // if input language is Hindi
      if (from === "hi") {
        return (await hiAr(text)) as T;
      }

      // if input language is Croatian
      if (from === "hr") {
        return (await hrAr(text)) as T;
      }

      // if input language is Hungarian
      if (from === "hu") {
        return (await huAr(text)) as T;
      }

      // if input language is Armenian
      if (from === "hy") {
        return (await hyAr(text)) as T;
      }

      // if input language is Indonesian
      if (from === "id") {
        return (await idAr(text)) as T;
      }

      // if input language is Icelandic
      if (from === "is") {
        return (await isAr(text)) as T;
      }

      // if input language is Italian
      if (from === "it") {
        return (await itAr(text)) as T;
      }

      // if input language is Japanese
      if (from === "ja") {
        return (await jaAr(text)) as T;
      }

      // if input language is Georgian
      if (from === "ka") {
        return (await kaAr(text)) as T;
      }

      // if input language is Kazakh
      if (from === "kk") {
        return (await kkAr(text)) as T;
      }

      // if input language is Korean
      if (from === "ko") {
        return (await koAr(text)) as T;
      }

      // if input language is Luxembourgish
      if (from === "lb") {
        return (await lbAr(text)) as T;
      }

      // if input language is Lithuanian
      if (from === "lt") {
        return (await ltAr(text)) as T;
      }

      // if input language is Latvian
      if (from === "lv") {
        return (await lvAr(text)) as T;
      }

      // if input language is Macedonian
      if (from === "mk") {
        return (await mkAr(text)) as T;
      }

      // if input language is Maltese
      if (from === "mt") {
        return (await mtAr(text)) as T;
      }

      // if input language is Dutch
      if (from === "nl") {
        return (await nlAr(text)) as T;
      }

      // if input language is Norwegian
      if (from === "no") {
        return (await noAr(text)) as T;
      }

      // if input language is Polish
      if (from === "pl") {
        return (await plAr(text)) as T;
      }

      // if input language is Portuguese
      if (from === "pt") {
        return (await ptAr(text)) as T;
      }

      // if input language is Romanian
      if (from === "ro") {
        return (await roAr(text)) as T;
      }

      // if input language is Russian
      if (from === "ru") {
        return (await ruAr(text)) as T;
      }

      // if input language is Slovak
      if (from === "sk") {
        return (await skAr(text)) as T;
      }

      // if input language is Slovenian
      if (from === "sl") {
        return (await slAr(text)) as T;
      }

      // if input language is Albanian
      if (from === "sq") {
        return (await sqAr(text)) as T;
      }

      // if input language is Serbian
      if (from === "sr") {
        return (await srAr(text)) as T;
      }

      // if input language is Swedish
      if (from === "sv") {
        return (await svAr(text)) as T;
      }

      // if input language is Turkish
      if (from === "tr") {
        return (await trAr(text)) as T;
      }

      // if input language is Ukrainian
      if (from === "uk") {
        return (await ukAr(text)) as T;
      }

      // if input language is Vietnamese
      if (from === "vi") {
        return (await viAr(text)) as T;
      }

      // if input language is Chinese
      if (from === "zh") {
        return (await zhAr(text)) as T;
      }
    }

    // if OUTPUT language is Hebrew
    else if (to === "he") {
      // if input language is Azerbaijani
      if (from === "az") {
        return (await azHe(text)) as T;
      }

      // if input language is Bulgarian
      if (from === "bg") {
        return (await bgHe(text)) as T;
      }

      // if input language is Bosnian
      if (from === "bs") {
        return (await bsHe(text)) as T;
      }

      // if input language is Catalan
      if (from === "ca") {
        return (await caHe(text)) as T;
      }

      // if input language is Czech
      if (from === "cs") {
        return (await csHe(text)) as T;
      }

      // if input language is Danish
      if (from === "da") {
        return (await daHe(text)) as T;
      }

      // if input language is German
      if (from === "de") {
        return (await deHe(text)) as T;
      }

      // if input language is Greek
      if (from === "el") {
        return (await elHe(text)) as T;
      }

      // if input language is English
      if (from === "en") {
        return (await enHe(text)) as T;
      }

      // if input language is Spanish
      if (from === "es") {
        return (await esHe(text)) as T;
      }

      // if input language is Estonian
      if (from === "et") {
        return (await etHe(text)) as T;
      }

      // if input language is Finnish
      if (from === "fi") {
        return (await fiHe(text)) as T;
      }

      // if input language is French
      if (from === "fr") {
        return (await frHe(text)) as T;
      }

      // if input language is Croatian
      if (from === "hr") {
        return (await hrHe(text)) as T;
      }

      // if input language is Hungarian
      if (from === "hu") {
        return (await huHe(text)) as T;
      }

      // if input language is Armenian
      if (from === "hy") {
        return (await hyHe(text)) as T;
      }

      // if input language is Indonesian
      if (from === "id") {
        return (await idHe(text)) as T;
      }

      // if input language is Icelandic
      if (from === "is") {
        return (await isHe(text)) as T;
      }

      // if input language is Italian
      if (from === "it") {
        return (await itHe(text)) as T;
      }

      // if input language is Japanese
      if (from === "ja") {
        return (await jaHe(text)) as T;
      }

      // if input language is Georgian
      if (from === "ka") {
        return (await kaHe(text)) as T;
      }

      // if input language is Kazakh
      if (from === "kk") {
        return (await kkHe(text)) as T;
      }

      // if input language is Korean
      if (from === "ko") {
        return (await koHe(text)) as T;
      }

      // if input language is Luxembourgish
      if (from === "lb") {
        return (await lbHe(text)) as T;
      }

      // if input language is Lithuanian
      if (from === "lt") {
        return (await ltHe(text)) as T;
      }

      // if input language is Latvian
      if (from === "lv") {
        return (await lvHe(text)) as T;
      }

      // if input language is Macedonian
      if (from === "mk") {
        return (await mkHe(text)) as T;
      }

      // if input language is Maltese
      if (from === "mt") {
        return (await mtHe(text)) as T;
      }

      // if input language is Dutch
      if (from === "nl") {
        return (await nlHe(text)) as T;
      }

      // if input language is Norwegian
      if (from === "no") {
        return (await noHe(text)) as T;
      }

      // if input language is Polish
      if (from === "pl") {
        return (await plHe(text)) as T;
      }

      // if input language is Portuguese
      if (from === "pt") {
        return (await ptHe(text)) as T;
      }

      // if input language is Romanian
      if (from === "ro") {
        return (await roHe(text)) as T;
      }

      // if input language is Russian
      if (from === "ru") {
        return (await ruHe(text)) as T;
      }

      // if input language is Slovak
      if (from === "sk") {
        return (await skHe(text)) as T;
      }

      // if input language is Slovenian
      if (from === "sl") {
        return (await slHe(text)) as T;
      }

      // if input language is Albanian
      if (from === "sq") {
        return (await sqHe(text)) as T;
      }

      // if input language is Serbian
      if (from === "sr") {
        return (await srHe(text)) as T;
      }

      // if input language is Swedish
      if (from === "sv") {
        return (await svHe(text)) as T;
      }

      // if input language is Turkish
      if (from === "tr") {
        return (await trHe(text)) as T;
      }

      // if input language is Ukrainian
      if (from === "uk") {
        return (await ukHe(text)) as T;
      }

      // if input language is Vietnamese
      if (from === "vi") {
        return (await viHe(text)) as T;
      }

      // if input language is Chinese
      if (from === "zh") {
        return (await zhHe(text)) as T;
      }
    }

    // if OUTPUT language is Chinese
    else if (to === "zh") {
      // if input language is Azerbaijani
      if (from === "az") {
        return (await azZh(text)) as T;
      }

      // if input language is Arabic
      if (from === "ar") {
        return (await arZh(text)) as T;
      }

      // if input language is Hindi
      if (from === "hi") {
        return (await hiZh(text)) as T;
      }

      // if input language is Armenian
      if (from === "hy") {
        return (await hyZh(text)) as T;
      }

      // if input language is Georgian
      if (from === "ka") {
        return (await kaZh(text)) as T;
      }

      // if input language is Greek
      if (from === "el") {
        return (await elZh(text)) as T;
      }

      // if input language is Hebrew
      if (from === "he") {
        return (await heZh(text)) as T;
      }

      // if input language is English
      if (from === "en") {
        return (await enZh(text)) as T;
      }

      // if input language is Catalan
      if (from === "ca") {
        return (await caZh(text)) as T;
      }

      // if input language is Czech
      if (from === "cs") {
        return (await csZh(text)) as T;
      }

      // if input language is Danish
      if (from === "da") {
        return (await daZh(text)) as T;
      }

      // if input language is German
      if (from === "de") {
        return (await deZh(text)) as T;
      }

      // if input language is Spanish
      if (from === "es") {
        return (await esZh(text)) as T;
      }

      // if input language is Estonian
      if (from === "et") {
        return (await etZh(text)) as T;
      }

      // if input language is Finnish
      if (from === "fi") {
        return (await fiZh(text)) as T;
      }

      // if input language is French
      if (from === "fr") {
        return (await frZh(text)) as T;
      }

      // if input language is Croatian
      if (from === "hr") {
        return (await hrZh(text)) as T;
      }

      // if input language is Hungarian
      if (from === "hu") {
        return (await huZh(text)) as T;
      }

      // if input language is Indonesian
      if (from === "id") {
        return (await idZh(text)) as T;
      }

      // if input language is Icelandic
      if (from === "is") {
        return (await isZh(text)) as T;
      }

      // if input language is Italian
      if (from === "it") {
        return (await itZh(text)) as T;
      }

      // if input language is Kazakh
      if (from === "kk") {
        return (await kkZh(text)) as T;
      }

      // if input language is Luxembourgish
      if (from === "lb") {
        return (await lbZh(text)) as T;
      }

      // if input language is Lithuanian
      if (from === "lt") {
        return (await ltZh(text)) as T;
      }

      // if input language is Latvian
      if (from === "lv") {
        return (await lvZh(text)) as T;
      }

      // if input language is Maltese
      if (from === "mt") {
        return (await mtZh(text)) as T;
      }

      // if input language is Dutch
      if (from === "nl") {
        return (await nlZh(text)) as T;
      }

      // if input language is Norwegian
      if (from === "no") {
        return (await noZh(text)) as T;
      }

      // if input language is Polish
      if (from === "pl") {
        return (await plZh(text)) as T;
      }

      // if input language is Portuguese
      if (from === "pt") {
        return (await ptZh(text)) as T;
      }

      // if input language is Romanian
      if (from === "ro") {
        return (await roZh(text)) as T;
      }

      // if input language is Slovak
      if (from === "sk") {
        return (await skZh(text)) as T;
      }

      // if input language is Slovenian
      if (from === "sl") {
        return (await slZh(text)) as T;
      }

      // if input language is Albanian
      if (from === "sq") {
        return (await sqZh(text)) as T;
      }

      // if input language is Serbian
      if (from === "sr") {
        return (await srZh(text)) as T;
      }

      // if input language is Swedish
      if (from === "sv") {
        return (await svZh(text)) as T;
      }

      // if input language is Turkish
      if (from === "tr") {
        return (await trZh(text)) as T;
      }

      // if input language is Bosnian
      if (from === "bs") {
        return (await bsZh(text)) as T;
      }

      // if input language is Bulgarian
      if (from === "bg") {
        return (await bgZh(text)) as T;
      }

      // if input language is Macedonian
      if (from === "mk") {
        return (await mkZh(text)) as T;
      }

      // if input language is Russian
      if (from === "ru") {
        return (await ruZh(text)) as T;
      }

      // if input language is Ukrainian
      if (from === "uk") {
        return (await ukZh(text)) as T;
      }

      // if input language is Korean
      if (from === "ko") {
        return (await koZh(text)) as T;
      }

      // if input language is Japanese
      if (from === "ja") {
        return (await jaZh(text)) as T;
      }

      // if input language is Vietnamese
      if (from === "vi") {
        return (await viZh(text)) as T;
      }
    }
  } catch (e: unknown) {
    throw new Error(typeof e === "string" ? e : JSON.stringify(e), { cause: e });
  }

  throw new Error("Transliteration failed: the language pair is not supported");
};
