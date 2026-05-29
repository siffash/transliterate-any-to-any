import { cyrlLanguages, latnLanguages, supportedLanguages } from "languages";
import { CyrlLanguage, Language, LatnLanguage, Text } from "types/languages";
import { jaLatn } from "utils/ja-latn";
import { anyHi } from "utils/any-hi";
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

export const transliterate = async <T extends Text>(
  text: T,
  language: { input: Language; output: Language },
  options: { silent?: boolean; latin_ASCII?: boolean } = { silent: false, latin_ASCII: false }, // TODO: latin_ASCII
): Promise<T | null> => {
  if (!text) {
    if (options.silent) {
      return null;
    } else {
      throw new Error("Text is empty");
    }
  }
  if (!supportedLanguages.includes(language.input)) {
    if (options.silent) {
      return null;
    } else {
      throw new Error(`Unsupported input language: ${language.input}`);
    }
  }
  if (!supportedLanguages.includes(language.output)) {
    if (options.silent) {
      return null;
    } else {
      throw new Error(`Unsupported output language: ${language.output}`);
    }
  }

  try {
    // if OUTPUT language is Vietnamese
    if (language.output === "vi") {
      // if input language is Chinese
      if (language.input === "zh") {
        return (await zhVi(text)) as T;
      }
    }

    // if OUTPUT language is Latin
    else if (latnLanguages.includes(language.output as LatnLanguage)) {
      // if input language is Cyrillic
      if (cyrlLanguages.includes(language.input as CyrlLanguage)) {
        // return cyrlLatn(language.input as CyrlLanguage, text); // TODO
      }

      // if input language is Japanese
      if (language.input === "ja") {
        return (await jaLatn(text)) as T;
      }

      // if input language is Korean
      if (language.input === "ko") {
        return (await koLatn(text)) as T;
      }

      // if input language is Chinese
      if (language.input === "zh") {
        return (await zhLatn(text)) as T;
      }
    }

    // if OUTPUT language is Bulgarian
    else if (language.output === "bg") {
      // if input language is Macedonian
      if (language.input === "mk") {
        return (await mkBg(text)) as T;
      }

      // if input language is Russian
      if (language.input === "ru") {
        return (await ruBg(text)) as T;
      }

      // if input language is Ukrainian
      if (language.input === "uk") {
        return (await ukBg(text)) as T;
      }

      // if input language is Chinese
      if (language.input === "zh") {
        return (await zhBg(text)) as T;
      }
    }

    // if OUTPUT language is Macedonian
    else if (language.output === "mk") {
      // if input language is Bulgarian
      if (language.input === "bg") {
        return (await bgMk(text)) as T;
      }

      // if input language is Russian
      if (language.input === "ru") {
        return (await ruMk(text)) as T;
      }

      // if input language is Ukrainian
      if (language.input === "uk") {
        return (await ukMk(text)) as T;
      }

      // if input language is Chinese
      if (language.input === "zh") {
        return (await zhMk(text)) as T;
      }
    }

    // if OUTPUT language is Russian
    else if (language.output === "ru") {
      // if input language is Bulgarian
      if (language.input === "bg") {
        return (await bgRu(text)) as T;
      }

      // if input language is Macedonian
      if (language.input === "mk") {
        return (await mkRu(text)) as T;
      }

      // if input language is Ukrainian
      if (language.input === "uk") {
        return (await ukRu(text)) as T;
      }

      // if input language is Chinese
      if (language.input === "zh") {
        return (await zhRu(text)) as T;
      }
    }

    // if OUTPUT language is Ukrainian
    else if (language.output === "uk") {
      // if input language is Bulgarian
      if (language.input === "bg") {
        return (await bgUk(text)) as T;
      }

      // if input language is Russian
      if (language.input === "ru") {
        return (await ruUk(text)) as T;
      }

      // if input language is Macedonian
      if (language.input === "mk") {
        return (await mkUk(text)) as T;
      }

      // if input language is Chinese
      if (language.input === "zh") {
        return (await zhUk(text)) as T;
      }
    }

    // if OUTPUT language is Hindi
    else if (language.output === "hi") {
      return (await anyHi(text)) as T;
    }

    // if OUTPUT language is Japanese
    else if (language.output === "ja") {
      // if input language is Korean
      if (language.input === "ko") {
        return (await koJa(text)) as T;
      }

      // if input language is Chinese
      if (language.input === "zh") {
        return (await zhJa(text)) as T;
      }

      // if input language is Arabic
      if (language.input === "ar") {
        return (await arJa(text)) as T;
      }

      // if input language is Azerbaijani
      if (language.input === "az") {
        return (await azJa(text)) as T;
      }

      // if input language is Bulgarian
      if (language.input === "bg") {
        return (await bgJa(text)) as T;
      }

      // if input language is Bosnian
      if (language.input === "bs") {
        return (await bsJa(text)) as T;
      }

      // if input language is Catalan
      if (language.input === "ca") {
        return (await caJa(text)) as T;
      }

      // if input language is Czech
      if (language.input === "cs") {
        return (await csJa(text)) as T;
      }

      // if input language is Danish
      if (language.input === "da") {
        return (await daJa(text)) as T;
      }

      // if input language is German
      if (language.input === "de") {
        return (await deJa(text)) as T;
      }

      // if input language is Greek
      if (language.input === "el") {
        return (await elJa(text)) as T;
      }

      // if input language is English
      if (language.input === "en") {
        return (await enJa(text)) as T;
      }

      // if input language is Spanish
      if (language.input === "es") {
        return (await esJa(text)) as T;
      }

      // if input language is Estonian
      if (language.input === "et") {
        return (await etJa(text)) as T;
      }

      // if input language is Finnish
      if (language.input === "fi") {
        return (await fiJa(text)) as T;
      }

      // if input language is French
      if (language.input === "fr") {
        return (await frJa(text)) as T;
      }

      // if input language is Hebrew
      if (language.input === "he") {
        return (await heJa(text)) as T;
      }

      // if input language is Hindi
      if (language.input === "hi") {
        return (await hiJa(text)) as T;
      }

      // if input language is Croatian
      if (language.input === "hr") {
        return (await hrJa(text)) as T;
      }

      // if input language is Hungarian
      if (language.input === "hu") {
        return (await huJa(text)) as T;
      }

      // if input language is Armenian
      if (language.input === "hy") {
        return (await hyJa(text)) as T;
      }

      // if input language is Indonesian
      if (language.input === "id") {
        return (await idJa(text)) as T;
      }

      // if input language is Icelandic
      if (language.input === "is") {
        return (await isJa(text)) as T;
      }

      // if input language is Italian
      if (language.input === "it") {
        return (await itJa(text)) as T;
      }

      // if input language is Georgian
      if (language.input === "ka") {
        return (await kaJa(text)) as T;
      }

      // if input language is Kazakh
      if (language.input === "kk") {
        return (await kkJa(text)) as T;
      }

      // if input language is Luxembourgish
      if (language.input === "lb") {
        return (await lbJa(text)) as T;
      }

      // if input language is Lithuanian
      if (language.input === "lt") {
        return (await ltJa(text)) as T;
      }

      // if input language is Latvian
      if (language.input === "lv") {
        return (await lvJa(text)) as T;
      }

      // if input language is Macedonian
      if (language.input === "mk") {
        return (await mkJa(text)) as T;
      }

      // if input language is Maltese
      if (language.input === "mt") {
        return (await mtJa(text)) as T;
      }

      // if input language is Dutch
      if (language.input === "nl") {
        return (await nlJa(text)) as T;
      }

      // if input language is Norwegian
      if (language.input === "no") {
        return (await noJa(text)) as T;
      }

      // if input language is Polish
      if (language.input === "pl") {
        return (await plJa(text)) as T;
      }

      // if input language is Portuguese
      if (language.input === "pt") {
        return (await ptJa(text)) as T;
      }

      // if input language is Romanian
      if (language.input === "ro") {
        return (await roJa(text)) as T;
      }

      // if input language is Russian
      if (language.input === "ru") {
        return (await ruJa(text)) as T;
      }

      // if input language is Slovak
      if (language.input === "sk") {
        return (await skJa(text)) as T;
      }

      // if input language is Slovenian
      if (language.input === "sl") {
        return (await slJa(text)) as T;
      }

      // if input language is Albanian
      if (language.input === "sq") {
        return (await sqJa(text)) as T;
      }

      // if input language is Serbian
      if (language.input === "sr") {
        return (await srJa(text)) as T;
      }

      // if input language is Swedish
      if (language.input === "sv") {
        return (await svJa(text)) as T;
      }

      // if input language is Turkish
      if (language.input === "tr") {
        return (await trJa(text)) as T;
      }

      // if input language is Ukrainian
      if (language.input === "uk") {
        return (await ukJa(text)) as T;
      }

      // if input language is Vietnamese
      if (language.input === "vi") {
        return (await viJa(text)) as T;
      }
    }

    // if OUTPUT language is Korean
    else if (language.output === "ko") {
      // if input language is Japanese
      if (language.input === "ja") {
        return (await jaKo(text)) as T;
      }

      // if input language is Chinese
      if (language.input === "zh") {
        return (await zhKo(text)) as T;
      }

      // if input language is Arabic
      if (language.input === "ar") {
        return (await arKo(text)) as T;
      }

      // if input language is Azerbaijani
      if (language.input === "az") {
        return (await azKo(text)) as T;
      }

      // if input language is Bulgarian
      if (language.input === "bg") {
        return (await bgKo(text)) as T;
      }

      // if input language is Bosnian
      if (language.input === "bs") {
        return (await bsKo(text)) as T;
      }

      // if input language is Catalan
      if (language.input === "ca") {
        return (await caKo(text)) as T;
      }

      // if input language is Czech
      if (language.input === "cs") {
        return (await csKo(text)) as T;
      }

      // if input language is Danish
      if (language.input === "da") {
        return (await daKo(text)) as T;
      }

      // if input language is German
      if (language.input === "de") {
        return (await deKo(text)) as T;
      }

      // if input language is Greek
      if (language.input === "el") {
        return (await elKo(text)) as T;
      }

      // if input language is English
      if (language.input === "en") {
        return (await enKo(text)) as T;
      }

      // if input language is Spanish
      if (language.input === "es") {
        return (await esKo(text)) as T;
      }

      // if input language is Estonian
      if (language.input === "et") {
        return (await etKo(text)) as T;
      }

      // if input language is Finnish
      if (language.input === "fi") {
        return (await fiKo(text)) as T;
      }

      // if input language is French
      if (language.input === "fr") {
        return (await frKo(text)) as T;
      }

      // if input language is Hebrew
      if (language.input === "he") {
        return (await heKo(text)) as T;
      }

      // if input language is Hindi
      if (language.input === "hi") {
        return (await hiKo(text)) as T;
      }

      // if input language is Croatian
      if (language.input === "hr") {
        return (await hrKo(text)) as T;
      }

      // if input language is Hungarian
      if (language.input === "hu") {
        return (await huKo(text)) as T;
      }

      // if input language is Armenian
      if (language.input === "hy") {
        return (await hyKo(text)) as T;
      }

      // if input language is Indonesian
      if (language.input === "id") {
        return (await idKo(text)) as T;
      }

      // if input language is Icelandic
      if (language.input === "is") {
        return (await isKo(text)) as T;
      }

      // if input language is Italian
      if (language.input === "it") {
        return (await itKo(text)) as T;
      }

      // if input language is Georgian
      if (language.input === "ka") {
        return (await kaKo(text)) as T;
      }

      // if input language is Kazakh
      if (language.input === "kk") {
        return (await kkKo(text)) as T;
      }

      // if input language is Luxembourgish
      if (language.input === "lb") {
        return (await lbKo(text)) as T;
      }

      // if input language is Lithuanian
      if (language.input === "lt") {
        return (await ltKo(text)) as T;
      }

      // if input language is Latvian
      if (language.input === "lv") {
        return (await lvKo(text)) as T;
      }

      // if input language is Macedonian
      if (language.input === "mk") {
        return (await mkKo(text)) as T;
      }

      // if input language is Maltese
      if (language.input === "mt") {
        return (await mtKo(text)) as T;
      }

      // if input language is Dutch
      if (language.input === "nl") {
        return (await nlKo(text)) as T;
      }

      // if input language is Norwegian
      if (language.input === "no") {
        return (await noKo(text)) as T;
      }

      // if input language is Polish
      if (language.input === "pl") {
        return (await plKo(text)) as T;
      }

      // if input language is Portuguese
      if (language.input === "pt") {
        return (await ptKo(text)) as T;
      }

      // if input language is Romanian
      if (language.input === "ro") {
        return (await roKo(text)) as T;
      }

      // if input language is Russian
      if (language.input === "ru") {
        return (await ruKo(text)) as T;
      }

      // if input language is Slovak
      if (language.input === "sk") {
        return (await skKo(text)) as T;
      }

      // if input language is Slovenian
      if (language.input === "sl") {
        return (await slKo(text)) as T;
      }

      // if input language is Albanian
      if (language.input === "sq") {
        return (await sqKo(text)) as T;
      }

      // if input language is Serbian
      if (language.input === "sr") {
        return (await srKo(text)) as T;
      }

      // if input language is Swedish
      if (language.input === "sv") {
        return (await svKo(text)) as T;
      }

      // if input language is Turkish
      if (language.input === "tr") {
        return (await trKo(text)) as T;
      }

      // if input language is Ukrainian
      if (language.input === "uk") {
        return (await ukKo(text)) as T;
      }

      // if input language is Vietnamese
      if (language.input === "vi") {
        return (await viKo(text)) as T;
      }
    }

    // if OUTPUT language is Chinese
    else if (language.output === "zh") {
      // if input language is Azerbaijani
      if (language.input === "az") {
        return (await azZh(text)) as T;
      }

      // if input language is Arabic
      if (language.input === "ar") {
        return (await arZh(text)) as T;
      }

      // if input language is Hindi
      if (language.input === "hi") {
        return (await hiZh(text)) as T;
      }

      // if input language is Armenian
      if (language.input === "hy") {
        return (await hyZh(text)) as T;
      }

      // if input language is Georgian
      if (language.input === "ka") {
        return (await kaZh(text)) as T;
      }

      // if input language is Greek
      if (language.input === "el") {
        return (await elZh(text)) as T;
      }

      // if input language is Hebrew
      if (language.input === "he") {
        return (await heZh(text)) as T;
      }

      // if input language is English
      if (language.input === "en") {
        return (await enZh(text)) as T;
      }

      // if input language is Catalan
      if (language.input === "ca") {
        return (await caZh(text)) as T;
      }

      // if input language is Czech
      if (language.input === "cs") {
        return (await csZh(text)) as T;
      }

      // if input language is Danish
      if (language.input === "da") {
        return (await daZh(text)) as T;
      }

      // if input language is German
      if (language.input === "de") {
        return (await deZh(text)) as T;
      }

      // if input language is Spanish
      if (language.input === "es") {
        return (await esZh(text)) as T;
      }

      // if input language is Estonian
      if (language.input === "et") {
        return (await etZh(text)) as T;
      }

      // if input language is Finnish
      if (language.input === "fi") {
        return (await fiZh(text)) as T;
      }

      // if input language is French
      if (language.input === "fr") {
        return (await frZh(text)) as T;
      }

      // if input language is Croatian
      if (language.input === "hr") {
        return (await hrZh(text)) as T;
      }

      // if input language is Hungarian
      if (language.input === "hu") {
        return (await huZh(text)) as T;
      }

      // if input language is Indonesian
      if (language.input === "id") {
        return (await idZh(text)) as T;
      }

      // if input language is Icelandic
      if (language.input === "is") {
        return (await isZh(text)) as T;
      }

      // if input language is Italian
      if (language.input === "it") {
        return (await itZh(text)) as T;
      }

      // if input language is Kazakh
      if (language.input === "kk") {
        return (await kkZh(text)) as T;
      }

      // if input language is Luxembourgish
      if (language.input === "lb") {
        return (await lbZh(text)) as T;
      }

      // if input language is Lithuanian
      if (language.input === "lt") {
        return (await ltZh(text)) as T;
      }

      // if input language is Latvian
      if (language.input === "lv") {
        return (await lvZh(text)) as T;
      }

      // if input language is Maltese
      if (language.input === "mt") {
        return (await mtZh(text)) as T;
      }

      // if input language is Dutch
      if (language.input === "nl") {
        return (await nlZh(text)) as T;
      }

      // if input language is Norwegian
      if (language.input === "no") {
        return (await noZh(text)) as T;
      }

      // if input language is Polish
      if (language.input === "pl") {
        return (await plZh(text)) as T;
      }

      // if input language is Portuguese
      if (language.input === "pt") {
        return (await ptZh(text)) as T;
      }

      // if input language is Romanian
      if (language.input === "ro") {
        return (await roZh(text)) as T;
      }

      // if input language is Slovak
      if (language.input === "sk") {
        return (await skZh(text)) as T;
      }

      // if input language is Slovenian
      if (language.input === "sl") {
        return (await slZh(text)) as T;
      }

      // if input language is Albanian
      if (language.input === "sq") {
        return (await sqZh(text)) as T;
      }

      // if input language is Serbian
      if (language.input === "sr") {
        return (await srZh(text)) as T;
      }

      // if input language is Swedish
      if (language.input === "sv") {
        return (await svZh(text)) as T;
      }

      // if input language is Turkish
      if (language.input === "tr") {
        return (await trZh(text)) as T;
      }

      // if input language is Bosnian
      if (language.input === "bs") {
        return (await bsZh(text)) as T;
      }

      // if input language is Bulgarian
      if (language.input === "bg") {
        return (await bgZh(text)) as T;
      }

      // if input language is Macedonian
      if (language.input === "mk") {
        return (await mkZh(text)) as T;
      }

      // if input language is Russian
      if (language.input === "ru") {
        return (await ruZh(text)) as T;
      }

      // if input language is Ukrainian
      if (language.input === "uk") {
        return (await ukZh(text)) as T;
      }

      // if input language is Korean
      if (language.input === "ko") {
        return (await koZh(text)) as T;
      }

      // if input language is Japanese
      if (language.input === "ja") {
        return (await jaZh(text)) as T;
      }

      // if input language is Vietnamese
      if (language.input === "vi") {
        return (await viZh(text)) as T;
      }
    }
  } catch (e: unknown) {
    if (options.silent) {
      return null;
    } else {
      throw new Error(typeof e === "string" ? e : JSON.stringify(e), { cause: e });
    }
  }

  if (options.silent) {
    return null;
  } else {
    throw new Error("Transliteration failed");
  }
};
