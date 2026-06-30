import { supportedLanguages } from "helpers/constants";
import { Options, Text } from "types";

export const transliterate = async <T extends Text>(text: T, { from, to }: Options): Promise<T> => {
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
      // if OUTPUT language is Chinese
      case "zh":
        switch (from) {
          case "az": {
            const { azZh } = await import("converters/az-zh");
            return (await azZh(text)) as T;
          }
          case "ar": {
            const { arZh } = await import("converters/ar-zh");
            return (await arZh(text)) as T;
          }
          case "hi": {
            const { hiZh } = await import("converters/hi-zh");
            return (await hiZh(text)) as T;
          }
          case "hy": {
            const { hyZh } = await import("converters/hy-zh");
            return (await hyZh(text)) as T;
          }
          case "ka": {
            const { kaZh } = await import("converters/ka-zh");
            return (await kaZh(text)) as T;
          }
          case "el": {
            const { elZh } = await import("converters/el-zh");
            return (await elZh(text)) as T;
          }
          case "he": {
            const { heZh } = await import("converters/he-zh");
            return (await heZh(text)) as T;
          }
          case "en": {
            const { enZh } = await import("converters/en-zh");
            return (await enZh(text)) as T;
          }
          case "ca": {
            const { caZh } = await import("converters/ca-zh");
            return (await caZh(text)) as T;
          }
          case "cs": {
            const { csZh } = await import("converters/cs-zh");
            return (await csZh(text)) as T;
          }
          case "da": {
            const { daZh } = await import("converters/da-zh");
            return (await daZh(text)) as T;
          }
          case "de": {
            const { deZh } = await import("converters/de-zh");
            return (await deZh(text)) as T;
          }
          case "es": {
            const { esZh } = await import("converters/es-zh");
            return (await esZh(text)) as T;
          }
          case "et": {
            const { etZh } = await import("converters/et-zh");
            return (await etZh(text)) as T;
          }
          case "fi": {
            const { fiZh } = await import("converters/fi-zh");
            return (await fiZh(text)) as T;
          }
          case "fr": {
            const { frZh } = await import("converters/fr-zh");
            return (await frZh(text)) as T;
          }
          case "hr": {
            const { hrZh } = await import("converters/hr-zh");
            return (await hrZh(text)) as T;
          }
          case "hu": {
            const { huZh } = await import("converters/hu-zh");
            return (await huZh(text)) as T;
          }
          case "id": {
            const { idZh } = await import("converters/id-zh");
            return (await idZh(text)) as T;
          }
          case "is": {
            const { isZh } = await import("converters/is-zh");
            return (await isZh(text)) as T;
          }
          case "it": {
            const { itZh } = await import("converters/it-zh");
            return (await itZh(text)) as T;
          }
          case "kk": {
            const { kkZh } = await import("converters/kk-zh");
            return (await kkZh(text)) as T;
          }
          case "lb": {
            const { lbZh } = await import("converters/lb-zh");
            return (await lbZh(text)) as T;
          }
          case "lt": {
            const { ltZh } = await import("converters/lt-zh");
            return (await ltZh(text)) as T;
          }
          case "lv": {
            const { lvZh } = await import("converters/lv-zh");
            return (await lvZh(text)) as T;
          }
          case "mt": {
            const { mtZh } = await import("converters/mt-zh");
            return (await mtZh(text)) as T;
          }
          case "nl": {
            const { nlZh } = await import("converters/nl-zh");
            return (await nlZh(text)) as T;
          }
          case "no": {
            const { noZh } = await import("converters/no-zh");
            return (await noZh(text)) as T;
          }
          case "pl": {
            const { plZh } = await import("converters/pl-zh");
            return (await plZh(text)) as T;
          }
          case "pt": {
            const { ptZh } = await import("converters/pt-zh");
            return (await ptZh(text)) as T;
          }
          case "ro": {
            const { roZh } = await import("converters/ro-zh");
            return (await roZh(text)) as T;
          }
          case "sk": {
            const { skZh } = await import("converters/sk-zh");
            return (await skZh(text)) as T;
          }
          case "sl": {
            const { slZh } = await import("converters/sl-zh");
            return (await slZh(text)) as T;
          }
          case "sq": {
            const { sqZh } = await import("converters/sq-zh");
            return (await sqZh(text)) as T;
          }
          case "sr": {
            const { srZh } = await import("converters/sr-zh");
            return (await srZh(text)) as T;
          }
          case "sv": {
            const { svZh } = await import("converters/sv-zh");
            return (await svZh(text)) as T;
          }
          case "tr": {
            const { trZh } = await import("converters/tr-zh");
            return (await trZh(text)) as T;
          }
          case "bs": {
            const { bsZh } = await import("converters/bs-zh");
            return (await bsZh(text)) as T;
          }
          case "bg": {
            const { bgZh } = await import("converters/bg-zh");
            return (await bgZh(text)) as T;
          }
          case "mk": {
            const { mkZh } = await import("converters/mk-zh");
            return (await mkZh(text)) as T;
          }
          case "ru": {
            const { ruZh } = await import("converters/ru-zh");
            return (await ruZh(text)) as T;
          }
          case "uk": {
            const { ukZh } = await import("converters/uk-zh");
            return (await ukZh(text)) as T;
          }
          case "ko": {
            const { koZh } = await import("converters/ko-zh");
            return (await koZh(text)) as T;
          }
          case "ja": {
            const { jaZh } = await import("converters/ja-zh");
            return (await jaZh(text)) as T;
          }
          case "vi": {
            const { viZh } = await import("converters/vi-zh");
            return (await viZh(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Japanese
      case "ja":
        switch (from) {
          case "ko": {
            const { koJa } = await import("converters/ko-ja");
            return (await koJa(text)) as T;
          }
          case "zh": {
            const { zhJa } = await import("converters/zh-ja");
            return (await zhJa(text)) as T;
          }
          case "ar": {
            const { arJa } = await import("converters/ar-ja");
            return (await arJa(text)) as T;
          }
          case "az": {
            const { azJa } = await import("converters/az-ja");
            return (await azJa(text)) as T;
          }
          case "bg": {
            const { bgJa } = await import("converters/bg-ja");
            return (await bgJa(text)) as T;
          }
          case "bs": {
            const { bsJa } = await import("converters/bs-ja");
            return (await bsJa(text)) as T;
          }
          case "ca": {
            const { caJa } = await import("converters/ca-ja");
            return (await caJa(text)) as T;
          }
          case "cs": {
            const { csJa } = await import("converters/cs-ja");
            return (await csJa(text)) as T;
          }
          case "da": {
            const { daJa } = await import("converters/da-ja");
            return (await daJa(text)) as T;
          }
          case "de": {
            const { deJa } = await import("converters/de-ja");
            return (await deJa(text)) as T;
          }
          case "el": {
            const { elJa } = await import("converters/el-ja");
            return (await elJa(text)) as T;
          }
          case "en": {
            const { enJa } = await import("converters/en-ja");
            return (await enJa(text)) as T;
          }
          case "es": {
            const { esJa } = await import("converters/es-ja");
            return (await esJa(text)) as T;
          }
          case "et": {
            const { etJa } = await import("converters/et-ja");
            return (await etJa(text)) as T;
          }
          case "fi": {
            const { fiJa } = await import("converters/fi-ja");
            return (await fiJa(text)) as T;
          }
          case "fr": {
            const { frJa } = await import("converters/fr-ja");
            return (await frJa(text)) as T;
          }
          case "he": {
            const { heJa } = await import("converters/he-ja");
            return (await heJa(text)) as T;
          }
          case "hi": {
            const { hiJa } = await import("converters/hi-ja");
            return (await hiJa(text)) as T;
          }
          case "hr": {
            const { hrJa } = await import("converters/hr-ja");
            return (await hrJa(text)) as T;
          }
          case "hu": {
            const { huJa } = await import("converters/hu-ja");
            return (await huJa(text)) as T;
          }
          case "hy": {
            const { hyJa } = await import("converters/hy-ja");
            return (await hyJa(text)) as T;
          }
          case "id": {
            const { idJa } = await import("converters/id-ja");
            return (await idJa(text)) as T;
          }
          case "is": {
            const { isJa } = await import("converters/is-ja");
            return (await isJa(text)) as T;
          }
          case "it": {
            const { itJa } = await import("converters/it-ja");
            return (await itJa(text)) as T;
          }
          case "ka": {
            const { kaJa } = await import("converters/ka-ja");
            return (await kaJa(text)) as T;
          }
          case "kk": {
            const { kkJa } = await import("converters/kk-ja");
            return (await kkJa(text)) as T;
          }
          case "lb": {
            const { lbJa } = await import("converters/lb-ja");
            return (await lbJa(text)) as T;
          }
          case "lt": {
            const { ltJa } = await import("converters/lt-ja");
            return (await ltJa(text)) as T;
          }
          case "lv": {
            const { lvJa } = await import("converters/lv-ja");
            return (await lvJa(text)) as T;
          }
          case "mk": {
            const { mkJa } = await import("converters/mk-ja");
            return (await mkJa(text)) as T;
          }
          case "mt": {
            const { mtJa } = await import("converters/mt-ja");
            return (await mtJa(text)) as T;
          }
          case "nl": {
            const { nlJa } = await import("converters/nl-ja");
            return (await nlJa(text)) as T;
          }
          case "no": {
            const { noJa } = await import("converters/no-ja");
            return (await noJa(text)) as T;
          }
          case "pl": {
            const { plJa } = await import("converters/pl-ja");
            return (await plJa(text)) as T;
          }
          case "pt": {
            const { ptJa } = await import("converters/pt-ja");
            return (await ptJa(text)) as T;
          }
          case "ro": {
            const { roJa } = await import("converters/ro-ja");
            return (await roJa(text)) as T;
          }
          case "ru": {
            const { ruJa } = await import("converters/ru-ja");
            return (await ruJa(text)) as T;
          }
          case "sk": {
            const { skJa } = await import("converters/sk-ja");
            return (await skJa(text)) as T;
          }
          case "sl": {
            const { slJa } = await import("converters/sl-ja");
            return (await slJa(text)) as T;
          }
          case "sq": {
            const { sqJa } = await import("converters/sq-ja");
            return (await sqJa(text)) as T;
          }
          case "sr": {
            const { srJa } = await import("converters/sr-ja");
            return (await srJa(text)) as T;
          }
          case "sv": {
            const { svJa } = await import("converters/sv-ja");
            return (await svJa(text)) as T;
          }
          case "tr": {
            const { trJa } = await import("converters/tr-ja");
            return (await trJa(text)) as T;
          }
          case "uk": {
            const { ukJa } = await import("converters/uk-ja");
            return (await ukJa(text)) as T;
          }
          case "vi": {
            const { viJa } = await import("converters/vi-ja");
            return (await viJa(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Korean
      case "ko":
        switch (from) {
          case "ja": {
            const { jaKo } = await import("converters/ja-ko");
            return (await jaKo(text)) as T;
          }
          case "zh": {
            const { zhKo } = await import("converters/zh-ko");
            return (await zhKo(text)) as T;
          }
          case "ar": {
            const { arKo } = await import("converters/ar-ko");
            return (await arKo(text)) as T;
          }
          case "az": {
            const { azKo } = await import("converters/az-ko");
            return (await azKo(text)) as T;
          }
          case "bg": {
            const { bgKo } = await import("converters/bg-ko");
            return (await bgKo(text)) as T;
          }
          case "bs": {
            const { bsKo } = await import("converters/bs-ko");
            return (await bsKo(text)) as T;
          }
          case "ca": {
            const { caKo } = await import("converters/ca-ko");
            return (await caKo(text)) as T;
          }
          case "cs": {
            const { csKo } = await import("converters/cs-ko");
            return (await csKo(text)) as T;
          }
          case "da": {
            const { daKo } = await import("converters/da-ko");
            return (await daKo(text)) as T;
          }
          case "de": {
            const { deKo } = await import("converters/de-ko");
            return (await deKo(text)) as T;
          }
          case "el": {
            const { elKo } = await import("converters/el-ko");
            return (await elKo(text)) as T;
          }
          case "en": {
            const { enKo } = await import("converters/en-ko");
            return (await enKo(text)) as T;
          }
          case "es": {
            const { esKo } = await import("converters/es-ko");
            return (await esKo(text)) as T;
          }
          case "et": {
            const { etKo } = await import("converters/et-ko");
            return (await etKo(text)) as T;
          }
          case "fi": {
            const { fiKo } = await import("converters/fi-ko");
            return (await fiKo(text)) as T;
          }
          case "fr": {
            const { frKo } = await import("converters/fr-ko");
            return (await frKo(text)) as T;
          }
          case "he": {
            const { heKo } = await import("converters/he-ko");
            return (await heKo(text)) as T;
          }
          case "hi": {
            const { hiKo } = await import("converters/hi-ko");
            return (await hiKo(text)) as T;
          }
          case "hr": {
            const { hrKo } = await import("converters/hr-ko");
            return (await hrKo(text)) as T;
          }
          case "hu": {
            const { huKo } = await import("converters/hu-ko");
            return (await huKo(text)) as T;
          }
          case "hy": {
            const { hyKo } = await import("converters/hy-ko");
            return (await hyKo(text)) as T;
          }
          case "id": {
            const { idKo } = await import("converters/id-ko");
            return (await idKo(text)) as T;
          }
          case "is": {
            const { isKo } = await import("converters/is-ko");
            return (await isKo(text)) as T;
          }
          case "it": {
            const { itKo } = await import("converters/it-ko");
            return (await itKo(text)) as T;
          }
          case "ka": {
            const { kaKo } = await import("converters/ka-ko");
            return (await kaKo(text)) as T;
          }
          case "kk": {
            const { kkKo } = await import("converters/kk-ko");
            return (await kkKo(text)) as T;
          }
          case "lb": {
            const { lbKo } = await import("converters/lb-ko");
            return (await lbKo(text)) as T;
          }
          case "lt": {
            const { ltKo } = await import("converters/lt-ko");
            return (await ltKo(text)) as T;
          }
          case "lv": {
            const { lvKo } = await import("converters/lv-ko");
            return (await lvKo(text)) as T;
          }
          case "mk": {
            const { mkKo } = await import("converters/mk-ko");
            return (await mkKo(text)) as T;
          }
          case "mt": {
            const { mtKo } = await import("converters/mt-ko");
            return (await mtKo(text)) as T;
          }
          case "nl": {
            const { nlKo } = await import("converters/nl-ko");
            return (await nlKo(text)) as T;
          }
          case "no": {
            const { noKo } = await import("converters/no-ko");
            return (await noKo(text)) as T;
          }
          case "pl": {
            const { plKo } = await import("converters/pl-ko");
            return (await plKo(text)) as T;
          }
          case "pt": {
            const { ptKo } = await import("converters/pt-ko");
            return (await ptKo(text)) as T;
          }
          case "ro": {
            const { roKo } = await import("converters/ro-ko");
            return (await roKo(text)) as T;
          }
          case "ru": {
            const { ruKo } = await import("converters/ru-ko");
            return (await ruKo(text)) as T;
          }
          case "sk": {
            const { skKo } = await import("converters/sk-ko");
            return (await skKo(text)) as T;
          }
          case "sl": {
            const { slKo } = await import("converters/sl-ko");
            return (await slKo(text)) as T;
          }
          case "sq": {
            const { sqKo } = await import("converters/sq-ko");
            return (await sqKo(text)) as T;
          }
          case "sr": {
            const { srKo } = await import("converters/sr-ko");
            return (await srKo(text)) as T;
          }
          case "sv": {
            const { svKo } = await import("converters/sv-ko");
            return (await svKo(text)) as T;
          }
          case "tr": {
            const { trKo } = await import("converters/tr-ko");
            return (await trKo(text)) as T;
          }
          case "uk": {
            const { ukKo } = await import("converters/uk-ko");
            return (await ukKo(text)) as T;
          }
          case "vi": {
            const { viKo } = await import("converters/vi-ko");
            return (await viKo(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Hindi
      case "hi":
        switch (from) {
          case "ar": {
            const { arHi } = await import("converters/ar-hi");
            return (await arHi(text)) as T;
          }
          case "az": {
            const { azHi } = await import("converters/az-hi");
            return (await azHi(text)) as T;
          }
          case "bg": {
            const { bgHi } = await import("converters/bg-hi");
            return (await bgHi(text)) as T;
          }
          case "bs": {
            const { bsHi } = await import("converters/bs-hi");
            return (await bsHi(text)) as T;
          }
          case "ca": {
            const { caHi } = await import("converters/ca-hi");
            return (await caHi(text)) as T;
          }
          case "cs": {
            const { csHi } = await import("converters/cs-hi");
            return (await csHi(text)) as T;
          }
          case "da": {
            const { daHi } = await import("converters/da-hi");
            return (await daHi(text)) as T;
          }
          case "de": {
            const { deHi } = await import("converters/de-hi");
            return (await deHi(text)) as T;
          }
          case "el": {
            const { elHi } = await import("converters/el-hi");
            return (await elHi(text)) as T;
          }
          case "en": {
            const { enHi } = await import("converters/en-hi");
            return (await enHi(text)) as T;
          }
          case "es": {
            const { esHi } = await import("converters/es-hi");
            return (await esHi(text)) as T;
          }
          case "et": {
            const { etHi } = await import("converters/et-hi");
            return (await etHi(text)) as T;
          }
          case "fi": {
            const { fiHi } = await import("converters/fi-hi");
            return (await fiHi(text)) as T;
          }
          case "fr": {
            const { frHi } = await import("converters/fr-hi");
            return (await frHi(text)) as T;
          }
          case "he": {
            const { heHi } = await import("converters/he-hi");
            return (await heHi(text)) as T;
          }
          case "hr": {
            const { hrHi } = await import("converters/hr-hi");
            return (await hrHi(text)) as T;
          }
          case "hu": {
            const { huHi } = await import("converters/hu-hi");
            return (await huHi(text)) as T;
          }
          case "hy": {
            const { hyHi } = await import("converters/hy-hi");
            return (await hyHi(text)) as T;
          }
          case "id": {
            const { idHi } = await import("converters/id-hi");
            return (await idHi(text)) as T;
          }
          case "is": {
            const { isHi } = await import("converters/is-hi");
            return (await isHi(text)) as T;
          }
          case "it": {
            const { itHi } = await import("converters/it-hi");
            return (await itHi(text)) as T;
          }
          case "ja": {
            const { jaHi } = await import("converters/ja-hi");
            return (await jaHi(text)) as T;
          }
          case "ka": {
            const { kaHi } = await import("converters/ka-hi");
            return (await kaHi(text)) as T;
          }
          case "kk": {
            const { kkHi } = await import("converters/kk-hi");
            return (await kkHi(text)) as T;
          }
          case "ko": {
            const { koHi } = await import("converters/ko-hi");
            return (await koHi(text)) as T;
          }
          case "lb": {
            const { lbHi } = await import("converters/lb-hi");
            return (await lbHi(text)) as T;
          }
          case "lt": {
            const { ltHi } = await import("converters/lt-hi");
            return (await ltHi(text)) as T;
          }
          case "lv": {
            const { lvHi } = await import("converters/lv-hi");
            return (await lvHi(text)) as T;
          }
          case "mk": {
            const { mkHi } = await import("converters/mk-hi");
            return (await mkHi(text)) as T;
          }
          case "mt": {
            const { mtHi } = await import("converters/mt-hi");
            return (await mtHi(text)) as T;
          }
          case "nl": {
            const { nlHi } = await import("converters/nl-hi");
            return (await nlHi(text)) as T;
          }
          case "no": {
            const { noHi } = await import("converters/no-hi");
            return (await noHi(text)) as T;
          }
          case "pl": {
            const { plHi } = await import("converters/pl-hi");
            return (await plHi(text)) as T;
          }
          case "pt": {
            const { ptHi } = await import("converters/pt-hi");
            return (await ptHi(text)) as T;
          }
          case "ro": {
            const { roHi } = await import("converters/ro-hi");
            return (await roHi(text)) as T;
          }
          case "ru": {
            const { ruHi } = await import("converters/ru-hi");
            return (await ruHi(text)) as T;
          }
          case "sk": {
            const { skHi } = await import("converters/sk-hi");
            return (await skHi(text)) as T;
          }
          case "sl": {
            const { slHi } = await import("converters/sl-hi");
            return (await slHi(text)) as T;
          }
          case "sq": {
            const { sqHi } = await import("converters/sq-hi");
            return (await sqHi(text)) as T;
          }
          case "sr": {
            const { srHi } = await import("converters/sr-hi");
            return (await srHi(text)) as T;
          }
          case "sv": {
            const { svHi } = await import("converters/sv-hi");
            return (await svHi(text)) as T;
          }
          case "tr": {
            const { trHi } = await import("converters/tr-hi");
            return (await trHi(text)) as T;
          }
          case "uk": {
            const { ukHi } = await import("converters/uk-hi");
            return (await ukHi(text)) as T;
          }
          case "vi": {
            const { viHi } = await import("converters/vi-hi");
            return (await viHi(text)) as T;
          }
          case "zh": {
            const { zhHi } = await import("converters/zh-hi");
            return (await zhHi(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Arabic
      case "ar":
        switch (from) {
          case "az": {
            const { azAr } = await import("converters/az-ar");
            return (await azAr(text)) as T;
          }
          case "bg": {
            const { bgAr } = await import("converters/bg-ar");
            return (await bgAr(text)) as T;
          }
          case "bs": {
            const { bsAr } = await import("converters/bs-ar");
            return (await bsAr(text)) as T;
          }
          case "ca": {
            const { caAr } = await import("converters/ca-ar");
            return (await caAr(text)) as T;
          }
          case "cs": {
            const { csAr } = await import("converters/cs-ar");
            return (await csAr(text)) as T;
          }
          case "da": {
            const { daAr } = await import("converters/da-ar");
            return (await daAr(text)) as T;
          }
          case "de": {
            const { deAr } = await import("converters/de-ar");
            return (await deAr(text)) as T;
          }
          case "el": {
            const { elAr } = await import("converters/el-ar");
            return (await elAr(text)) as T;
          }
          case "en": {
            const { enAr } = await import("converters/en-ar");
            return (await enAr(text)) as T;
          }
          case "es": {
            const { esAr } = await import("converters/es-ar");
            return (await esAr(text)) as T;
          }
          case "et": {
            const { etAr } = await import("converters/et-ar");
            return (await etAr(text)) as T;
          }
          case "fi": {
            const { fiAr } = await import("converters/fi-ar");
            return (await fiAr(text)) as T;
          }
          case "fr": {
            const { frAr } = await import("converters/fr-ar");
            return (await frAr(text)) as T;
          }
          case "he": {
            const { heAr } = await import("converters/he-ar");
            return (await heAr(text)) as T;
          }
          case "hi": {
            const { hiAr } = await import("converters/hi-ar");
            return (await hiAr(text)) as T;
          }
          case "hr": {
            const { hrAr } = await import("converters/hr-ar");
            return (await hrAr(text)) as T;
          }
          case "hu": {
            const { huAr } = await import("converters/hu-ar");
            return (await huAr(text)) as T;
          }
          case "hy": {
            const { hyAr } = await import("converters/hy-ar");
            return (await hyAr(text)) as T;
          }
          case "id": {
            const { idAr } = await import("converters/id-ar");
            return (await idAr(text)) as T;
          }
          case "is": {
            const { isAr } = await import("converters/is-ar");
            return (await isAr(text)) as T;
          }
          case "it": {
            const { itAr } = await import("converters/it-ar");
            return (await itAr(text)) as T;
          }
          case "ja": {
            const { jaAr } = await import("converters/ja-ar");
            return (await jaAr(text)) as T;
          }
          case "ka": {
            const { kaAr } = await import("converters/ka-ar");
            return (await kaAr(text)) as T;
          }
          case "kk": {
            const { kkAr } = await import("converters/kk-ar");
            return (await kkAr(text)) as T;
          }
          case "ko": {
            const { koAr } = await import("converters/ko-ar");
            return (await koAr(text)) as T;
          }
          case "lb": {
            const { lbAr } = await import("converters/lb-ar");
            return (await lbAr(text)) as T;
          }
          case "lt": {
            const { ltAr } = await import("converters/lt-ar");
            return (await ltAr(text)) as T;
          }
          case "lv": {
            const { lvAr } = await import("converters/lv-ar");
            return (await lvAr(text)) as T;
          }
          case "mk": {
            const { mkAr } = await import("converters/mk-ar");
            return (await mkAr(text)) as T;
          }
          case "mt": {
            const { mtAr } = await import("converters/mt-ar");
            return (await mtAr(text)) as T;
          }
          case "nl": {
            const { nlAr } = await import("converters/nl-ar");
            return (await nlAr(text)) as T;
          }
          case "no": {
            const { noAr } = await import("converters/no-ar");
            return (await noAr(text)) as T;
          }
          case "pl": {
            const { plAr } = await import("converters/pl-ar");
            return (await plAr(text)) as T;
          }
          case "pt": {
            const { ptAr } = await import("converters/pt-ar");
            return (await ptAr(text)) as T;
          }
          case "ro": {
            const { roAr } = await import("converters/ro-ar");
            return (await roAr(text)) as T;
          }
          case "ru": {
            const { ruAr } = await import("converters/ru-ar");
            return (await ruAr(text)) as T;
          }
          case "sk": {
            const { skAr } = await import("converters/sk-ar");
            return (await skAr(text)) as T;
          }
          case "sl": {
            const { slAr } = await import("converters/sl-ar");
            return (await slAr(text)) as T;
          }
          case "sq": {
            const { sqAr } = await import("converters/sq-ar");
            return (await sqAr(text)) as T;
          }
          case "sr": {
            const { srAr } = await import("converters/sr-ar");
            return (await srAr(text)) as T;
          }
          case "sv": {
            const { svAr } = await import("converters/sv-ar");
            return (await svAr(text)) as T;
          }
          case "tr": {
            const { trAr } = await import("converters/tr-ar");
            return (await trAr(text)) as T;
          }
          case "uk": {
            const { ukAr } = await import("converters/uk-ar");
            return (await ukAr(text)) as T;
          }
          case "vi": {
            const { viAr } = await import("converters/vi-ar");
            return (await viAr(text)) as T;
          }
          case "zh": {
            const { zhAr } = await import("converters/zh-ar");
            return (await zhAr(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Hebrew
      case "he":
        switch (from) {
          case "az": {
            const { azHe } = await import("converters/az-he");
            return (await azHe(text)) as T;
          }
          case "bg": {
            const { bgHe } = await import("converters/bg-he");
            return (await bgHe(text)) as T;
          }
          case "bs": {
            const { bsHe } = await import("converters/bs-he");
            return (await bsHe(text)) as T;
          }
          case "ca": {
            const { caHe } = await import("converters/ca-he");
            return (await caHe(text)) as T;
          }
          case "cs": {
            const { csHe } = await import("converters/cs-he");
            return (await csHe(text)) as T;
          }
          case "da": {
            const { daHe } = await import("converters/da-he");
            return (await daHe(text)) as T;
          }
          case "de": {
            const { deHe } = await import("converters/de-he");
            return (await deHe(text)) as T;
          }
          case "el": {
            const { elHe } = await import("converters/el-he");
            return (await elHe(text)) as T;
          }
          case "en": {
            const { enHe } = await import("converters/en-he");
            return (await enHe(text)) as T;
          }
          case "es": {
            const { esHe } = await import("converters/es-he");
            return (await esHe(text)) as T;
          }
          case "et": {
            const { etHe } = await import("converters/et-he");
            return (await etHe(text)) as T;
          }
          case "fi": {
            const { fiHe } = await import("converters/fi-he");
            return (await fiHe(text)) as T;
          }
          case "fr": {
            const { frHe } = await import("converters/fr-he");
            return (await frHe(text)) as T;
          }
          case "hr": {
            const { hrHe } = await import("converters/hr-he");
            return (await hrHe(text)) as T;
          }
          case "hu": {
            const { huHe } = await import("converters/hu-he");
            return (await huHe(text)) as T;
          }
          case "hy": {
            const { hyHe } = await import("converters/hy-he");
            return (await hyHe(text)) as T;
          }
          case "id": {
            const { idHe } = await import("converters/id-he");
            return (await idHe(text)) as T;
          }
          case "is": {
            const { isHe } = await import("converters/is-he");
            return (await isHe(text)) as T;
          }
          case "it": {
            const { itHe } = await import("converters/it-he");
            return (await itHe(text)) as T;
          }
          case "ja": {
            const { jaHe } = await import("converters/ja-he");
            return (await jaHe(text)) as T;
          }
          case "ka": {
            const { kaHe } = await import("converters/ka-he");
            return (await kaHe(text)) as T;
          }
          case "kk": {
            const { kkHe } = await import("converters/kk-he");
            return (await kkHe(text)) as T;
          }
          case "ko": {
            const { koHe } = await import("converters/ko-he");
            return (await koHe(text)) as T;
          }
          case "lb": {
            const { lbHe } = await import("converters/lb-he");
            return (await lbHe(text)) as T;
          }
          case "lt": {
            const { ltHe } = await import("converters/lt-he");
            return (await ltHe(text)) as T;
          }
          case "lv": {
            const { lvHe } = await import("converters/lv-he");
            return (await lvHe(text)) as T;
          }
          case "mk": {
            const { mkHe } = await import("converters/mk-he");
            return (await mkHe(text)) as T;
          }
          case "mt": {
            const { mtHe } = await import("converters/mt-he");
            return (await mtHe(text)) as T;
          }
          case "nl": {
            const { nlHe } = await import("converters/nl-he");
            return (await nlHe(text)) as T;
          }
          case "no": {
            const { noHe } = await import("converters/no-he");
            return (await noHe(text)) as T;
          }
          case "pl": {
            const { plHe } = await import("converters/pl-he");
            return (await plHe(text)) as T;
          }
          case "pt": {
            const { ptHe } = await import("converters/pt-he");
            return (await ptHe(text)) as T;
          }
          case "ro": {
            const { roHe } = await import("converters/ro-he");
            return (await roHe(text)) as T;
          }
          case "ru": {
            const { ruHe } = await import("converters/ru-he");
            return (await ruHe(text)) as T;
          }
          case "sk": {
            const { skHe } = await import("converters/sk-he");
            return (await skHe(text)) as T;
          }
          case "sl": {
            const { slHe } = await import("converters/sl-he");
            return (await slHe(text)) as T;
          }
          case "sq": {
            const { sqHe } = await import("converters/sq-he");
            return (await sqHe(text)) as T;
          }
          case "sr": {
            const { srHe } = await import("converters/sr-he");
            return (await srHe(text)) as T;
          }
          case "sv": {
            const { svHe } = await import("converters/sv-he");
            return (await svHe(text)) as T;
          }
          case "tr": {
            const { trHe } = await import("converters/tr-he");
            return (await trHe(text)) as T;
          }
          case "uk": {
            const { ukHe } = await import("converters/uk-he");
            return (await ukHe(text)) as T;
          }
          case "vi": {
            const { viHe } = await import("converters/vi-he");
            return (await viHe(text)) as T;
          }
          case "zh": {
            const { zhHe } = await import("converters/zh-he");
            return (await zhHe(text)) as T;
          }
          case "ar": {
            const { arHe } = await import("converters/ar-he");
            return (await arHe(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Georgian
      case "ka":
        switch (from) {
          case "el": {
            const { elKa } = await import("converters/el-ka");
            return (await elKa(text)) as T;
          }
          case "hy": {
            const { hyKa } = await import("converters/hy-ka");
            return (await hyKa(text)) as T;
          }
          case "ar": {
            const { arKa } = await import("converters/ar-ka");
            return (await arKa(text)) as T;
          }
          case "he": {
            const { heKa } = await import("converters/he-ka");
            return (await heKa(text)) as T;
          }
          case "hi": {
            const { hiKa } = await import("converters/hi-ka");
            return (await hiKa(text)) as T;
          }
          case "zh": {
            const { zhKa } = await import("converters/zh-ka");
            return (await zhKa(text)) as T;
          }
          case "ja": {
            const { jaKa } = await import("converters/ja-ka");
            return (await jaKa(text)) as T;
          }
          case "ko": {
            const { koKa } = await import("converters/ko-ka");
            return (await koKa(text)) as T;
          }
          case "en": {
            const { enKa } = await import("converters/en-ka");
            return (await enKa(text)) as T;
          }
          case "fr": {
            const { frKa } = await import("converters/fr-ka");
            return (await frKa(text)) as T;
          }
          case "da": {
            const { daKa } = await import("converters/da-ka");
            return (await daKa(text)) as T;
          }
          case "no": {
            const { noKa } = await import("converters/no-ka");
            return (await noKa(text)) as T;
          }
          case "sv": {
            const { svKa } = await import("converters/sv-ka");
            return (await svKa(text)) as T;
          }
          case "is": {
            const { isKa } = await import("converters/is-ka");
            return (await isKa(text)) as T;
          }
          case "pt": {
            const { ptKa } = await import("converters/pt-ka");
            return (await ptKa(text)) as T;
          }
          case "vi": {
            const { viKa } = await import("converters/vi-ka");
            return (await viKa(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Armenian
      case "hy":
        switch (from) {
          case "el": {
            const { elHy } = await import("converters/el-hy");
            return (await elHy(text)) as T;
          }
          case "ka": {
            const { kaHy } = await import("converters/ka-hy");
            return (await kaHy(text)) as T;
          }
          case "ar": {
            const { arHy } = await import("converters/ar-hy");
            return (await arHy(text)) as T;
          }
          case "he": {
            const { heHy } = await import("converters/he-hy");
            return (await heHy(text)) as T;
          }
          case "hi": {
            const { hiHy } = await import("converters/hi-hy");
            return (await hiHy(text)) as T;
          }
          case "zh": {
            const { zhHy } = await import("converters/zh-hy");
            return (await zhHy(text)) as T;
          }
          case "ja": {
            const { jaHy } = await import("converters/ja-hy");
            return (await jaHy(text)) as T;
          }
          case "ko": {
            const { koHy } = await import("converters/ko-hy");
            return (await koHy(text)) as T;
          }
          case "en": {
            const { enHy } = await import("converters/en-hy");
            return (await enHy(text)) as T;
          }
          case "fr": {
            const { frHy } = await import("converters/fr-hy");
            return (await frHy(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Greek
      case "el":
        switch (from) {
          case "en": {
            const { enEl } = await import("converters/en-el");
            return (await enEl(text)) as T;
          }
          case "fr": {
            const { frEl } = await import("converters/fr-el");
            return (await frEl(text)) as T;
          }
          case "da": {
            const { daEl } = await import("converters/da-el");
            return (await daEl(text)) as T;
          }
          case "no": {
            const { noEl } = await import("converters/no-el");
            return (await noEl(text)) as T;
          }
          case "sv": {
            const { svEl } = await import("converters/sv-el");
            return (await svEl(text)) as T;
          }
          case "is": {
            const { isEl } = await import("converters/is-el");
            return (await isEl(text)) as T;
          }
          case "pt": {
            const { ptEl } = await import("converters/pt-el");
            return (await ptEl(text)) as T;
          }
          case "vi": {
            const { viEl } = await import("converters/vi-el");
            return (await viEl(text)) as T;
          }
          case "ar": {
            const { arEl } = await import("converters/ar-el");
            return (await arEl(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Russian
      case "ru":
        switch (from) {
          case "el": {
            const { elRu } = await import("converters/el-ru");
            return (await elRu(text)) as T;
          }
          case "en": {
            const { enRu } = await import("converters/en-ru");
            return (await enRu(text)) as T;
          }
          case "fr": {
            const { frRu } = await import("converters/fr-ru");
            return (await frRu(text)) as T;
          }
          case "da": {
            const { daRu } = await import("converters/da-ru");
            return (await daRu(text)) as T;
          }
          case "no": {
            const { noRu } = await import("converters/no-ru");
            return (await noRu(text)) as T;
          }
          case "sv": {
            const { svRu } = await import("converters/sv-ru");
            return (await svRu(text)) as T;
          }
          case "is": {
            const { isRu } = await import("converters/is-ru");
            return (await isRu(text)) as T;
          }
          case "pt": {
            const { ptRu } = await import("converters/pt-ru");
            return (await ptRu(text)) as T;
          }
          case "vi": {
            const { viRu } = await import("converters/vi-ru");
            return (await viRu(text)) as T;
          }
          case "bg": {
            const { bgRu } = await import("converters/bg-ru");
            return (await bgRu(text)) as T;
          }
          case "mk": {
            const { mkRu } = await import("converters/mk-ru");
            return (await mkRu(text)) as T;
          }
          case "uk": {
            const { ukRu } = await import("converters/uk-ru");
            return (await ukRu(text)) as T;
          }
          case "zh": {
            const { zhRu } = await import("converters/zh-ru");
            return (await zhRu(text)) as T;
          }
          case "ja": {
            const { jaRu } = await import("converters/ja-ru");
            return (await jaRu(text)) as T;
          }
          case "ko": {
            const { koRu } = await import("converters/ko-ru");
            return (await koRu(text)) as T;
          }
          case "hi": {
            const { hiRu } = await import("converters/hi-ru");
            return (await hiRu(text)) as T;
          }
          case "ar": {
            const { arRu } = await import("converters/ar-ru");
            return (await arRu(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Ukrainian
      case "uk":
        switch (from) {
          case "el": {
            const { elUk } = await import("converters/el-uk");
            return (await elUk(text)) as T;
          }
          case "en": {
            const { enUk } = await import("converters/en-uk");
            return (await enUk(text)) as T;
          }
          case "fr": {
            const { frUk } = await import("converters/fr-uk");
            return (await frUk(text)) as T;
          }
          case "da": {
            const { daUk } = await import("converters/da-uk");
            return (await daUk(text)) as T;
          }
          case "no": {
            const { noUk } = await import("converters/no-uk");
            return (await noUk(text)) as T;
          }
          case "sv": {
            const { svUk } = await import("converters/sv-uk");
            return (await svUk(text)) as T;
          }
          case "is": {
            const { isUk } = await import("converters/is-uk");
            return (await isUk(text)) as T;
          }
          case "pt": {
            const { ptUk } = await import("converters/pt-uk");
            return (await ptUk(text)) as T;
          }
          case "vi": {
            const { viUk } = await import("converters/vi-uk");
            return (await viUk(text)) as T;
          }
          case "bg": {
            const { bgUk } = await import("converters/bg-uk");
            return (await bgUk(text)) as T;
          }
          case "ru": {
            const { ruUk } = await import("converters/ru-uk");
            return (await ruUk(text)) as T;
          }
          case "mk": {
            const { mkUk } = await import("converters/mk-uk");
            return (await mkUk(text)) as T;
          }
          case "zh": {
            const { zhUk } = await import("converters/zh-uk");
            return (await zhUk(text)) as T;
          }
          case "ja": {
            const { jaUk } = await import("converters/ja-uk");
            return (await jaUk(text)) as T;
          }
          case "ko": {
            const { koUk } = await import("converters/ko-uk");
            return (await koUk(text)) as T;
          }
          case "hi": {
            const { hiUk } = await import("converters/hi-uk");
            return (await hiUk(text)) as T;
          }
          case "ar": {
            const { arUk } = await import("converters/ar-uk");
            return (await arUk(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Bulgarian
      case "bg":
        switch (from) {
          case "el": {
            const { elBg } = await import("converters/el-bg");
            return (await elBg(text)) as T;
          }
          case "en": {
            const { enBg } = await import("converters/en-bg");
            return (await enBg(text)) as T;
          }
          case "fr": {
            const { frBg } = await import("converters/fr-bg");
            return (await frBg(text)) as T;
          }
          case "da": {
            const { daBg } = await import("converters/da-bg");
            return (await daBg(text)) as T;
          }
          case "no": {
            const { noBg } = await import("converters/no-bg");
            return (await noBg(text)) as T;
          }
          case "sv": {
            const { svBg } = await import("converters/sv-bg");
            return (await svBg(text)) as T;
          }
          case "is": {
            const { isBg } = await import("converters/is-bg");
            return (await isBg(text)) as T;
          }
          case "pt": {
            const { ptBg } = await import("converters/pt-bg");
            return (await ptBg(text)) as T;
          }
          case "vi": {
            const { viBg } = await import("converters/vi-bg");
            return (await viBg(text)) as T;
          }
          case "mk": {
            const { mkBg } = await import("converters/mk-bg");
            return (await mkBg(text)) as T;
          }
          case "ru": {
            const { ruBg } = await import("converters/ru-bg");
            return (await ruBg(text)) as T;
          }
          case "uk": {
            const { ukBg } = await import("converters/uk-bg");
            return (await ukBg(text)) as T;
          }
          case "zh": {
            const { zhBg } = await import("converters/zh-bg");
            return (await zhBg(text)) as T;
          }
          case "ja": {
            const { jaBg } = await import("converters/ja-bg");
            return (await jaBg(text)) as T;
          }
          case "ko": {
            const { koBg } = await import("converters/ko-bg");
            return (await koBg(text)) as T;
          }
          case "hi": {
            const { hiBg } = await import("converters/hi-bg");
            return (await hiBg(text)) as T;
          }
          case "ar": {
            const { arBg } = await import("converters/ar-bg");
            return (await arBg(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Macedonian
      case "mk":
        switch (from) {
          case "el": {
            const { elMk } = await import("converters/el-mk");
            return (await elMk(text)) as T;
          }
          case "en": {
            const { enMk } = await import("converters/en-mk");
            return (await enMk(text)) as T;
          }
          case "fr": {
            const { frMk } = await import("converters/fr-mk");
            return (await frMk(text)) as T;
          }
          case "da": {
            const { daMk } = await import("converters/da-mk");
            return (await daMk(text)) as T;
          }
          case "no": {
            const { noMk } = await import("converters/no-mk");
            return (await noMk(text)) as T;
          }
          case "sv": {
            const { svMk } = await import("converters/sv-mk");
            return (await svMk(text)) as T;
          }
          case "is": {
            const { isMk } = await import("converters/is-mk");
            return (await isMk(text)) as T;
          }
          case "pt": {
            const { ptMk } = await import("converters/pt-mk");
            return (await ptMk(text)) as T;
          }
          case "vi": {
            const { viMk } = await import("converters/vi-mk");
            return (await viMk(text)) as T;
          }
          case "bg": {
            const { bgMk } = await import("converters/bg-mk");
            return (await bgMk(text)) as T;
          }
          case "ru": {
            const { ruMk } = await import("converters/ru-mk");
            return (await ruMk(text)) as T;
          }
          case "uk": {
            const { ukMk } = await import("converters/uk-mk");
            return (await ukMk(text)) as T;
          }
          case "zh": {
            const { zhMk } = await import("converters/zh-mk");
            return (await zhMk(text)) as T;
          }
          case "ja": {
            const { jaMk } = await import("converters/ja-mk");
            return (await jaMk(text)) as T;
          }
          case "ko": {
            const { koMk } = await import("converters/ko-mk");
            return (await koMk(text)) as T;
          }
          case "hi": {
            const { hiMk } = await import("converters/hi-mk");
            return (await hiMk(text)) as T;
          }
          case "ar": {
            const { arMk } = await import("converters/ar-mk");
            return (await arMk(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Azerbaijani
      case "az":
        switch (from) {
          case "zh": {
            const { zhAz } = await import("converters/zh-az");
            return (await zhAz(text)) as T;
          }
          case "ja": {
            const { jaAz } = await import("converters/ja-az");
            return (await jaAz(text)) as T;
          }
          case "ko": {
            const { koAz } = await import("converters/ko-az");
            return (await koAz(text)) as T;
          }
          case "en": {
            const { enAz } = await import("converters/en-az");
            return (await enAz(text)) as T;
          }
          case "fr": {
            const { frAz } = await import("converters/fr-az");
            return (await frAz(text)) as T;
          }
          case "da": {
            const { daAz } = await import("converters/da-az");
            return (await daAz(text)) as T;
          }
          case "no": {
            const { noAz } = await import("converters/no-az");
            return (await noAz(text)) as T;
          }
          case "sv": {
            const { svAz } = await import("converters/sv-az");
            return (await svAz(text)) as T;
          }
          case "is": {
            const { isAz } = await import("converters/is-az");
            return (await isAz(text)) as T;
          }
          case "pt": {
            const { ptAz } = await import("converters/pt-az");
            return (await ptAz(text)) as T;
          }
          case "vi": {
            const { viAz } = await import("converters/vi-az");
            return (await viAz(text)) as T;
          }
          case "ar": {
            const { arAz } = await import("converters/ar-az");
            return (await arAz(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Bosnian
      case "bs":
        switch (from) {
          case "en": {
            const { enBs } = await import("converters/en-bs");
            return (await enBs(text)) as T;
          }
          case "fr": {
            const { frBs } = await import("converters/fr-bs");
            return (await frBs(text)) as T;
          }
          case "da": {
            const { daBs } = await import("converters/da-bs");
            return (await daBs(text)) as T;
          }
          case "no": {
            const { noBs } = await import("converters/no-bs");
            return (await noBs(text)) as T;
          }
          case "sv": {
            const { svBs } = await import("converters/sv-bs");
            return (await svBs(text)) as T;
          }
          case "is": {
            const { isBs } = await import("converters/is-bs");
            return (await isBs(text)) as T;
          }
          case "pt": {
            const { ptBs } = await import("converters/pt-bs");
            return (await ptBs(text)) as T;
          }
          case "vi": {
            const { viBs } = await import("converters/vi-bs");
            return (await viBs(text)) as T;
          }
          case "ar": {
            const { arBs } = await import("converters/ar-bs");
            return (await arBs(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Catalan
      case "ca":
        switch (from) {
          case "en": {
            const { enCa } = await import("converters/en-ca");
            return (await enCa(text)) as T;
          }
          case "fr": {
            const { frCa } = await import("converters/fr-ca");
            return (await frCa(text)) as T;
          }
          case "da": {
            const { daCa } = await import("converters/da-ca");
            return (await daCa(text)) as T;
          }
          case "no": {
            const { noCa } = await import("converters/no-ca");
            return (await noCa(text)) as T;
          }
          case "sv": {
            const { svCa } = await import("converters/sv-ca");
            return (await svCa(text)) as T;
          }
          case "is": {
            const { isCa } = await import("converters/is-ca");
            return (await isCa(text)) as T;
          }
          case "pt": {
            const { ptCa } = await import("converters/pt-ca");
            return (await ptCa(text)) as T;
          }
          case "vi": {
            const { viCa } = await import("converters/vi-ca");
            return (await viCa(text)) as T;
          }
          case "ar": {
            const { arCa } = await import("converters/ar-ca");
            return (await arCa(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Czech
      case "cs":
        switch (from) {
          case "en": {
            const { enCs } = await import("converters/en-cs");
            return (await enCs(text)) as T;
          }
          case "fr": {
            const { frCs } = await import("converters/fr-cs");
            return (await frCs(text)) as T;
          }
          case "da": {
            const { daCs } = await import("converters/da-cs");
            return (await daCs(text)) as T;
          }
          case "no": {
            const { noCs } = await import("converters/no-cs");
            return (await noCs(text)) as T;
          }
          case "sv": {
            const { svCs } = await import("converters/sv-cs");
            return (await svCs(text)) as T;
          }
          case "is": {
            const { isCs } = await import("converters/is-cs");
            return (await isCs(text)) as T;
          }
          case "pt": {
            const { ptCs } = await import("converters/pt-cs");
            return (await ptCs(text)) as T;
          }
          case "vi": {
            const { viCs } = await import("converters/vi-cs");
            return (await viCs(text)) as T;
          }
          case "ar": {
            const { arCs } = await import("converters/ar-cs");
            return (await arCs(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Danish
      case "da":
        switch (from) {
          case "en": {
            const { enDa } = await import("converters/en-da");
            return (await enDa(text)) as T;
          }
          case "fr": {
            const { frDa } = await import("converters/fr-da");
            return (await frDa(text)) as T;
          }
          case "no": {
            const { noDa } = await import("converters/no-da");
            return (await noDa(text)) as T;
          }
          case "sv": {
            const { svDa } = await import("converters/sv-da");
            return (await svDa(text)) as T;
          }
          case "is": {
            const { isDa } = await import("converters/is-da");
            return (await isDa(text)) as T;
          }
          case "pt": {
            const { ptDa } = await import("converters/pt-da");
            return (await ptDa(text)) as T;
          }
          case "vi": {
            const { viDa } = await import("converters/vi-da");
            return (await viDa(text)) as T;
          }
          case "ar": {
            const { arDa } = await import("converters/ar-da");
            return (await arDa(text)) as T;
          }
        }
        break;

      // if OUTPUT language is German
      case "de":
        switch (from) {
          case "en": {
            const { enDe } = await import("converters/en-de");
            return (await enDe(text)) as T;
          }
          case "fr": {
            const { frDe } = await import("converters/fr-de");
            return (await frDe(text)) as T;
          }
          case "da": {
            const { daDe } = await import("converters/da-de");
            return (await daDe(text)) as T;
          }
          case "no": {
            const { noDe } = await import("converters/no-de");
            return (await noDe(text)) as T;
          }
          case "sv": {
            const { svDe } = await import("converters/sv-de");
            return (await svDe(text)) as T;
          }
          case "is": {
            const { isDe } = await import("converters/is-de");
            return (await isDe(text)) as T;
          }
          case "pt": {
            const { ptDe } = await import("converters/pt-de");
            return (await ptDe(text)) as T;
          }
          case "vi": {
            const { viDe } = await import("converters/vi-de");
            return (await viDe(text)) as T;
          }
          case "ar": {
            const { arDe } = await import("converters/ar-de");
            return (await arDe(text)) as T;
          }
        }
        break;

      // if OUTPUT language is English
      case "en":
        switch (from) {
          case "ko": {
            const { koEn } = await import("converters/ko-en");
            return (await koEn(text)) as T;
          }
          case "ja": {
            const { jaEn } = await import("converters/ja-en");
            return (await jaEn(text)) as T;
          }
          case "zh": {
            const { zhEn } = await import("converters/zh-en");
            return (await zhEn(text)) as T;
          }
          case "el": {
            const { elEn } = await import("converters/el-en");
            return (await elEn(text)) as T;
          }
          case "hy": {
            const { hyEn } = await import("converters/hy-en");
            return (await hyEn(text)) as T;
          }
          case "ka": {
            const { kaEn } = await import("converters/ka-en");
            return (await kaEn(text)) as T;
          }
          case "hi": {
            const { hiEn } = await import("converters/hi-en");
            return (await hiEn(text)) as T;
          }
          case "ru": {
            const { ruEn } = await import("converters/ru-en");
            return (await ruEn(text)) as T;
          }
          case "uk": {
            const { ukEn } = await import("converters/uk-en");
            return (await ukEn(text)) as T;
          }
          case "bg": {
            const { bgEn } = await import("converters/bg-en");
            return (await bgEn(text)) as T;
          }
          case "mk": {
            const { mkEn } = await import("converters/mk-en");
            return (await mkEn(text)) as T;
          }
          case "ar": {
            const { arEn } = await import("converters/ar-en");
            return (await arEn(text)) as T;
          }
          case "he": {
            const { heEn } = await import("converters/he-en");
            return (await heEn(text)) as T;
          }
          case "fr": {
            const { frEn } = await import("converters/fr-en");
            return (await frEn(text)) as T;
          }
          case "da": {
            const { daEn } = await import("converters/da-en");
            return (await daEn(text)) as T;
          }
          case "no": {
            const { noEn } = await import("converters/no-en");
            return (await noEn(text)) as T;
          }
          case "sv": {
            const { svEn } = await import("converters/sv-en");
            return (await svEn(text)) as T;
          }
          case "is": {
            const { isEn } = await import("converters/is-en");
            return (await isEn(text)) as T;
          }
          case "pt": {
            const { ptEn } = await import("converters/pt-en");
            return (await ptEn(text)) as T;
          }
          case "vi": {
            const { viEn } = await import("converters/vi-en");
            return (await viEn(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Spanish
      case "es":
        switch (from) {
          case "en": {
            const { enEs } = await import("converters/en-es");
            return (await enEs(text)) as T;
          }
          case "fr": {
            const { frEs } = await import("converters/fr-es");
            return (await frEs(text)) as T;
          }
          case "da": {
            const { daEs } = await import("converters/da-es");
            return (await daEs(text)) as T;
          }
          case "no": {
            const { noEs } = await import("converters/no-es");
            return (await noEs(text)) as T;
          }
          case "sv": {
            const { svEs } = await import("converters/sv-es");
            return (await svEs(text)) as T;
          }
          case "is": {
            const { isEs } = await import("converters/is-es");
            return (await isEs(text)) as T;
          }
          case "pt": {
            const { ptEs } = await import("converters/pt-es");
            return (await ptEs(text)) as T;
          }
          case "vi": {
            const { viEs } = await import("converters/vi-es");
            return (await viEs(text)) as T;
          }
          case "ar": {
            const { arEs } = await import("converters/ar-es");
            return (await arEs(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Estonian
      case "et":
        switch (from) {
          case "en": {
            const { enEt } = await import("converters/en-et");
            return (await enEt(text)) as T;
          }
          case "fr": {
            const { frEt } = await import("converters/fr-et");
            return (await frEt(text)) as T;
          }
          case "da": {
            const { daEt } = await import("converters/da-et");
            return (await daEt(text)) as T;
          }
          case "no": {
            const { noEt } = await import("converters/no-et");
            return (await noEt(text)) as T;
          }
          case "sv": {
            const { svEt } = await import("converters/sv-et");
            return (await svEt(text)) as T;
          }
          case "is": {
            const { isEt } = await import("converters/is-et");
            return (await isEt(text)) as T;
          }
          case "pt": {
            const { ptEt } = await import("converters/pt-et");
            return (await ptEt(text)) as T;
          }
          case "vi": {
            const { viEt } = await import("converters/vi-et");
            return (await viEt(text)) as T;
          }
          case "ar": {
            const { arEt } = await import("converters/ar-et");
            return (await arEt(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Finnish
      case "fi":
        switch (from) {
          case "en": {
            const { enFi } = await import("converters/en-fi");
            return (await enFi(text)) as T;
          }
          case "fr": {
            const { frFi } = await import("converters/fr-fi");
            return (await frFi(text)) as T;
          }
          case "da": {
            const { daFi } = await import("converters/da-fi");
            return (await daFi(text)) as T;
          }
          case "no": {
            const { noFi } = await import("converters/no-fi");
            return (await noFi(text)) as T;
          }
          case "sv": {
            const { svFi } = await import("converters/sv-fi");
            return (await svFi(text)) as T;
          }
          case "is": {
            const { isFi } = await import("converters/is-fi");
            return (await isFi(text)) as T;
          }
          case "pt": {
            const { ptFi } = await import("converters/pt-fi");
            return (await ptFi(text)) as T;
          }
          case "vi": {
            const { viFi } = await import("converters/vi-fi");
            return (await viFi(text)) as T;
          }
          case "ar": {
            const { arFi } = await import("converters/ar-fi");
            return (await arFi(text)) as T;
          }
        }
        break;

      // if OUTPUT language is French
      case "fr":
        switch (from) {
          case "hi": {
            const { hiFr } = await import("converters/hi-fr");
            return (await hiFr(text)) as T;
          }
          case "zh": {
            const { zhFr } = await import("converters/zh-fr");
            return (await zhFr(text)) as T;
          }
          case "en": {
            const { enFr } = await import("converters/en-fr");
            return (await enFr(text)) as T;
          }
          case "da": {
            const { daFr } = await import("converters/da-fr");
            return (await daFr(text)) as T;
          }
          case "no": {
            const { noFr } = await import("converters/no-fr");
            return (await noFr(text)) as T;
          }
          case "sv": {
            const { svFr } = await import("converters/sv-fr");
            return (await svFr(text)) as T;
          }
          case "is": {
            const { isFr } = await import("converters/is-fr");
            return (await isFr(text)) as T;
          }
          case "pt": {
            const { ptFr } = await import("converters/pt-fr");
            return (await ptFr(text)) as T;
          }
          case "vi": {
            const { viFr } = await import("converters/vi-fr");
            return (await viFr(text)) as T;
          }
          case "ar": {
            const { arFr } = await import("converters/ar-fr");
            return (await arFr(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Croatian
      case "hr":
        switch (from) {
          case "en": {
            const { enHr } = await import("converters/en-hr");
            return (await enHr(text)) as T;
          }
          case "fr": {
            const { frHr } = await import("converters/fr-hr");
            return (await frHr(text)) as T;
          }
          case "da": {
            const { daHr } = await import("converters/da-hr");
            return (await daHr(text)) as T;
          }
          case "no": {
            const { noHr } = await import("converters/no-hr");
            return (await noHr(text)) as T;
          }
          case "sv": {
            const { svHr } = await import("converters/sv-hr");
            return (await svHr(text)) as T;
          }
          case "is": {
            const { isHr } = await import("converters/is-hr");
            return (await isHr(text)) as T;
          }
          case "pt": {
            const { ptHr } = await import("converters/pt-hr");
            return (await ptHr(text)) as T;
          }
          case "vi": {
            const { viHr } = await import("converters/vi-hr");
            return (await viHr(text)) as T;
          }
          case "ar": {
            const { arHr } = await import("converters/ar-hr");
            return (await arHr(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Hungarian
      case "hu":
        switch (from) {
          case "en": {
            const { enHu } = await import("converters/en-hu");
            return (await enHu(text)) as T;
          }
          case "fr": {
            const { frHu } = await import("converters/fr-hu");
            return (await frHu(text)) as T;
          }
          case "da": {
            const { daHu } = await import("converters/da-hu");
            return (await daHu(text)) as T;
          }
          case "no": {
            const { noHu } = await import("converters/no-hu");
            return (await noHu(text)) as T;
          }
          case "sv": {
            const { svHu } = await import("converters/sv-hu");
            return (await svHu(text)) as T;
          }
          case "is": {
            const { isHu } = await import("converters/is-hu");
            return (await isHu(text)) as T;
          }
          case "pt": {
            const { ptHu } = await import("converters/pt-hu");
            return (await ptHu(text)) as T;
          }
          case "vi": {
            const { viHu } = await import("converters/vi-hu");
            return (await viHu(text)) as T;
          }
          case "ar": {
            const { arHu } = await import("converters/ar-hu");
            return (await arHu(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Indonesian
      case "id":
        switch (from) {
          case "en": {
            const { enId } = await import("converters/en-id");
            return (await enId(text)) as T;
          }
          case "fr": {
            const { frId } = await import("converters/fr-id");
            return (await frId(text)) as T;
          }
          case "da": {
            const { daId } = await import("converters/da-id");
            return (await daId(text)) as T;
          }
          case "no": {
            const { noId } = await import("converters/no-id");
            return (await noId(text)) as T;
          }
          case "sv": {
            const { svId } = await import("converters/sv-id");
            return (await svId(text)) as T;
          }
          case "is": {
            const { isId } = await import("converters/is-id");
            return (await isId(text)) as T;
          }
          case "pt": {
            const { ptId } = await import("converters/pt-id");
            return (await ptId(text)) as T;
          }
          case "vi": {
            const { viId } = await import("converters/vi-id");
            return (await viId(text)) as T;
          }
          case "ar": {
            const { arId } = await import("converters/ar-id");
            return (await arId(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Icelandic
      case "is":
        switch (from) {
          case "en": {
            const { enIs } = await import("converters/en-is");
            return (await enIs(text)) as T;
          }
          case "fr": {
            const { frIs } = await import("converters/fr-is");
            return (await frIs(text)) as T;
          }
          case "da": {
            const { daIs } = await import("converters/da-is");
            return (await daIs(text)) as T;
          }
          case "no": {
            const { noIs } = await import("converters/no-is");
            return (await noIs(text)) as T;
          }
          case "sv": {
            const { svIs } = await import("converters/sv-is");
            return (await svIs(text)) as T;
          }
          case "pt": {
            const { ptIs } = await import("converters/pt-is");
            return (await ptIs(text)) as T;
          }
          case "vi": {
            const { viIs } = await import("converters/vi-is");
            return (await viIs(text)) as T;
          }
          case "ar": {
            const { arIs } = await import("converters/ar-is");
            return (await arIs(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Italian
      case "it":
        switch (from) {
          case "en": {
            const { enIt } = await import("converters/en-it");
            return (await enIt(text)) as T;
          }
          case "fr": {
            const { frIt } = await import("converters/fr-it");
            return (await frIt(text)) as T;
          }
          case "da": {
            const { daIt } = await import("converters/da-it");
            return (await daIt(text)) as T;
          }
          case "no": {
            const { noIt } = await import("converters/no-it");
            return (await noIt(text)) as T;
          }
          case "sv": {
            const { svIt } = await import("converters/sv-it");
            return (await svIt(text)) as T;
          }
          case "is": {
            const { isIt } = await import("converters/is-it");
            return (await isIt(text)) as T;
          }
          case "pt": {
            const { ptIt } = await import("converters/pt-it");
            return (await ptIt(text)) as T;
          }
          case "vi": {
            const { viIt } = await import("converters/vi-it");
            return (await viIt(text)) as T;
          }
          case "ar": {
            const { arIt } = await import("converters/ar-it");
            return (await arIt(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Kazakh
      case "kk":
        switch (from) {
          case "en": {
            const { enKk } = await import("converters/en-kk");
            return (await enKk(text)) as T;
          }
          case "fr": {
            const { frKk } = await import("converters/fr-kk");
            return (await frKk(text)) as T;
          }
          case "da": {
            const { daKk } = await import("converters/da-kk");
            return (await daKk(text)) as T;
          }
          case "no": {
            const { noKk } = await import("converters/no-kk");
            return (await noKk(text)) as T;
          }
          case "sv": {
            const { svKk } = await import("converters/sv-kk");
            return (await svKk(text)) as T;
          }
          case "is": {
            const { isKk } = await import("converters/is-kk");
            return (await isKk(text)) as T;
          }
          case "pt": {
            const { ptKk } = await import("converters/pt-kk");
            return (await ptKk(text)) as T;
          }
          case "vi": {
            const { viKk } = await import("converters/vi-kk");
            return (await viKk(text)) as T;
          }
          case "ar": {
            const { arKk } = await import("converters/ar-kk");
            return (await arKk(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Luxembourgish
      case "lb":
        switch (from) {
          case "en": {
            const { enLb } = await import("converters/en-lb");
            return (await enLb(text)) as T;
          }
          case "fr": {
            const { frLb } = await import("converters/fr-lb");
            return (await frLb(text)) as T;
          }
          case "da": {
            const { daLb } = await import("converters/da-lb");
            return (await daLb(text)) as T;
          }
          case "no": {
            const { noLb } = await import("converters/no-lb");
            return (await noLb(text)) as T;
          }
          case "sv": {
            const { svLb } = await import("converters/sv-lb");
            return (await svLb(text)) as T;
          }
          case "is": {
            const { isLb } = await import("converters/is-lb");
            return (await isLb(text)) as T;
          }
          case "pt": {
            const { ptLb } = await import("converters/pt-lb");
            return (await ptLb(text)) as T;
          }
          case "vi": {
            const { viLb } = await import("converters/vi-lb");
            return (await viLb(text)) as T;
          }
          case "ar": {
            const { arLb } = await import("converters/ar-lb");
            return (await arLb(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Lithuanian
      case "lt":
        switch (from) {
          case "en": {
            const { enLt } = await import("converters/en-lt");
            return (await enLt(text)) as T;
          }
          case "fr": {
            const { frLt } = await import("converters/fr-lt");
            return (await frLt(text)) as T;
          }
          case "da": {
            const { daLt } = await import("converters/da-lt");
            return (await daLt(text)) as T;
          }
          case "no": {
            const { noLt } = await import("converters/no-lt");
            return (await noLt(text)) as T;
          }
          case "sv": {
            const { svLt } = await import("converters/sv-lt");
            return (await svLt(text)) as T;
          }
          case "is": {
            const { isLt } = await import("converters/is-lt");
            return (await isLt(text)) as T;
          }
          case "pt": {
            const { ptLt } = await import("converters/pt-lt");
            return (await ptLt(text)) as T;
          }
          case "vi": {
            const { viLt } = await import("converters/vi-lt");
            return (await viLt(text)) as T;
          }
          case "ar": {
            const { arLt } = await import("converters/ar-lt");
            return (await arLt(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Latvian
      case "lv":
        switch (from) {
          case "en": {
            const { enLv } = await import("converters/en-lv");
            return (await enLv(text)) as T;
          }
          case "fr": {
            const { frLv } = await import("converters/fr-lv");
            return (await frLv(text)) as T;
          }
          case "da": {
            const { daLv } = await import("converters/da-lv");
            return (await daLv(text)) as T;
          }
          case "no": {
            const { noLv } = await import("converters/no-lv");
            return (await noLv(text)) as T;
          }
          case "sv": {
            const { svLv } = await import("converters/sv-lv");
            return (await svLv(text)) as T;
          }
          case "is": {
            const { isLv } = await import("converters/is-lv");
            return (await isLv(text)) as T;
          }
          case "pt": {
            const { ptLv } = await import("converters/pt-lv");
            return (await ptLv(text)) as T;
          }
          case "vi": {
            const { viLv } = await import("converters/vi-lv");
            return (await viLv(text)) as T;
          }
          case "ar": {
            const { arLv } = await import("converters/ar-lv");
            return (await arLv(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Maltese
      case "mt":
        switch (from) {
          case "en": {
            const { enMt } = await import("converters/en-mt");
            return (await enMt(text)) as T;
          }
          case "fr": {
            const { frMt } = await import("converters/fr-mt");
            return (await frMt(text)) as T;
          }
          case "da": {
            const { daMt } = await import("converters/da-mt");
            return (await daMt(text)) as T;
          }
          case "no": {
            const { noMt } = await import("converters/no-mt");
            return (await noMt(text)) as T;
          }
          case "sv": {
            const { svMt } = await import("converters/sv-mt");
            return (await svMt(text)) as T;
          }
          case "is": {
            const { isMt } = await import("converters/is-mt");
            return (await isMt(text)) as T;
          }
          case "pt": {
            const { ptMt } = await import("converters/pt-mt");
            return (await ptMt(text)) as T;
          }
          case "vi": {
            const { viMt } = await import("converters/vi-mt");
            return (await viMt(text)) as T;
          }
          case "ar": {
            const { arMt } = await import("converters/ar-mt");
            return (await arMt(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Dutch
      case "nl":
        switch (from) {
          case "en": {
            const { enNl } = await import("converters/en-nl");
            return (await enNl(text)) as T;
          }
          case "fr": {
            const { frNl } = await import("converters/fr-nl");
            return (await frNl(text)) as T;
          }
          case "da": {
            const { daNl } = await import("converters/da-nl");
            return (await daNl(text)) as T;
          }
          case "no": {
            const { noNl } = await import("converters/no-nl");
            return (await noNl(text)) as T;
          }
          case "sv": {
            const { svNl } = await import("converters/sv-nl");
            return (await svNl(text)) as T;
          }
          case "is": {
            const { isNl } = await import("converters/is-nl");
            return (await isNl(text)) as T;
          }
          case "pt": {
            const { ptNl } = await import("converters/pt-nl");
            return (await ptNl(text)) as T;
          }
          case "vi": {
            const { viNl } = await import("converters/vi-nl");
            return (await viNl(text)) as T;
          }
          case "ar": {
            const { arNl } = await import("converters/ar-nl");
            return (await arNl(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Norwegian
      case "no":
        switch (from) {
          case "en": {
            const { enNo } = await import("converters/en-no");
            return (await enNo(text)) as T;
          }
          case "fr": {
            const { frNo } = await import("converters/fr-no");
            return (await frNo(text)) as T;
          }
          case "da": {
            const { daNo } = await import("converters/da-no");
            return (await daNo(text)) as T;
          }
          case "sv": {
            const { svNo } = await import("converters/sv-no");
            return (await svNo(text)) as T;
          }
          case "is": {
            const { isNo } = await import("converters/is-no");
            return (await isNo(text)) as T;
          }
          case "pt": {
            const { ptNo } = await import("converters/pt-no");
            return (await ptNo(text)) as T;
          }
          case "vi": {
            const { viNo } = await import("converters/vi-no");
            return (await viNo(text)) as T;
          }
          case "ar": {
            const { arNo } = await import("converters/ar-no");
            return (await arNo(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Polish
      case "pl":
        switch (from) {
          case "en": {
            const { enPl } = await import("converters/en-pl");
            return (await enPl(text)) as T;
          }
          case "fr": {
            const { frPl } = await import("converters/fr-pl");
            return (await frPl(text)) as T;
          }
          case "da": {
            const { daPl } = await import("converters/da-pl");
            return (await daPl(text)) as T;
          }
          case "no": {
            const { noPl } = await import("converters/no-pl");
            return (await noPl(text)) as T;
          }
          case "sv": {
            const { svPl } = await import("converters/sv-pl");
            return (await svPl(text)) as T;
          }
          case "is": {
            const { isPl } = await import("converters/is-pl");
            return (await isPl(text)) as T;
          }
          case "pt": {
            const { ptPl } = await import("converters/pt-pl");
            return (await ptPl(text)) as T;
          }
          case "vi": {
            const { viPl } = await import("converters/vi-pl");
            return (await viPl(text)) as T;
          }
          case "ar": {
            const { arPl } = await import("converters/ar-pl");
            return (await arPl(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Portuguese
      case "pt":
        switch (from) {
          case "en": {
            const { enPt } = await import("converters/en-pt");
            return (await enPt(text)) as T;
          }
          case "fr": {
            const { frPt } = await import("converters/fr-pt");
            return (await frPt(text)) as T;
          }
          case "da": {
            const { daPt } = await import("converters/da-pt");
            return (await daPt(text)) as T;
          }
          case "no": {
            const { noPt } = await import("converters/no-pt");
            return (await noPt(text)) as T;
          }
          case "sv": {
            const { svPt } = await import("converters/sv-pt");
            return (await svPt(text)) as T;
          }
          case "is": {
            const { isPt } = await import("converters/is-pt");
            return (await isPt(text)) as T;
          }
          case "vi": {
            const { viPt } = await import("converters/vi-pt");
            return (await viPt(text)) as T;
          }
          case "ar": {
            const { arPt } = await import("converters/ar-pt");
            return (await arPt(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Romanian
      case "ro":
        switch (from) {
          case "en": {
            const { enRo } = await import("converters/en-ro");
            return (await enRo(text)) as T;
          }
          case "fr": {
            const { frRo } = await import("converters/fr-ro");
            return (await frRo(text)) as T;
          }
          case "da": {
            const { daRo } = await import("converters/da-ro");
            return (await daRo(text)) as T;
          }
          case "no": {
            const { noRo } = await import("converters/no-ro");
            return (await noRo(text)) as T;
          }
          case "sv": {
            const { svRo } = await import("converters/sv-ro");
            return (await svRo(text)) as T;
          }
          case "is": {
            const { isRo } = await import("converters/is-ro");
            return (await isRo(text)) as T;
          }
          case "pt": {
            const { ptRo } = await import("converters/pt-ro");
            return (await ptRo(text)) as T;
          }
          case "vi": {
            const { viRo } = await import("converters/vi-ro");
            return (await viRo(text)) as T;
          }
          case "ar": {
            const { arRo } = await import("converters/ar-ro");
            return (await arRo(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Slovak
      case "sk":
        switch (from) {
          case "en": {
            const { enSk } = await import("converters/en-sk");
            return (await enSk(text)) as T;
          }
          case "fr": {
            const { frSk } = await import("converters/fr-sk");
            return (await frSk(text)) as T;
          }
          case "da": {
            const { daSk } = await import("converters/da-sk");
            return (await daSk(text)) as T;
          }
          case "no": {
            const { noSk } = await import("converters/no-sk");
            return (await noSk(text)) as T;
          }
          case "sv": {
            const { svSk } = await import("converters/sv-sk");
            return (await svSk(text)) as T;
          }
          case "is": {
            const { isSk } = await import("converters/is-sk");
            return (await isSk(text)) as T;
          }
          case "pt": {
            const { ptSk } = await import("converters/pt-sk");
            return (await ptSk(text)) as T;
          }
          case "vi": {
            const { viSk } = await import("converters/vi-sk");
            return (await viSk(text)) as T;
          }
          case "ar": {
            const { arSk } = await import("converters/ar-sk");
            return (await arSk(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Slovene
      case "sl":
        switch (from) {
          case "en": {
            const { enSl } = await import("converters/en-sl");
            return (await enSl(text)) as T;
          }
          case "fr": {
            const { frSl } = await import("converters/fr-sl");
            return (await frSl(text)) as T;
          }
          case "da": {
            const { daSl } = await import("converters/da-sl");
            return (await daSl(text)) as T;
          }
          case "no": {
            const { noSl } = await import("converters/no-sl");
            return (await noSl(text)) as T;
          }
          case "sv": {
            const { svSl } = await import("converters/sv-sl");
            return (await svSl(text)) as T;
          }
          case "is": {
            const { isSl } = await import("converters/is-sl");
            return (await isSl(text)) as T;
          }
          case "pt": {
            const { ptSl } = await import("converters/pt-sl");
            return (await ptSl(text)) as T;
          }
          case "vi": {
            const { viSl } = await import("converters/vi-sl");
            return (await viSl(text)) as T;
          }
          case "ar": {
            const { arSl } = await import("converters/ar-sl");
            return (await arSl(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Albanian
      case "sq":
        switch (from) {
          case "en": {
            const { enSq } = await import("converters/en-sq");
            return (await enSq(text)) as T;
          }
          case "fr": {
            const { frSq } = await import("converters/fr-sq");
            return (await frSq(text)) as T;
          }
          case "da": {
            const { daSq } = await import("converters/da-sq");
            return (await daSq(text)) as T;
          }
          case "no": {
            const { noSq } = await import("converters/no-sq");
            return (await noSq(text)) as T;
          }
          case "sv": {
            const { svSq } = await import("converters/sv-sq");
            return (await svSq(text)) as T;
          }
          case "is": {
            const { isSq } = await import("converters/is-sq");
            return (await isSq(text)) as T;
          }
          case "pt": {
            const { ptSq } = await import("converters/pt-sq");
            return (await ptSq(text)) as T;
          }
          case "vi": {
            const { viSq } = await import("converters/vi-sq");
            return (await viSq(text)) as T;
          }
          case "ar": {
            const { arSq } = await import("converters/ar-sq");
            return (await arSq(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Serbian
      case "sr":
        switch (from) {
          case "en": {
            const { enSr } = await import("converters/en-sr");
            return (await enSr(text)) as T;
          }
          case "fr": {
            const { frSr } = await import("converters/fr-sr");
            return (await frSr(text)) as T;
          }
          case "da": {
            const { daSr } = await import("converters/da-sr");
            return (await daSr(text)) as T;
          }
          case "no": {
            const { noSr } = await import("converters/no-sr");
            return (await noSr(text)) as T;
          }
          case "sv": {
            const { svSr } = await import("converters/sv-sr");
            return (await svSr(text)) as T;
          }
          case "is": {
            const { isSr } = await import("converters/is-sr");
            return (await isSr(text)) as T;
          }
          case "pt": {
            const { ptSr } = await import("converters/pt-sr");
            return (await ptSr(text)) as T;
          }
          case "vi": {
            const { viSr } = await import("converters/vi-sr");
            return (await viSr(text)) as T;
          }
          case "ar": {
            const { arSr } = await import("converters/ar-sr");
            return (await arSr(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Swedish
      case "sv":
        switch (from) {
          case "en": {
            const { enSv } = await import("converters/en-sv");
            return (await enSv(text)) as T;
          }
          case "fr": {
            const { frSv } = await import("converters/fr-sv");
            return (await frSv(text)) as T;
          }
          case "da": {
            const { daSv } = await import("converters/da-sv");
            return (await daSv(text)) as T;
          }
          case "no": {
            const { noSv } = await import("converters/no-sv");
            return (await noSv(text)) as T;
          }
          case "is": {
            const { isSv } = await import("converters/is-sv");
            return (await isSv(text)) as T;
          }
          case "pt": {
            const { ptSv } = await import("converters/pt-sv");
            return (await ptSv(text)) as T;
          }
          case "vi": {
            const { viSv } = await import("converters/vi-sv");
            return (await viSv(text)) as T;
          }
          case "ar": {
            const { arSv } = await import("converters/ar-sv");
            return (await arSv(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Turkish
      case "tr":
        switch (from) {
          case "en": {
            const { enTr } = await import("converters/en-tr");
            return (await enTr(text)) as T;
          }
          case "fr": {
            const { frTr } = await import("converters/fr-tr");
            return (await frTr(text)) as T;
          }
          case "da": {
            const { daTr } = await import("converters/da-tr");
            return (await daTr(text)) as T;
          }
          case "no": {
            const { noTr } = await import("converters/no-tr");
            return (await noTr(text)) as T;
          }
          case "sv": {
            const { svTr } = await import("converters/sv-tr");
            return (await svTr(text)) as T;
          }
          case "is": {
            const { isTr } = await import("converters/is-tr");
            return (await isTr(text)) as T;
          }
          case "pt": {
            const { ptTr } = await import("converters/pt-tr");
            return (await ptTr(text)) as T;
          }
          case "vi": {
            const { viTr } = await import("converters/vi-tr");
            return (await viTr(text)) as T;
          }
          case "ar": {
            const { arTr } = await import("converters/ar-tr");
            return (await arTr(text)) as T;
          }
        }
        break;

      // if OUTPUT language is Vietnamese
      case "vi":
        switch (from) {
          case "en": {
            const { enVi } = await import("converters/en-vi");
            return (await enVi(text)) as T;
          }
          case "fr": {
            const { frVi } = await import("converters/fr-vi");
            return (await frVi(text)) as T;
          }
          case "da": {
            const { daVi } = await import("converters/da-vi");
            return (await daVi(text)) as T;
          }
          case "no": {
            const { noVi } = await import("converters/no-vi");
            return (await noVi(text)) as T;
          }
          case "sv": {
            const { svVi } = await import("converters/sv-vi");
            return (await svVi(text)) as T;
          }
          case "is": {
            const { isVi } = await import("converters/is-vi");
            return (await isVi(text)) as T;
          }
          case "pt": {
            const { ptVi } = await import("converters/pt-vi");
            return (await ptVi(text)) as T;
          }
          case "zh": {
            const { zhVi } = await import("converters/zh-vi");
            return (await zhVi(text)) as T;
          }
          case "ar": {
            const { arVi } = await import("converters/ar-vi");
            return (await arVi(text)) as T;
          }
        }
        break;
    }
  } catch (e: unknown) {
    throw new Error(typeof e === "string" ? e : JSON.stringify(e), { cause: e });
  }

  throw new Error("Transliteration failed: the language pair is not supported");
};
