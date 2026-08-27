import { languages, supportedLanguages } from "helpers/constants";
import { Options, Text } from "types";
import { validateLanguageByScript } from "helpers/validateLanguageByScript";

export const transliterate = async <T extends Text>(text: T, { from, to }: Options): Promise<T> => {
  if (Array.isArray(text) ? text.length === 0 : !text) {
    throw new Error("Source text is empty.");
  }
  if (!from) {
    throw new Error('Source language ("from") is not specified.');
  }
  if (!to) {
    throw new Error('Target language ("to") is not specified.');
  }
  if (!supportedLanguages.includes(from)) {
    throw new Error(`Unsupported source language ("from"): ${from}.`);
  }
  if (!supportedLanguages.includes(to)) {
    throw new Error(`Unsupported target language ("to"): ${to}.`);
  }
  if (from === to) {
    throw new Error(
      `Source and target languages ("from" and "to") are the same: ${languages[from].name}.`,
    );
  }
  if (!validateLanguageByScript(from, text)) {
    throw new Error(`Source text does not match ${languages[from].name}.`);
  }

  try {
    switch (from) {
      case "zh":
        switch (to) {
          case "ja": {
            const { zhJa } = await import("converters/zh/zh-ja");
            return (await zhJa(text)) as T;
          }
          case "ko": {
            const { zhKo } = await import("converters/zh/zh-ko");
            return (await zhKo(text)) as T;
          }
          case "hi": {
            const { zhHi } = await import("converters/zh/zh-hi");
            return (await zhHi(text)) as T;
          }
          case "bn": {
            const { zhBn } = await import("converters/zh/zh-bn");
            return (await zhBn(text)) as T;
          }
          case "ur": {
            const { zhUr } = await import("converters/zh/zh-ur");
            return (await zhUr(text)) as T;
          }
          case "fa": {
            const { zhFa } = await import("converters/zh/zh-fa");
            return (await zhFa(text)) as T;
          }
          case "ar": {
            const { zhAr } = await import("converters/zh/zh-ar");
            return (await zhAr(text)) as T;
          }
          case "he": {
            const { zhHe } = await import("converters/zh/zh-he");
            return (await zhHe(text)) as T;
          }
          case "ka": {
            const { zhKa } = await import("converters/zh/zh-ka");
            return (await zhKa(text)) as T;
          }
          case "hy": {
            const { zhHy } = await import("converters/zh/zh-hy");
            return (await zhHy(text)) as T;
          }
          case "el": {
            const { zhEl } = await import("converters/zh/zh-el");
            return (await zhEl(text)) as T;
          }
          case "ru": {
            const { zhRu } = await import("converters/zh/zh-ru");
            return (await zhRu(text)) as T;
          }
          case "uk": {
            const { zhUk } = await import("converters/zh/zh-uk");
            return (await zhUk(text)) as T;
          }
          case "bg": {
            const { zhBg } = await import("converters/zh/zh-bg");
            return (await zhBg(text)) as T;
          }
          case "mk": {
            const { zhMk } = await import("converters/zh/zh-mk");
            return (await zhMk(text)) as T;
          }
          case "az": {
            const { zhAz } = await import("converters/zh/zh-az");
            return (await zhAz(text)) as T;
          }
          case "bs": {
            const { zhBs } = await import("converters/zh/zh-bs");
            return (await zhBs(text)) as T;
          }
          case "ca": {
            const { zhCa } = await import("converters/zh/zh-ca");
            return (await zhCa(text)) as T;
          }
          case "cs": {
            const { zhCs } = await import("converters/zh/zh-cs");
            return (await zhCs(text)) as T;
          }
          case "da": {
            const { zhDa } = await import("converters/zh/zh-da");
            return (await zhDa(text)) as T;
          }
          case "de": {
            const { zhDe } = await import("converters/zh/zh-de");
            return (await zhDe(text)) as T;
          }
          case "en": {
            const { zhEn } = await import("converters/zh/zh-en");
            return (await zhEn(text)) as T;
          }
          case "es": {
            const { zhEs } = await import("converters/zh/zh-es");
            return (await zhEs(text)) as T;
          }
          case "et": {
            const { zhEt } = await import("converters/zh/zh-et");
            return (await zhEt(text)) as T;
          }
          case "fi": {
            const { zhFi } = await import("converters/zh/zh-fi");
            return (await zhFi(text)) as T;
          }
          case "fr": {
            const { zhFr } = await import("converters/zh/zh-fr");
            return (await zhFr(text)) as T;
          }
          case "hr": {
            const { zhHr } = await import("converters/zh/zh-hr");
            return (await zhHr(text)) as T;
          }
          case "hu": {
            const { zhHu } = await import("converters/zh/zh-hu");
            return (await zhHu(text)) as T;
          }
          case "id": {
            const { zhId } = await import("converters/zh/zh-id");
            return (await zhId(text)) as T;
          }
          case "is": {
            const { zhIs } = await import("converters/zh/zh-is");
            return (await zhIs(text)) as T;
          }
          case "it": {
            const { zhIt } = await import("converters/zh/zh-it");
            return (await zhIt(text)) as T;
          }
          case "kk": {
            const { zhKk } = await import("converters/zh/zh-kk");
            return (await zhKk(text)) as T;
          }
          case "lb": {
            const { zhLb } = await import("converters/zh/zh-lb");
            return (await zhLb(text)) as T;
          }
          case "lt": {
            const { zhLt } = await import("converters/zh/zh-lt");
            return (await zhLt(text)) as T;
          }
          case "lv": {
            const { zhLv } = await import("converters/zh/zh-lv");
            return (await zhLv(text)) as T;
          }
          case "ms": {
            const { zhMs } = await import("converters/zh/zh-ms");
            return (await zhMs(text)) as T;
          }
          case "mt": {
            const { zhMt } = await import("converters/zh/zh-mt");
            return (await zhMt(text)) as T;
          }
          case "nl": {
            const { zhNl } = await import("converters/zh/zh-nl");
            return (await zhNl(text)) as T;
          }
          case "no": {
            const { zhNo } = await import("converters/zh/zh-no");
            return (await zhNo(text)) as T;
          }
          case "pl": {
            const { zhPl } = await import("converters/zh/zh-pl");
            return (await zhPl(text)) as T;
          }
          case "pt": {
            const { zhPt } = await import("converters/zh/zh-pt");
            return (await zhPt(text)) as T;
          }
          case "ro": {
            const { zhRo } = await import("converters/zh/zh-ro");
            return (await zhRo(text)) as T;
          }
          case "sk": {
            const { zhSk } = await import("converters/zh/zh-sk");
            return (await zhSk(text)) as T;
          }
          case "sl": {
            const { zhSl } = await import("converters/zh/zh-sl");
            return (await zhSl(text)) as T;
          }
          case "sq": {
            const { zhSq } = await import("converters/zh/zh-sq");
            return (await zhSq(text)) as T;
          }
          case "sr": {
            const { zhSr } = await import("converters/zh/zh-sr");
            return (await zhSr(text)) as T;
          }
          case "sv": {
            const { zhSv } = await import("converters/zh/zh-sv");
            return (await zhSv(text)) as T;
          }
          case "tr": {
            const { zhTr } = await import("converters/zh/zh-tr");
            return (await zhTr(text)) as T;
          }
          case "vi": {
            const { zhVi } = await import("converters/zh/zh-vi");
            return (await zhVi(text)) as T;
          }
        }
        break;
      case "ja":
        switch (to) {
          case "zh": {
            const { jaZh } = await import("converters/ja/ja-zh");
            return (await jaZh(text)) as T;
          }
          case "ko": {
            const { jaKo } = await import("converters/ja/ja-ko");
            return (await jaKo(text)) as T;
          }
          case "hi": {
            const { jaHi } = await import("converters/ja/ja-hi");
            return (await jaHi(text)) as T;
          }
          case "bn": {
            const { jaBn } = await import("converters/ja/ja-bn");
            return (await jaBn(text)) as T;
          }
          case "ur": {
            const { jaUr } = await import("converters/ja/ja-ur");
            return (await jaUr(text)) as T;
          }
          case "fa": {
            const { jaFa } = await import("converters/ja/ja-fa");
            return (await jaFa(text)) as T;
          }
          case "ar": {
            const { jaAr } = await import("converters/ja/ja-ar");
            return (await jaAr(text)) as T;
          }
          case "he": {
            const { jaHe } = await import("converters/ja/ja-he");
            return (await jaHe(text)) as T;
          }
          case "ka": {
            const { jaKa } = await import("converters/ja/ja-ka");
            return (await jaKa(text)) as T;
          }
          case "hy": {
            const { jaHy } = await import("converters/ja/ja-hy");
            return (await jaHy(text)) as T;
          }
          case "el": {
            const { jaEl } = await import("converters/ja/ja-el");
            return (await jaEl(text)) as T;
          }
          case "ru": {
            const { jaRu } = await import("converters/ja/ja-ru");
            return (await jaRu(text)) as T;
          }
          case "uk": {
            const { jaUk } = await import("converters/ja/ja-uk");
            return (await jaUk(text)) as T;
          }
          case "bg": {
            const { jaBg } = await import("converters/ja/ja-bg");
            return (await jaBg(text)) as T;
          }
          case "mk": {
            const { jaMk } = await import("converters/ja/ja-mk");
            return (await jaMk(text)) as T;
          }
          case "az": {
            const { jaAz } = await import("converters/ja/ja-az");
            return (await jaAz(text)) as T;
          }
          case "bs": {
            const { jaBs } = await import("converters/ja/ja-bs");
            return (await jaBs(text)) as T;
          }
          case "ca": {
            const { jaCa } = await import("converters/ja/ja-ca");
            return (await jaCa(text)) as T;
          }
          case "cs": {
            const { jaCs } = await import("converters/ja/ja-cs");
            return (await jaCs(text)) as T;
          }
          case "da": {
            const { jaDa } = await import("converters/ja/ja-da");
            return (await jaDa(text)) as T;
          }
          case "de": {
            const { jaDe } = await import("converters/ja/ja-de");
            return (await jaDe(text)) as T;
          }
          case "en": {
            const { jaEn } = await import("converters/ja/ja-en");
            return (await jaEn(text)) as T;
          }
          case "es": {
            const { jaEs } = await import("converters/ja/ja-es");
            return (await jaEs(text)) as T;
          }
          case "et": {
            const { jaEt } = await import("converters/ja/ja-et");
            return (await jaEt(text)) as T;
          }
          case "fi": {
            const { jaFi } = await import("converters/ja/ja-fi");
            return (await jaFi(text)) as T;
          }
          case "fr": {
            const { jaFr } = await import("converters/ja/ja-fr");
            return (await jaFr(text)) as T;
          }
          case "hr": {
            const { jaHr } = await import("converters/ja/ja-hr");
            return (await jaHr(text)) as T;
          }
          case "hu": {
            const { jaHu } = await import("converters/ja/ja-hu");
            return (await jaHu(text)) as T;
          }
          case "id": {
            const { jaId } = await import("converters/ja/ja-id");
            return (await jaId(text)) as T;
          }
          case "is": {
            const { jaIs } = await import("converters/ja/ja-is");
            return (await jaIs(text)) as T;
          }
          case "it": {
            const { jaIt } = await import("converters/ja/ja-it");
            return (await jaIt(text)) as T;
          }
          case "kk": {
            const { jaKk } = await import("converters/ja/ja-kk");
            return (await jaKk(text)) as T;
          }
          case "lb": {
            const { jaLb } = await import("converters/ja/ja-lb");
            return (await jaLb(text)) as T;
          }
          case "lt": {
            const { jaLt } = await import("converters/ja/ja-lt");
            return (await jaLt(text)) as T;
          }
          case "lv": {
            const { jaLv } = await import("converters/ja/ja-lv");
            return (await jaLv(text)) as T;
          }
          case "ms": {
            const { jaMs } = await import("converters/ja/ja-ms");
            return (await jaMs(text)) as T;
          }
          case "mt": {
            const { jaMt } = await import("converters/ja/ja-mt");
            return (await jaMt(text)) as T;
          }
          case "nl": {
            const { jaNl } = await import("converters/ja/ja-nl");
            return (await jaNl(text)) as T;
          }
          case "no": {
            const { jaNo } = await import("converters/ja/ja-no");
            return (await jaNo(text)) as T;
          }
          case "pl": {
            const { jaPl } = await import("converters/ja/ja-pl");
            return (await jaPl(text)) as T;
          }
          case "pt": {
            const { jaPt } = await import("converters/ja/ja-pt");
            return (await jaPt(text)) as T;
          }
          case "ro": {
            const { jaRo } = await import("converters/ja/ja-ro");
            return (await jaRo(text)) as T;
          }
          case "sk": {
            const { jaSk } = await import("converters/ja/ja-sk");
            return (await jaSk(text)) as T;
          }
          case "sl": {
            const { jaSl } = await import("converters/ja/ja-sl");
            return (await jaSl(text)) as T;
          }
          case "sq": {
            const { jaSq } = await import("converters/ja/ja-sq");
            return (await jaSq(text)) as T;
          }
          case "sr": {
            const { jaSr } = await import("converters/ja/ja-sr");
            return (await jaSr(text)) as T;
          }
          case "sv": {
            const { jaSv } = await import("converters/ja/ja-sv");
            return (await jaSv(text)) as T;
          }
          case "tr": {
            const { jaTr } = await import("converters/ja/ja-tr");
            return (await jaTr(text)) as T;
          }
          case "vi": {
            const { jaVi } = await import("converters/ja/ja-vi");
            return (await jaVi(text)) as T;
          }
        }
        break;
      case "ko":
        switch (to) {
          case "zh": {
            const { koZh } = await import("converters/ko/ko-zh");
            return (await koZh(text)) as T;
          }
          case "ja": {
            const { koJa } = await import("converters/ko/ko-ja");
            return (await koJa(text)) as T;
          }
          case "hi": {
            const { koHi } = await import("converters/ko/ko-hi");
            return (await koHi(text)) as T;
          }
          case "bn": {
            const { koBn } = await import("converters/ko/ko-bn");
            return (await koBn(text)) as T;
          }
          case "ur": {
            const { koUr } = await import("converters/ko/ko-ur");
            return (await koUr(text)) as T;
          }
          case "fa": {
            const { koFa } = await import("converters/ko/ko-fa");
            return (await koFa(text)) as T;
          }
          case "ar": {
            const { koAr } = await import("converters/ko/ko-ar");
            return (await koAr(text)) as T;
          }
          case "he": {
            const { koHe } = await import("converters/ko/ko-he");
            return (await koHe(text)) as T;
          }
          case "ka": {
            const { koKa } = await import("converters/ko/ko-ka");
            return (await koKa(text)) as T;
          }
          case "hy": {
            const { koHy } = await import("converters/ko/ko-hy");
            return (await koHy(text)) as T;
          }
          case "el": {
            const { koEl } = await import("converters/ko/ko-el");
            return (await koEl(text)) as T;
          }
          case "ru": {
            const { koRu } = await import("converters/ko/ko-ru");
            return (await koRu(text)) as T;
          }
          case "uk": {
            const { koUk } = await import("converters/ko/ko-uk");
            return (await koUk(text)) as T;
          }
          case "bg": {
            const { koBg } = await import("converters/ko/ko-bg");
            return (await koBg(text)) as T;
          }
          case "mk": {
            const { koMk } = await import("converters/ko/ko-mk");
            return (await koMk(text)) as T;
          }
          case "az": {
            const { koAz } = await import("converters/ko/ko-az");
            return (await koAz(text)) as T;
          }
          case "bs": {
            const { koBs } = await import("converters/ko/ko-bs");
            return (await koBs(text)) as T;
          }
          case "ca": {
            const { koCa } = await import("converters/ko/ko-ca");
            return (await koCa(text)) as T;
          }
          case "cs": {
            const { koCs } = await import("converters/ko/ko-cs");
            return (await koCs(text)) as T;
          }
          case "da": {
            const { koDa } = await import("converters/ko/ko-da");
            return (await koDa(text)) as T;
          }
          case "de": {
            const { koDe } = await import("converters/ko/ko-de");
            return (await koDe(text)) as T;
          }
          case "en": {
            const { koEn } = await import("converters/ko/ko-en");
            return (await koEn(text)) as T;
          }
          case "es": {
            const { koEs } = await import("converters/ko/ko-es");
            return (await koEs(text)) as T;
          }
          case "et": {
            const { koEt } = await import("converters/ko/ko-et");
            return (await koEt(text)) as T;
          }
          case "fi": {
            const { koFi } = await import("converters/ko/ko-fi");
            return (await koFi(text)) as T;
          }
          case "fr": {
            const { koFr } = await import("converters/ko/ko-fr");
            return (await koFr(text)) as T;
          }
          case "hr": {
            const { koHr } = await import("converters/ko/ko-hr");
            return (await koHr(text)) as T;
          }
          case "hu": {
            const { koHu } = await import("converters/ko/ko-hu");
            return (await koHu(text)) as T;
          }
          case "id": {
            const { koId } = await import("converters/ko/ko-id");
            return (await koId(text)) as T;
          }
          case "is": {
            const { koIs } = await import("converters/ko/ko-is");
            return (await koIs(text)) as T;
          }
          case "it": {
            const { koIt } = await import("converters/ko/ko-it");
            return (await koIt(text)) as T;
          }
          case "kk": {
            const { koKk } = await import("converters/ko/ko-kk");
            return (await koKk(text)) as T;
          }
          case "lb": {
            const { koLb } = await import("converters/ko/ko-lb");
            return (await koLb(text)) as T;
          }
          case "lt": {
            const { koLt } = await import("converters/ko/ko-lt");
            return (await koLt(text)) as T;
          }
          case "lv": {
            const { koLv } = await import("converters/ko/ko-lv");
            return (await koLv(text)) as T;
          }
          case "ms": {
            const { koMs } = await import("converters/ko/ko-ms");
            return (await koMs(text)) as T;
          }
          case "mt": {
            const { koMt } = await import("converters/ko/ko-mt");
            return (await koMt(text)) as T;
          }
          case "nl": {
            const { koNl } = await import("converters/ko/ko-nl");
            return (await koNl(text)) as T;
          }
          case "no": {
            const { koNo } = await import("converters/ko/ko-no");
            return (await koNo(text)) as T;
          }
          case "pl": {
            const { koPl } = await import("converters/ko/ko-pl");
            return (await koPl(text)) as T;
          }
          case "pt": {
            const { koPt } = await import("converters/ko/ko-pt");
            return (await koPt(text)) as T;
          }
          case "ro": {
            const { koRo } = await import("converters/ko/ko-ro");
            return (await koRo(text)) as T;
          }
          case "sk": {
            const { koSk } = await import("converters/ko/ko-sk");
            return (await koSk(text)) as T;
          }
          case "sl": {
            const { koSl } = await import("converters/ko/ko-sl");
            return (await koSl(text)) as T;
          }
          case "sq": {
            const { koSq } = await import("converters/ko/ko-sq");
            return (await koSq(text)) as T;
          }
          case "sr": {
            const { koSr } = await import("converters/ko/ko-sr");
            return (await koSr(text)) as T;
          }
          case "sv": {
            const { koSv } = await import("converters/ko/ko-sv");
            return (await koSv(text)) as T;
          }
          case "tr": {
            const { koTr } = await import("converters/ko/ko-tr");
            return (await koTr(text)) as T;
          }
          case "vi": {
            const { koVi } = await import("converters/ko/ko-vi");
            return (await koVi(text)) as T;
          }
        }
        break;
      case "hi":
        switch (to) {
          case "zh": {
            const { hiZh } = await import("converters/hi/hi-zh");
            return (await hiZh(text)) as T;
          }
          case "ja": {
            const { hiJa } = await import("converters/hi/hi-ja");
            return (await hiJa(text)) as T;
          }
          case "ko": {
            const { hiKo } = await import("converters/hi/hi-ko");
            return (await hiKo(text)) as T;
          }
          case "bn": {
            const { hiBn } = await import("converters/hi/hi-bn");
            return (await hiBn(text)) as T;
          }
          case "ur": {
            const { hiUr } = await import("converters/hi/hi-ur");
            return (await hiUr(text)) as T;
          }
          case "fa": {
            const { hiFa } = await import("converters/hi/hi-fa");
            return (await hiFa(text)) as T;
          }
          case "ar": {
            const { hiAr } = await import("converters/hi/hi-ar");
            return (await hiAr(text)) as T;
          }
          case "he": {
            const { hiHe } = await import("converters/hi/hi-he");
            return (await hiHe(text)) as T;
          }
          case "ka": {
            const { hiKa } = await import("converters/hi/hi-ka");
            return (await hiKa(text)) as T;
          }
          case "hy": {
            const { hiHy } = await import("converters/hi/hi-hy");
            return (await hiHy(text)) as T;
          }
          case "el": {
            const { hiEl } = await import("converters/hi/hi-el");
            return (await hiEl(text)) as T;
          }
          case "ru": {
            const { hiRu } = await import("converters/hi/hi-ru");
            return (await hiRu(text)) as T;
          }
          case "uk": {
            const { hiUk } = await import("converters/hi/hi-uk");
            return (await hiUk(text)) as T;
          }
          case "bg": {
            const { hiBg } = await import("converters/hi/hi-bg");
            return (await hiBg(text)) as T;
          }
          case "mk": {
            const { hiMk } = await import("converters/hi/hi-mk");
            return (await hiMk(text)) as T;
          }
          case "az": {
            const { hiAz } = await import("converters/hi/hi-az");
            return (await hiAz(text)) as T;
          }
          case "bs": {
            const { hiBs } = await import("converters/hi/hi-bs");
            return (await hiBs(text)) as T;
          }
          case "ca": {
            const { hiCa } = await import("converters/hi/hi-ca");
            return (await hiCa(text)) as T;
          }
          case "cs": {
            const { hiCs } = await import("converters/hi/hi-cs");
            return (await hiCs(text)) as T;
          }
          case "da": {
            const { hiDa } = await import("converters/hi/hi-da");
            return (await hiDa(text)) as T;
          }
          case "de": {
            const { hiDe } = await import("converters/hi/hi-de");
            return (await hiDe(text)) as T;
          }
          case "en": {
            const { hiEn } = await import("converters/hi/hi-en");
            return (await hiEn(text)) as T;
          }
          case "es": {
            const { hiEs } = await import("converters/hi/hi-es");
            return (await hiEs(text)) as T;
          }
          case "et": {
            const { hiEt } = await import("converters/hi/hi-et");
            return (await hiEt(text)) as T;
          }
          case "fi": {
            const { hiFi } = await import("converters/hi/hi-fi");
            return (await hiFi(text)) as T;
          }
          case "fr": {
            const { hiFr } = await import("converters/hi/hi-fr");
            return (await hiFr(text)) as T;
          }
          case "hr": {
            const { hiHr } = await import("converters/hi/hi-hr");
            return (await hiHr(text)) as T;
          }
          case "hu": {
            const { hiHu } = await import("converters/hi/hi-hu");
            return (await hiHu(text)) as T;
          }
          case "id": {
            const { hiId } = await import("converters/hi/hi-id");
            return (await hiId(text)) as T;
          }
          case "is": {
            const { hiIs } = await import("converters/hi/hi-is");
            return (await hiIs(text)) as T;
          }
          case "it": {
            const { hiIt } = await import("converters/hi/hi-it");
            return (await hiIt(text)) as T;
          }
          case "kk": {
            const { hiKk } = await import("converters/hi/hi-kk");
            return (await hiKk(text)) as T;
          }
          case "lb": {
            const { hiLb } = await import("converters/hi/hi-lb");
            return (await hiLb(text)) as T;
          }
          case "lt": {
            const { hiLt } = await import("converters/hi/hi-lt");
            return (await hiLt(text)) as T;
          }
          case "lv": {
            const { hiLv } = await import("converters/hi/hi-lv");
            return (await hiLv(text)) as T;
          }
          case "ms": {
            const { hiMs } = await import("converters/hi/hi-ms");
            return (await hiMs(text)) as T;
          }
          case "mt": {
            const { hiMt } = await import("converters/hi/hi-mt");
            return (await hiMt(text)) as T;
          }
          case "nl": {
            const { hiNl } = await import("converters/hi/hi-nl");
            return (await hiNl(text)) as T;
          }
          case "no": {
            const { hiNo } = await import("converters/hi/hi-no");
            return (await hiNo(text)) as T;
          }
          case "pl": {
            const { hiPl } = await import("converters/hi/hi-pl");
            return (await hiPl(text)) as T;
          }
          case "pt": {
            const { hiPt } = await import("converters/hi/hi-pt");
            return (await hiPt(text)) as T;
          }
          case "ro": {
            const { hiRo } = await import("converters/hi/hi-ro");
            return (await hiRo(text)) as T;
          }
          case "sk": {
            const { hiSk } = await import("converters/hi/hi-sk");
            return (await hiSk(text)) as T;
          }
          case "sl": {
            const { hiSl } = await import("converters/hi/hi-sl");
            return (await hiSl(text)) as T;
          }
          case "sq": {
            const { hiSq } = await import("converters/hi/hi-sq");
            return (await hiSq(text)) as T;
          }
          case "sr": {
            const { hiSr } = await import("converters/hi/hi-sr");
            return (await hiSr(text)) as T;
          }
          case "sv": {
            const { hiSv } = await import("converters/hi/hi-sv");
            return (await hiSv(text)) as T;
          }
          case "tr": {
            const { hiTr } = await import("converters/hi/hi-tr");
            return (await hiTr(text)) as T;
          }
          case "vi": {
            const { hiVi } = await import("converters/hi/hi-vi");
            return (await hiVi(text)) as T;
          }
        }
        break;
      case "bn":
        switch (to) {
          case "zh": {
            const { bnZh } = await import("converters/bn/bn-zh");
            return (await bnZh(text)) as T;
          }
          case "ja": {
            const { bnJa } = await import("converters/bn/bn-ja");
            return (await bnJa(text)) as T;
          }
          case "ko": {
            const { bnKo } = await import("converters/bn/bn-ko");
            return (await bnKo(text)) as T;
          }
          case "hi": {
            const { bnHi } = await import("converters/bn/bn-hi");
            return (await bnHi(text)) as T;
          }
          case "ur": {
            const { bnUr } = await import("converters/bn/bn-ur");
            return (await bnUr(text)) as T;
          }
          case "fa": {
            const { bnFa } = await import("converters/bn/bn-fa");
            return (await bnFa(text)) as T;
          }
          case "ar": {
            const { bnAr } = await import("converters/bn/bn-ar");
            return (await bnAr(text)) as T;
          }
          case "he": {
            const { bnHe } = await import("converters/bn/bn-he");
            return (await bnHe(text)) as T;
          }
          case "ka": {
            const { bnKa } = await import("converters/bn/bn-ka");
            return (await bnKa(text)) as T;
          }
          case "hy": {
            const { bnHy } = await import("converters/bn/bn-hy");
            return (await bnHy(text)) as T;
          }
          case "el": {
            const { bnEl } = await import("converters/bn/bn-el");
            return (await bnEl(text)) as T;
          }
          case "ru": {
            const { bnRu } = await import("converters/bn/bn-ru");
            return (await bnRu(text)) as T;
          }
          case "uk": {
            const { bnUk } = await import("converters/bn/bn-uk");
            return (await bnUk(text)) as T;
          }
          case "bg": {
            const { bnBg } = await import("converters/bn/bn-bg");
            return (await bnBg(text)) as T;
          }
          case "mk": {
            const { bnMk } = await import("converters/bn/bn-mk");
            return (await bnMk(text)) as T;
          }
          case "az": {
            const { bnAz } = await import("converters/bn/bn-az");
            return (await bnAz(text)) as T;
          }
          case "bs": {
            const { bnBs } = await import("converters/bn/bn-bs");
            return (await bnBs(text)) as T;
          }
          case "ca": {
            const { bnCa } = await import("converters/bn/bn-ca");
            return (await bnCa(text)) as T;
          }
          case "cs": {
            const { bnCs } = await import("converters/bn/bn-cs");
            return (await bnCs(text)) as T;
          }
          case "da": {
            const { bnDa } = await import("converters/bn/bn-da");
            return (await bnDa(text)) as T;
          }
          case "de": {
            const { bnDe } = await import("converters/bn/bn-de");
            return (await bnDe(text)) as T;
          }
          case "en": {
            const { bnEn } = await import("converters/bn/bn-en");
            return (await bnEn(text)) as T;
          }
          case "es": {
            const { bnEs } = await import("converters/bn/bn-es");
            return (await bnEs(text)) as T;
          }
          case "et": {
            const { bnEt } = await import("converters/bn/bn-et");
            return (await bnEt(text)) as T;
          }
          case "fi": {
            const { bnFi } = await import("converters/bn/bn-fi");
            return (await bnFi(text)) as T;
          }
          case "fr": {
            const { bnFr } = await import("converters/bn/bn-fr");
            return (await bnFr(text)) as T;
          }
          case "hr": {
            const { bnHr } = await import("converters/bn/bn-hr");
            return (await bnHr(text)) as T;
          }
          case "hu": {
            const { bnHu } = await import("converters/bn/bn-hu");
            return (await bnHu(text)) as T;
          }
          case "id": {
            const { bnId } = await import("converters/bn/bn-id");
            return (await bnId(text)) as T;
          }
          case "is": {
            const { bnIs } = await import("converters/bn/bn-is");
            return (await bnIs(text)) as T;
          }
          case "it": {
            const { bnIt } = await import("converters/bn/bn-it");
            return (await bnIt(text)) as T;
          }
          case "kk": {
            const { bnKk } = await import("converters/bn/bn-kk");
            return (await bnKk(text)) as T;
          }
          case "lb": {
            const { bnLb } = await import("converters/bn/bn-lb");
            return (await bnLb(text)) as T;
          }
          case "lt": {
            const { bnLt } = await import("converters/bn/bn-lt");
            return (await bnLt(text)) as T;
          }
          case "lv": {
            const { bnLv } = await import("converters/bn/bn-lv");
            return (await bnLv(text)) as T;
          }
          case "ms": {
            const { bnMs } = await import("converters/bn/bn-ms");
            return (await bnMs(text)) as T;
          }
          case "mt": {
            const { bnMt } = await import("converters/bn/bn-mt");
            return (await bnMt(text)) as T;
          }
          case "nl": {
            const { bnNl } = await import("converters/bn/bn-nl");
            return (await bnNl(text)) as T;
          }
          case "no": {
            const { bnNo } = await import("converters/bn/bn-no");
            return (await bnNo(text)) as T;
          }
          case "pl": {
            const { bnPl } = await import("converters/bn/bn-pl");
            return (await bnPl(text)) as T;
          }
          case "pt": {
            const { bnPt } = await import("converters/bn/bn-pt");
            return (await bnPt(text)) as T;
          }
          case "ro": {
            const { bnRo } = await import("converters/bn/bn-ro");
            return (await bnRo(text)) as T;
          }
          case "sk": {
            const { bnSk } = await import("converters/bn/bn-sk");
            return (await bnSk(text)) as T;
          }
          case "sl": {
            const { bnSl } = await import("converters/bn/bn-sl");
            return (await bnSl(text)) as T;
          }
          case "sq": {
            const { bnSq } = await import("converters/bn/bn-sq");
            return (await bnSq(text)) as T;
          }
          case "sr": {
            const { bnSr } = await import("converters/bn/bn-sr");
            return (await bnSr(text)) as T;
          }
          case "sv": {
            const { bnSv } = await import("converters/bn/bn-sv");
            return (await bnSv(text)) as T;
          }
          case "tr": {
            const { bnTr } = await import("converters/bn/bn-tr");
            return (await bnTr(text)) as T;
          }
          case "vi": {
            const { bnVi } = await import("converters/bn/bn-vi");
            return (await bnVi(text)) as T;
          }
        }
        break;
      case "ur":
        switch (to) {
          case "zh": {
            const { urZh } = await import("converters/ur/ur-zh");
            return (await urZh(text)) as T;
          }
          case "ja": {
            const { urJa } = await import("converters/ur/ur-ja");
            return (await urJa(text)) as T;
          }
          case "ko": {
            const { urKo } = await import("converters/ur/ur-ko");
            return (await urKo(text)) as T;
          }
          case "hi": {
            const { urHi } = await import("converters/ur/ur-hi");
            return (await urHi(text)) as T;
          }
          case "bn": {
            const { urBn } = await import("converters/ur/ur-bn");
            return (await urBn(text)) as T;
          }
          case "fa": {
            const { urFa } = await import("converters/ur/ur-fa");
            return (await urFa(text)) as T;
          }
          case "ar": {
            const { urAr } = await import("converters/ur/ur-ar");
            return (await urAr(text)) as T;
          }
          case "he": {
            const { urHe } = await import("converters/ur/ur-he");
            return (await urHe(text)) as T;
          }
          case "ka": {
            const { urKa } = await import("converters/ur/ur-ka");
            return (await urKa(text)) as T;
          }
          case "hy": {
            const { urHy } = await import("converters/ur/ur-hy");
            return (await urHy(text)) as T;
          }
          case "el": {
            const { urEl } = await import("converters/ur/ur-el");
            return (await urEl(text)) as T;
          }
          case "ru": {
            const { urRu } = await import("converters/ur/ur-ru");
            return (await urRu(text)) as T;
          }
          case "uk": {
            const { urUk } = await import("converters/ur/ur-uk");
            return (await urUk(text)) as T;
          }
          case "bg": {
            const { urBg } = await import("converters/ur/ur-bg");
            return (await urBg(text)) as T;
          }
          case "mk": {
            const { urMk } = await import("converters/ur/ur-mk");
            return (await urMk(text)) as T;
          }
          case "az": {
            const { urAz } = await import("converters/ur/ur-az");
            return (await urAz(text)) as T;
          }
          case "bs": {
            const { urBs } = await import("converters/ur/ur-bs");
            return (await urBs(text)) as T;
          }
          case "ca": {
            const { urCa } = await import("converters/ur/ur-ca");
            return (await urCa(text)) as T;
          }
          case "cs": {
            const { urCs } = await import("converters/ur/ur-cs");
            return (await urCs(text)) as T;
          }
          case "da": {
            const { urDa } = await import("converters/ur/ur-da");
            return (await urDa(text)) as T;
          }
          case "de": {
            const { urDe } = await import("converters/ur/ur-de");
            return (await urDe(text)) as T;
          }
          case "en": {
            const { urEn } = await import("converters/ur/ur-en");
            return (await urEn(text)) as T;
          }
          case "es": {
            const { urEs } = await import("converters/ur/ur-es");
            return (await urEs(text)) as T;
          }
          case "et": {
            const { urEt } = await import("converters/ur/ur-et");
            return (await urEt(text)) as T;
          }
          case "fi": {
            const { urFi } = await import("converters/ur/ur-fi");
            return (await urFi(text)) as T;
          }
          case "fr": {
            const { urFr } = await import("converters/ur/ur-fr");
            return (await urFr(text)) as T;
          }
          case "hr": {
            const { urHr } = await import("converters/ur/ur-hr");
            return (await urHr(text)) as T;
          }
          case "hu": {
            const { urHu } = await import("converters/ur/ur-hu");
            return (await urHu(text)) as T;
          }
          case "id": {
            const { urId } = await import("converters/ur/ur-id");
            return (await urId(text)) as T;
          }
          case "is": {
            const { urIs } = await import("converters/ur/ur-is");
            return (await urIs(text)) as T;
          }
          case "it": {
            const { urIt } = await import("converters/ur/ur-it");
            return (await urIt(text)) as T;
          }
          case "kk": {
            const { urKk } = await import("converters/ur/ur-kk");
            return (await urKk(text)) as T;
          }
          case "lb": {
            const { urLb } = await import("converters/ur/ur-lb");
            return (await urLb(text)) as T;
          }
          case "lt": {
            const { urLt } = await import("converters/ur/ur-lt");
            return (await urLt(text)) as T;
          }
          case "lv": {
            const { urLv } = await import("converters/ur/ur-lv");
            return (await urLv(text)) as T;
          }
          case "ms": {
            const { urMs } = await import("converters/ur/ur-ms");
            return (await urMs(text)) as T;
          }
          case "mt": {
            const { urMt } = await import("converters/ur/ur-mt");
            return (await urMt(text)) as T;
          }
          case "nl": {
            const { urNl } = await import("converters/ur/ur-nl");
            return (await urNl(text)) as T;
          }
          case "no": {
            const { urNo } = await import("converters/ur/ur-no");
            return (await urNo(text)) as T;
          }
          case "pl": {
            const { urPl } = await import("converters/ur/ur-pl");
            return (await urPl(text)) as T;
          }
          case "pt": {
            const { urPt } = await import("converters/ur/ur-pt");
            return (await urPt(text)) as T;
          }
          case "ro": {
            const { urRo } = await import("converters/ur/ur-ro");
            return (await urRo(text)) as T;
          }
          case "sk": {
            const { urSk } = await import("converters/ur/ur-sk");
            return (await urSk(text)) as T;
          }
          case "sl": {
            const { urSl } = await import("converters/ur/ur-sl");
            return (await urSl(text)) as T;
          }
          case "sq": {
            const { urSq } = await import("converters/ur/ur-sq");
            return (await urSq(text)) as T;
          }
          case "sr": {
            const { urSr } = await import("converters/ur/ur-sr");
            return (await urSr(text)) as T;
          }
          case "sv": {
            const { urSv } = await import("converters/ur/ur-sv");
            return (await urSv(text)) as T;
          }
          case "tr": {
            const { urTr } = await import("converters/ur/ur-tr");
            return (await urTr(text)) as T;
          }
          case "vi": {
            const { urVi } = await import("converters/ur/ur-vi");
            return (await urVi(text)) as T;
          }
        }
        break;
      case "fa":
        switch (to) {
          case "zh": {
            const { faZh } = await import("converters/fa/fa-zh");
            return (await faZh(text)) as T;
          }
          case "ja": {
            const { faJa } = await import("converters/fa/fa-ja");
            return (await faJa(text)) as T;
          }
          case "ko": {
            const { faKo } = await import("converters/fa/fa-ko");
            return (await faKo(text)) as T;
          }
          case "hi": {
            const { faHi } = await import("converters/fa/fa-hi");
            return (await faHi(text)) as T;
          }
          case "bn": {
            const { faBn } = await import("converters/fa/fa-bn");
            return (await faBn(text)) as T;
          }
          case "ur": {
            const { faUr } = await import("converters/fa/fa-ur");
            return (await faUr(text)) as T;
          }
          case "ar": {
            const { faAr } = await import("converters/fa/fa-ar");
            return (await faAr(text)) as T;
          }
          case "he": {
            const { faHe } = await import("converters/fa/fa-he");
            return (await faHe(text)) as T;
          }
          case "ka": {
            const { faKa } = await import("converters/fa/fa-ka");
            return (await faKa(text)) as T;
          }
          case "hy": {
            const { faHy } = await import("converters/fa/fa-hy");
            return (await faHy(text)) as T;
          }
          case "el": {
            const { faEl } = await import("converters/fa/fa-el");
            return (await faEl(text)) as T;
          }
          case "ru": {
            const { faRu } = await import("converters/fa/fa-ru");
            return (await faRu(text)) as T;
          }
          case "uk": {
            const { faUk } = await import("converters/fa/fa-uk");
            return (await faUk(text)) as T;
          }
          case "bg": {
            const { faBg } = await import("converters/fa/fa-bg");
            return (await faBg(text)) as T;
          }
          case "mk": {
            const { faMk } = await import("converters/fa/fa-mk");
            return (await faMk(text)) as T;
          }
          case "az": {
            const { faAz } = await import("converters/fa/fa-az");
            return (await faAz(text)) as T;
          }
          case "bs": {
            const { faBs } = await import("converters/fa/fa-bs");
            return (await faBs(text)) as T;
          }
          case "ca": {
            const { faCa } = await import("converters/fa/fa-ca");
            return (await faCa(text)) as T;
          }
          case "cs": {
            const { faCs } = await import("converters/fa/fa-cs");
            return (await faCs(text)) as T;
          }
          case "da": {
            const { faDa } = await import("converters/fa/fa-da");
            return (await faDa(text)) as T;
          }
          case "de": {
            const { faDe } = await import("converters/fa/fa-de");
            return (await faDe(text)) as T;
          }
          case "en": {
            const { faEn } = await import("converters/fa/fa-en");
            return (await faEn(text)) as T;
          }
          case "es": {
            const { faEs } = await import("converters/fa/fa-es");
            return (await faEs(text)) as T;
          }
          case "et": {
            const { faEt } = await import("converters/fa/fa-et");
            return (await faEt(text)) as T;
          }
          case "fi": {
            const { faFi } = await import("converters/fa/fa-fi");
            return (await faFi(text)) as T;
          }
          case "fr": {
            const { faFr } = await import("converters/fa/fa-fr");
            return (await faFr(text)) as T;
          }
          case "hr": {
            const { faHr } = await import("converters/fa/fa-hr");
            return (await faHr(text)) as T;
          }
          case "hu": {
            const { faHu } = await import("converters/fa/fa-hu");
            return (await faHu(text)) as T;
          }
          case "id": {
            const { faId } = await import("converters/fa/fa-id");
            return (await faId(text)) as T;
          }
          case "is": {
            const { faIs } = await import("converters/fa/fa-is");
            return (await faIs(text)) as T;
          }
          case "it": {
            const { faIt } = await import("converters/fa/fa-it");
            return (await faIt(text)) as T;
          }
          case "kk": {
            const { faKk } = await import("converters/fa/fa-kk");
            return (await faKk(text)) as T;
          }
          case "lb": {
            const { faLb } = await import("converters/fa/fa-lb");
            return (await faLb(text)) as T;
          }
          case "lt": {
            const { faLt } = await import("converters/fa/fa-lt");
            return (await faLt(text)) as T;
          }
          case "lv": {
            const { faLv } = await import("converters/fa/fa-lv");
            return (await faLv(text)) as T;
          }
          case "ms": {
            const { faMs } = await import("converters/fa/fa-ms");
            return (await faMs(text)) as T;
          }
          case "mt": {
            const { faMt } = await import("converters/fa/fa-mt");
            return (await faMt(text)) as T;
          }
          case "nl": {
            const { faNl } = await import("converters/fa/fa-nl");
            return (await faNl(text)) as T;
          }
          case "no": {
            const { faNo } = await import("converters/fa/fa-no");
            return (await faNo(text)) as T;
          }
          case "pl": {
            const { faPl } = await import("converters/fa/fa-pl");
            return (await faPl(text)) as T;
          }
          case "pt": {
            const { faPt } = await import("converters/fa/fa-pt");
            return (await faPt(text)) as T;
          }
          case "ro": {
            const { faRo } = await import("converters/fa/fa-ro");
            return (await faRo(text)) as T;
          }
          case "sk": {
            const { faSk } = await import("converters/fa/fa-sk");
            return (await faSk(text)) as T;
          }
          case "sl": {
            const { faSl } = await import("converters/fa/fa-sl");
            return (await faSl(text)) as T;
          }
          case "sq": {
            const { faSq } = await import("converters/fa/fa-sq");
            return (await faSq(text)) as T;
          }
          case "sr": {
            const { faSr } = await import("converters/fa/fa-sr");
            return (await faSr(text)) as T;
          }
          case "sv": {
            const { faSv } = await import("converters/fa/fa-sv");
            return (await faSv(text)) as T;
          }
          case "tr": {
            const { faTr } = await import("converters/fa/fa-tr");
            return (await faTr(text)) as T;
          }
          case "vi": {
            const { faVi } = await import("converters/fa/fa-vi");
            return (await faVi(text)) as T;
          }
        }
        break;
      case "ar":
        switch (to) {
          case "zh": {
            const { arZh } = await import("converters/ar/ar-zh");
            return (await arZh(text)) as T;
          }
          case "ja": {
            const { arJa } = await import("converters/ar/ar-ja");
            return (await arJa(text)) as T;
          }
          case "ko": {
            const { arKo } = await import("converters/ar/ar-ko");
            return (await arKo(text)) as T;
          }
          case "hi": {
            const { arHi } = await import("converters/ar/ar-hi");
            return (await arHi(text)) as T;
          }
          case "bn": {
            const { arBn } = await import("converters/ar/ar-bn");
            return (await arBn(text)) as T;
          }
          case "ur": {
            const { arUr } = await import("converters/ar/ar-ur");
            return (await arUr(text)) as T;
          }
          case "fa": {
            const { arFa } = await import("converters/ar/ar-fa");
            return (await arFa(text)) as T;
          }
          case "he": {
            const { arHe } = await import("converters/ar/ar-he");
            return (await arHe(text)) as T;
          }
          case "ka": {
            const { arKa } = await import("converters/ar/ar-ka");
            return (await arKa(text)) as T;
          }
          case "hy": {
            const { arHy } = await import("converters/ar/ar-hy");
            return (await arHy(text)) as T;
          }
          case "el": {
            const { arEl } = await import("converters/ar/ar-el");
            return (await arEl(text)) as T;
          }
          case "ru": {
            const { arRu } = await import("converters/ar/ar-ru");
            return (await arRu(text)) as T;
          }
          case "uk": {
            const { arUk } = await import("converters/ar/ar-uk");
            return (await arUk(text)) as T;
          }
          case "bg": {
            const { arBg } = await import("converters/ar/ar-bg");
            return (await arBg(text)) as T;
          }
          case "mk": {
            const { arMk } = await import("converters/ar/ar-mk");
            return (await arMk(text)) as T;
          }
          case "az": {
            const { arAz } = await import("converters/ar/ar-az");
            return (await arAz(text)) as T;
          }
          case "bs": {
            const { arBs } = await import("converters/ar/ar-bs");
            return (await arBs(text)) as T;
          }
          case "ca": {
            const { arCa } = await import("converters/ar/ar-ca");
            return (await arCa(text)) as T;
          }
          case "cs": {
            const { arCs } = await import("converters/ar/ar-cs");
            return (await arCs(text)) as T;
          }
          case "da": {
            const { arDa } = await import("converters/ar/ar-da");
            return (await arDa(text)) as T;
          }
          case "de": {
            const { arDe } = await import("converters/ar/ar-de");
            return (await arDe(text)) as T;
          }
          case "en": {
            const { arEn } = await import("converters/ar/ar-en");
            return (await arEn(text)) as T;
          }
          case "es": {
            const { arEs } = await import("converters/ar/ar-es");
            return (await arEs(text)) as T;
          }
          case "et": {
            const { arEt } = await import("converters/ar/ar-et");
            return (await arEt(text)) as T;
          }
          case "fi": {
            const { arFi } = await import("converters/ar/ar-fi");
            return (await arFi(text)) as T;
          }
          case "fr": {
            const { arFr } = await import("converters/ar/ar-fr");
            return (await arFr(text)) as T;
          }
          case "hr": {
            const { arHr } = await import("converters/ar/ar-hr");
            return (await arHr(text)) as T;
          }
          case "hu": {
            const { arHu } = await import("converters/ar/ar-hu");
            return (await arHu(text)) as T;
          }
          case "id": {
            const { arId } = await import("converters/ar/ar-id");
            return (await arId(text)) as T;
          }
          case "is": {
            const { arIs } = await import("converters/ar/ar-is");
            return (await arIs(text)) as T;
          }
          case "it": {
            const { arIt } = await import("converters/ar/ar-it");
            return (await arIt(text)) as T;
          }
          case "kk": {
            const { arKk } = await import("converters/ar/ar-kk");
            return (await arKk(text)) as T;
          }
          case "lb": {
            const { arLb } = await import("converters/ar/ar-lb");
            return (await arLb(text)) as T;
          }
          case "lt": {
            const { arLt } = await import("converters/ar/ar-lt");
            return (await arLt(text)) as T;
          }
          case "lv": {
            const { arLv } = await import("converters/ar/ar-lv");
            return (await arLv(text)) as T;
          }
          case "ms": {
            const { arMs } = await import("converters/ar/ar-ms");
            return (await arMs(text)) as T;
          }
          case "mt": {
            const { arMt } = await import("converters/ar/ar-mt");
            return (await arMt(text)) as T;
          }
          case "nl": {
            const { arNl } = await import("converters/ar/ar-nl");
            return (await arNl(text)) as T;
          }
          case "no": {
            const { arNo } = await import("converters/ar/ar-no");
            return (await arNo(text)) as T;
          }
          case "pl": {
            const { arPl } = await import("converters/ar/ar-pl");
            return (await arPl(text)) as T;
          }
          case "pt": {
            const { arPt } = await import("converters/ar/ar-pt");
            return (await arPt(text)) as T;
          }
          case "ro": {
            const { arRo } = await import("converters/ar/ar-ro");
            return (await arRo(text)) as T;
          }
          case "sk": {
            const { arSk } = await import("converters/ar/ar-sk");
            return (await arSk(text)) as T;
          }
          case "sl": {
            const { arSl } = await import("converters/ar/ar-sl");
            return (await arSl(text)) as T;
          }
          case "sq": {
            const { arSq } = await import("converters/ar/ar-sq");
            return (await arSq(text)) as T;
          }
          case "sr": {
            const { arSr } = await import("converters/ar/ar-sr");
            return (await arSr(text)) as T;
          }
          case "sv": {
            const { arSv } = await import("converters/ar/ar-sv");
            return (await arSv(text)) as T;
          }
          case "tr": {
            const { arTr } = await import("converters/ar/ar-tr");
            return (await arTr(text)) as T;
          }
          case "vi": {
            const { arVi } = await import("converters/ar/ar-vi");
            return (await arVi(text)) as T;
          }
        }
        break;
      case "he":
        switch (to) {
          case "zh": {
            const { heZh } = await import("converters/he/he-zh");
            return (await heZh(text)) as T;
          }
          case "ja": {
            const { heJa } = await import("converters/he/he-ja");
            return (await heJa(text)) as T;
          }
          case "ko": {
            const { heKo } = await import("converters/he/he-ko");
            return (await heKo(text)) as T;
          }
          case "hi": {
            const { heHi } = await import("converters/he/he-hi");
            return (await heHi(text)) as T;
          }
          case "bn": {
            const { heBn } = await import("converters/he/he-bn");
            return (await heBn(text)) as T;
          }
          case "ur": {
            const { heUr } = await import("converters/he/he-ur");
            return (await heUr(text)) as T;
          }
          case "fa": {
            const { heFa } = await import("converters/he/he-fa");
            return (await heFa(text)) as T;
          }
          case "ar": {
            const { heAr } = await import("converters/he/he-ar");
            return (await heAr(text)) as T;
          }
          case "ka": {
            const { heKa } = await import("converters/he/he-ka");
            return (await heKa(text)) as T;
          }
          case "hy": {
            const { heHy } = await import("converters/he/he-hy");
            return (await heHy(text)) as T;
          }
          case "el": {
            const { heEl } = await import("converters/he/he-el");
            return (await heEl(text)) as T;
          }
          case "ru": {
            const { heRu } = await import("converters/he/he-ru");
            return (await heRu(text)) as T;
          }
          case "uk": {
            const { heUk } = await import("converters/he/he-uk");
            return (await heUk(text)) as T;
          }
          case "bg": {
            const { heBg } = await import("converters/he/he-bg");
            return (await heBg(text)) as T;
          }
          case "mk": {
            const { heMk } = await import("converters/he/he-mk");
            return (await heMk(text)) as T;
          }
          case "az": {
            const { heAz } = await import("converters/he/he-az");
            return (await heAz(text)) as T;
          }
          case "bs": {
            const { heBs } = await import("converters/he/he-bs");
            return (await heBs(text)) as T;
          }
          case "ca": {
            const { heCa } = await import("converters/he/he-ca");
            return (await heCa(text)) as T;
          }
          case "cs": {
            const { heCs } = await import("converters/he/he-cs");
            return (await heCs(text)) as T;
          }
          case "da": {
            const { heDa } = await import("converters/he/he-da");
            return (await heDa(text)) as T;
          }
          case "de": {
            const { heDe } = await import("converters/he/he-de");
            return (await heDe(text)) as T;
          }
          case "en": {
            const { heEn } = await import("converters/he/he-en");
            return (await heEn(text)) as T;
          }
          case "es": {
            const { heEs } = await import("converters/he/he-es");
            return (await heEs(text)) as T;
          }
          case "et": {
            const { heEt } = await import("converters/he/he-et");
            return (await heEt(text)) as T;
          }
          case "fi": {
            const { heFi } = await import("converters/he/he-fi");
            return (await heFi(text)) as T;
          }
          case "fr": {
            const { heFr } = await import("converters/he/he-fr");
            return (await heFr(text)) as T;
          }
          case "hr": {
            const { heHr } = await import("converters/he/he-hr");
            return (await heHr(text)) as T;
          }
          case "hu": {
            const { heHu } = await import("converters/he/he-hu");
            return (await heHu(text)) as T;
          }
          case "id": {
            const { heId } = await import("converters/he/he-id");
            return (await heId(text)) as T;
          }
          case "is": {
            const { heIs } = await import("converters/he/he-is");
            return (await heIs(text)) as T;
          }
          case "it": {
            const { heIt } = await import("converters/he/he-it");
            return (await heIt(text)) as T;
          }
          case "kk": {
            const { heKk } = await import("converters/he/he-kk");
            return (await heKk(text)) as T;
          }
          case "lb": {
            const { heLb } = await import("converters/he/he-lb");
            return (await heLb(text)) as T;
          }
          case "lt": {
            const { heLt } = await import("converters/he/he-lt");
            return (await heLt(text)) as T;
          }
          case "lv": {
            const { heLv } = await import("converters/he/he-lv");
            return (await heLv(text)) as T;
          }
          case "ms": {
            const { heMs } = await import("converters/he/he-ms");
            return (await heMs(text)) as T;
          }
          case "mt": {
            const { heMt } = await import("converters/he/he-mt");
            return (await heMt(text)) as T;
          }
          case "nl": {
            const { heNl } = await import("converters/he/he-nl");
            return (await heNl(text)) as T;
          }
          case "no": {
            const { heNo } = await import("converters/he/he-no");
            return (await heNo(text)) as T;
          }
          case "pl": {
            const { hePl } = await import("converters/he/he-pl");
            return (await hePl(text)) as T;
          }
          case "pt": {
            const { hePt } = await import("converters/he/he-pt");
            return (await hePt(text)) as T;
          }
          case "ro": {
            const { heRo } = await import("converters/he/he-ro");
            return (await heRo(text)) as T;
          }
          case "sk": {
            const { heSk } = await import("converters/he/he-sk");
            return (await heSk(text)) as T;
          }
          case "sl": {
            const { heSl } = await import("converters/he/he-sl");
            return (await heSl(text)) as T;
          }
          case "sq": {
            const { heSq } = await import("converters/he/he-sq");
            return (await heSq(text)) as T;
          }
          case "sr": {
            const { heSr } = await import("converters/he/he-sr");
            return (await heSr(text)) as T;
          }
          case "sv": {
            const { heSv } = await import("converters/he/he-sv");
            return (await heSv(text)) as T;
          }
          case "tr": {
            const { heTr } = await import("converters/he/he-tr");
            return (await heTr(text)) as T;
          }
          case "vi": {
            const { heVi } = await import("converters/he/he-vi");
            return (await heVi(text)) as T;
          }
        }
        break;
      case "ka":
        switch (to) {
          case "zh": {
            const { kaZh } = await import("converters/ka/ka-zh");
            return (await kaZh(text)) as T;
          }
          case "ja": {
            const { kaJa } = await import("converters/ka/ka-ja");
            return (await kaJa(text)) as T;
          }
          case "ko": {
            const { kaKo } = await import("converters/ka/ka-ko");
            return (await kaKo(text)) as T;
          }
          case "hi": {
            const { kaHi } = await import("converters/ka/ka-hi");
            return (await kaHi(text)) as T;
          }
          case "bn": {
            const { kaBn } = await import("converters/ka/ka-bn");
            return (await kaBn(text)) as T;
          }
          case "ur": {
            const { kaUr } = await import("converters/ka/ka-ur");
            return (await kaUr(text)) as T;
          }
          case "fa": {
            const { kaFa } = await import("converters/ka/ka-fa");
            return (await kaFa(text)) as T;
          }
          case "ar": {
            const { kaAr } = await import("converters/ka/ka-ar");
            return (await kaAr(text)) as T;
          }
          case "he": {
            const { kaHe } = await import("converters/ka/ka-he");
            return (await kaHe(text)) as T;
          }
          case "hy": {
            const { kaHy } = await import("converters/ka/ka-hy");
            return (await kaHy(text)) as T;
          }
          case "el": {
            const { kaEl } = await import("converters/ka/ka-el");
            return (await kaEl(text)) as T;
          }
          case "ru": {
            const { kaRu } = await import("converters/ka/ka-ru");
            return (await kaRu(text)) as T;
          }
          case "uk": {
            const { kaUk } = await import("converters/ka/ka-uk");
            return (await kaUk(text)) as T;
          }
          case "bg": {
            const { kaBg } = await import("converters/ka/ka-bg");
            return (await kaBg(text)) as T;
          }
          case "mk": {
            const { kaMk } = await import("converters/ka/ka-mk");
            return (await kaMk(text)) as T;
          }
          case "az": {
            const { kaAz } = await import("converters/ka/ka-az");
            return (await kaAz(text)) as T;
          }
          case "bs": {
            const { kaBs } = await import("converters/ka/ka-bs");
            return (await kaBs(text)) as T;
          }
          case "ca": {
            const { kaCa } = await import("converters/ka/ka-ca");
            return (await kaCa(text)) as T;
          }
          case "cs": {
            const { kaCs } = await import("converters/ka/ka-cs");
            return (await kaCs(text)) as T;
          }
          case "da": {
            const { kaDa } = await import("converters/ka/ka-da");
            return (await kaDa(text)) as T;
          }
          case "de": {
            const { kaDe } = await import("converters/ka/ka-de");
            return (await kaDe(text)) as T;
          }
          case "en": {
            const { kaEn } = await import("converters/ka/ka-en");
            return (await kaEn(text)) as T;
          }
          case "es": {
            const { kaEs } = await import("converters/ka/ka-es");
            return (await kaEs(text)) as T;
          }
          case "et": {
            const { kaEt } = await import("converters/ka/ka-et");
            return (await kaEt(text)) as T;
          }
          case "fi": {
            const { kaFi } = await import("converters/ka/ka-fi");
            return (await kaFi(text)) as T;
          }
          case "fr": {
            const { kaFr } = await import("converters/ka/ka-fr");
            return (await kaFr(text)) as T;
          }
          case "hr": {
            const { kaHr } = await import("converters/ka/ka-hr");
            return (await kaHr(text)) as T;
          }
          case "hu": {
            const { kaHu } = await import("converters/ka/ka-hu");
            return (await kaHu(text)) as T;
          }
          case "id": {
            const { kaId } = await import("converters/ka/ka-id");
            return (await kaId(text)) as T;
          }
          case "is": {
            const { kaIs } = await import("converters/ka/ka-is");
            return (await kaIs(text)) as T;
          }
          case "it": {
            const { kaIt } = await import("converters/ka/ka-it");
            return (await kaIt(text)) as T;
          }
          case "kk": {
            const { kaKk } = await import("converters/ka/ka-kk");
            return (await kaKk(text)) as T;
          }
          case "lb": {
            const { kaLb } = await import("converters/ka/ka-lb");
            return (await kaLb(text)) as T;
          }
          case "lt": {
            const { kaLt } = await import("converters/ka/ka-lt");
            return (await kaLt(text)) as T;
          }
          case "lv": {
            const { kaLv } = await import("converters/ka/ka-lv");
            return (await kaLv(text)) as T;
          }
          case "ms": {
            const { kaMs } = await import("converters/ka/ka-ms");
            return (await kaMs(text)) as T;
          }
          case "mt": {
            const { kaMt } = await import("converters/ka/ka-mt");
            return (await kaMt(text)) as T;
          }
          case "nl": {
            const { kaNl } = await import("converters/ka/ka-nl");
            return (await kaNl(text)) as T;
          }
          case "no": {
            const { kaNo } = await import("converters/ka/ka-no");
            return (await kaNo(text)) as T;
          }
          case "pl": {
            const { kaPl } = await import("converters/ka/ka-pl");
            return (await kaPl(text)) as T;
          }
          case "pt": {
            const { kaPt } = await import("converters/ka/ka-pt");
            return (await kaPt(text)) as T;
          }
          case "ro": {
            const { kaRo } = await import("converters/ka/ka-ro");
            return (await kaRo(text)) as T;
          }
          case "sk": {
            const { kaSk } = await import("converters/ka/ka-sk");
            return (await kaSk(text)) as T;
          }
          case "sl": {
            const { kaSl } = await import("converters/ka/ka-sl");
            return (await kaSl(text)) as T;
          }
          case "sq": {
            const { kaSq } = await import("converters/ka/ka-sq");
            return (await kaSq(text)) as T;
          }
          case "sr": {
            const { kaSr } = await import("converters/ka/ka-sr");
            return (await kaSr(text)) as T;
          }
          case "sv": {
            const { kaSv } = await import("converters/ka/ka-sv");
            return (await kaSv(text)) as T;
          }
          case "tr": {
            const { kaTr } = await import("converters/ka/ka-tr");
            return (await kaTr(text)) as T;
          }
          case "vi": {
            const { kaVi } = await import("converters/ka/ka-vi");
            return (await kaVi(text)) as T;
          }
        }
        break;
      case "hy":
        switch (to) {
          case "zh": {
            const { hyZh } = await import("converters/hy/hy-zh");
            return (await hyZh(text)) as T;
          }
          case "ja": {
            const { hyJa } = await import("converters/hy/hy-ja");
            return (await hyJa(text)) as T;
          }
          case "ko": {
            const { hyKo } = await import("converters/hy/hy-ko");
            return (await hyKo(text)) as T;
          }
          case "hi": {
            const { hyHi } = await import("converters/hy/hy-hi");
            return (await hyHi(text)) as T;
          }
          case "bn": {
            const { hyBn } = await import("converters/hy/hy-bn");
            return (await hyBn(text)) as T;
          }
          case "ur": {
            const { hyUr } = await import("converters/hy/hy-ur");
            return (await hyUr(text)) as T;
          }
          case "fa": {
            const { hyFa } = await import("converters/hy/hy-fa");
            return (await hyFa(text)) as T;
          }
          case "ar": {
            const { hyAr } = await import("converters/hy/hy-ar");
            return (await hyAr(text)) as T;
          }
          case "he": {
            const { hyHe } = await import("converters/hy/hy-he");
            return (await hyHe(text)) as T;
          }
          case "ka": {
            const { hyKa } = await import("converters/hy/hy-ka");
            return (await hyKa(text)) as T;
          }
          case "el": {
            const { hyEl } = await import("converters/hy/hy-el");
            return (await hyEl(text)) as T;
          }
          case "ru": {
            const { hyRu } = await import("converters/hy/hy-ru");
            return (await hyRu(text)) as T;
          }
          case "uk": {
            const { hyUk } = await import("converters/hy/hy-uk");
            return (await hyUk(text)) as T;
          }
          case "bg": {
            const { hyBg } = await import("converters/hy/hy-bg");
            return (await hyBg(text)) as T;
          }
          case "mk": {
            const { hyMk } = await import("converters/hy/hy-mk");
            return (await hyMk(text)) as T;
          }
          case "az": {
            const { hyAz } = await import("converters/hy/hy-az");
            return (await hyAz(text)) as T;
          }
          case "bs": {
            const { hyBs } = await import("converters/hy/hy-bs");
            return (await hyBs(text)) as T;
          }
          case "ca": {
            const { hyCa } = await import("converters/hy/hy-ca");
            return (await hyCa(text)) as T;
          }
          case "cs": {
            const { hyCs } = await import("converters/hy/hy-cs");
            return (await hyCs(text)) as T;
          }
          case "da": {
            const { hyDa } = await import("converters/hy/hy-da");
            return (await hyDa(text)) as T;
          }
          case "de": {
            const { hyDe } = await import("converters/hy/hy-de");
            return (await hyDe(text)) as T;
          }
          case "en": {
            const { hyEn } = await import("converters/hy/hy-en");
            return (await hyEn(text)) as T;
          }
          case "es": {
            const { hyEs } = await import("converters/hy/hy-es");
            return (await hyEs(text)) as T;
          }
          case "et": {
            const { hyEt } = await import("converters/hy/hy-et");
            return (await hyEt(text)) as T;
          }
          case "fi": {
            const { hyFi } = await import("converters/hy/hy-fi");
            return (await hyFi(text)) as T;
          }
          case "fr": {
            const { hyFr } = await import("converters/hy/hy-fr");
            return (await hyFr(text)) as T;
          }
          case "hr": {
            const { hyHr } = await import("converters/hy/hy-hr");
            return (await hyHr(text)) as T;
          }
          case "hu": {
            const { hyHu } = await import("converters/hy/hy-hu");
            return (await hyHu(text)) as T;
          }
          case "id": {
            const { hyId } = await import("converters/hy/hy-id");
            return (await hyId(text)) as T;
          }
          case "is": {
            const { hyIs } = await import("converters/hy/hy-is");
            return (await hyIs(text)) as T;
          }
          case "it": {
            const { hyIt } = await import("converters/hy/hy-it");
            return (await hyIt(text)) as T;
          }
          case "kk": {
            const { hyKk } = await import("converters/hy/hy-kk");
            return (await hyKk(text)) as T;
          }
          case "lb": {
            const { hyLb } = await import("converters/hy/hy-lb");
            return (await hyLb(text)) as T;
          }
          case "lt": {
            const { hyLt } = await import("converters/hy/hy-lt");
            return (await hyLt(text)) as T;
          }
          case "lv": {
            const { hyLv } = await import("converters/hy/hy-lv");
            return (await hyLv(text)) as T;
          }
          case "ms": {
            const { hyMs } = await import("converters/hy/hy-ms");
            return (await hyMs(text)) as T;
          }
          case "mt": {
            const { hyMt } = await import("converters/hy/hy-mt");
            return (await hyMt(text)) as T;
          }
          case "nl": {
            const { hyNl } = await import("converters/hy/hy-nl");
            return (await hyNl(text)) as T;
          }
          case "no": {
            const { hyNo } = await import("converters/hy/hy-no");
            return (await hyNo(text)) as T;
          }
          case "pl": {
            const { hyPl } = await import("converters/hy/hy-pl");
            return (await hyPl(text)) as T;
          }
          case "pt": {
            const { hyPt } = await import("converters/hy/hy-pt");
            return (await hyPt(text)) as T;
          }
          case "ro": {
            const { hyRo } = await import("converters/hy/hy-ro");
            return (await hyRo(text)) as T;
          }
          case "sk": {
            const { hySk } = await import("converters/hy/hy-sk");
            return (await hySk(text)) as T;
          }
          case "sl": {
            const { hySl } = await import("converters/hy/hy-sl");
            return (await hySl(text)) as T;
          }
          case "sq": {
            const { hySq } = await import("converters/hy/hy-sq");
            return (await hySq(text)) as T;
          }
          case "sr": {
            const { hySr } = await import("converters/hy/hy-sr");
            return (await hySr(text)) as T;
          }
          case "sv": {
            const { hySv } = await import("converters/hy/hy-sv");
            return (await hySv(text)) as T;
          }
          case "tr": {
            const { hyTr } = await import("converters/hy/hy-tr");
            return (await hyTr(text)) as T;
          }
          case "vi": {
            const { hyVi } = await import("converters/hy/hy-vi");
            return (await hyVi(text)) as T;
          }
        }
        break;
      case "el":
        switch (to) {
          case "zh": {
            const { elZh } = await import("converters/el/el-zh");
            return (await elZh(text)) as T;
          }
          case "ja": {
            const { elJa } = await import("converters/el/el-ja");
            return (await elJa(text)) as T;
          }
          case "ko": {
            const { elKo } = await import("converters/el/el-ko");
            return (await elKo(text)) as T;
          }
          case "hi": {
            const { elHi } = await import("converters/el/el-hi");
            return (await elHi(text)) as T;
          }
          case "bn": {
            const { elBn } = await import("converters/el/el-bn");
            return (await elBn(text)) as T;
          }
          case "ur": {
            const { elUr } = await import("converters/el/el-ur");
            return (await elUr(text)) as T;
          }
          case "fa": {
            const { elFa } = await import("converters/el/el-fa");
            return (await elFa(text)) as T;
          }
          case "ar": {
            const { elAr } = await import("converters/el/el-ar");
            return (await elAr(text)) as T;
          }
          case "he": {
            const { elHe } = await import("converters/el/el-he");
            return (await elHe(text)) as T;
          }
          case "ka": {
            const { elKa } = await import("converters/el/el-ka");
            return (await elKa(text)) as T;
          }
          case "hy": {
            const { elHy } = await import("converters/el/el-hy");
            return (await elHy(text)) as T;
          }
          case "ru": {
            const { elRu } = await import("converters/el/el-ru");
            return (await elRu(text)) as T;
          }
          case "uk": {
            const { elUk } = await import("converters/el/el-uk");
            return (await elUk(text)) as T;
          }
          case "bg": {
            const { elBg } = await import("converters/el/el-bg");
            return (await elBg(text)) as T;
          }
          case "mk": {
            const { elMk } = await import("converters/el/el-mk");
            return (await elMk(text)) as T;
          }
          case "az": {
            const { elAz } = await import("converters/el/el-az");
            return (await elAz(text)) as T;
          }
          case "bs": {
            const { elBs } = await import("converters/el/el-bs");
            return (await elBs(text)) as T;
          }
          case "ca": {
            const { elCa } = await import("converters/el/el-ca");
            return (await elCa(text)) as T;
          }
          case "cs": {
            const { elCs } = await import("converters/el/el-cs");
            return (await elCs(text)) as T;
          }
          case "da": {
            const { elDa } = await import("converters/el/el-da");
            return (await elDa(text)) as T;
          }
          case "de": {
            const { elDe } = await import("converters/el/el-de");
            return (await elDe(text)) as T;
          }
          case "en": {
            const { elEn } = await import("converters/el/el-en");
            return (await elEn(text)) as T;
          }
          case "es": {
            const { elEs } = await import("converters/el/el-es");
            return (await elEs(text)) as T;
          }
          case "et": {
            const { elEt } = await import("converters/el/el-et");
            return (await elEt(text)) as T;
          }
          case "fi": {
            const { elFi } = await import("converters/el/el-fi");
            return (await elFi(text)) as T;
          }
          case "fr": {
            const { elFr } = await import("converters/el/el-fr");
            return (await elFr(text)) as T;
          }
          case "hr": {
            const { elHr } = await import("converters/el/el-hr");
            return (await elHr(text)) as T;
          }
          case "hu": {
            const { elHu } = await import("converters/el/el-hu");
            return (await elHu(text)) as T;
          }
          case "id": {
            const { elId } = await import("converters/el/el-id");
            return (await elId(text)) as T;
          }
          case "is": {
            const { elIs } = await import("converters/el/el-is");
            return (await elIs(text)) as T;
          }
          case "it": {
            const { elIt } = await import("converters/el/el-it");
            return (await elIt(text)) as T;
          }
          case "kk": {
            const { elKk } = await import("converters/el/el-kk");
            return (await elKk(text)) as T;
          }
          case "lb": {
            const { elLb } = await import("converters/el/el-lb");
            return (await elLb(text)) as T;
          }
          case "lt": {
            const { elLt } = await import("converters/el/el-lt");
            return (await elLt(text)) as T;
          }
          case "lv": {
            const { elLv } = await import("converters/el/el-lv");
            return (await elLv(text)) as T;
          }
          case "ms": {
            const { elMs } = await import("converters/el/el-ms");
            return (await elMs(text)) as T;
          }
          case "mt": {
            const { elMt } = await import("converters/el/el-mt");
            return (await elMt(text)) as T;
          }
          case "nl": {
            const { elNl } = await import("converters/el/el-nl");
            return (await elNl(text)) as T;
          }
          case "no": {
            const { elNo } = await import("converters/el/el-no");
            return (await elNo(text)) as T;
          }
          case "pl": {
            const { elPl } = await import("converters/el/el-pl");
            return (await elPl(text)) as T;
          }
          case "pt": {
            const { elPt } = await import("converters/el/el-pt");
            return (await elPt(text)) as T;
          }
          case "ro": {
            const { elRo } = await import("converters/el/el-ro");
            return (await elRo(text)) as T;
          }
          case "sk": {
            const { elSk } = await import("converters/el/el-sk");
            return (await elSk(text)) as T;
          }
          case "sl": {
            const { elSl } = await import("converters/el/el-sl");
            return (await elSl(text)) as T;
          }
          case "sq": {
            const { elSq } = await import("converters/el/el-sq");
            return (await elSq(text)) as T;
          }
          case "sr": {
            const { elSr } = await import("converters/el/el-sr");
            return (await elSr(text)) as T;
          }
          case "sv": {
            const { elSv } = await import("converters/el/el-sv");
            return (await elSv(text)) as T;
          }
          case "tr": {
            const { elTr } = await import("converters/el/el-tr");
            return (await elTr(text)) as T;
          }
          case "vi": {
            const { elVi } = await import("converters/el/el-vi");
            return (await elVi(text)) as T;
          }
        }
        break;
      case "ru":
        switch (to) {
          case "zh": {
            const { ruZh } = await import("converters/ru/ru-zh");
            return (await ruZh(text)) as T;
          }
          case "ja": {
            const { ruJa } = await import("converters/ru/ru-ja");
            return (await ruJa(text)) as T;
          }
          case "ko": {
            const { ruKo } = await import("converters/ru/ru-ko");
            return (await ruKo(text)) as T;
          }
          case "hi": {
            const { ruHi } = await import("converters/ru/ru-hi");
            return (await ruHi(text)) as T;
          }
          case "bn": {
            const { ruBn } = await import("converters/ru/ru-bn");
            return (await ruBn(text)) as T;
          }
          case "ur": {
            const { ruUr } = await import("converters/ru/ru-ur");
            return (await ruUr(text)) as T;
          }
          case "fa": {
            const { ruFa } = await import("converters/ru/ru-fa");
            return (await ruFa(text)) as T;
          }
          case "ar": {
            const { ruAr } = await import("converters/ru/ru-ar");
            return (await ruAr(text)) as T;
          }
          case "he": {
            const { ruHe } = await import("converters/ru/ru-he");
            return (await ruHe(text)) as T;
          }
          case "ka": {
            const { ruKa } = await import("converters/ru/ru-ka");
            return (await ruKa(text)) as T;
          }
          case "hy": {
            const { ruHy } = await import("converters/ru/ru-hy");
            return (await ruHy(text)) as T;
          }
          case "el": {
            const { ruEl } = await import("converters/ru/ru-el");
            return (await ruEl(text)) as T;
          }
          case "uk": {
            const { ruUk } = await import("converters/ru/ru-uk");
            return (await ruUk(text)) as T;
          }
          case "bg": {
            const { ruBg } = await import("converters/ru/ru-bg");
            return (await ruBg(text)) as T;
          }
          case "mk": {
            const { ruMk } = await import("converters/ru/ru-mk");
            return (await ruMk(text)) as T;
          }
          case "az": {
            const { ruAz } = await import("converters/ru/ru-az");
            return (await ruAz(text)) as T;
          }
          case "bs": {
            const { ruBs } = await import("converters/ru/ru-bs");
            return (await ruBs(text)) as T;
          }
          case "ca": {
            const { ruCa } = await import("converters/ru/ru-ca");
            return (await ruCa(text)) as T;
          }
          case "cs": {
            const { ruCs } = await import("converters/ru/ru-cs");
            return (await ruCs(text)) as T;
          }
          case "da": {
            const { ruDa } = await import("converters/ru/ru-da");
            return (await ruDa(text)) as T;
          }
          case "de": {
            const { ruDe } = await import("converters/ru/ru-de");
            return (await ruDe(text)) as T;
          }
          case "en": {
            const { ruEn } = await import("converters/ru/ru-en");
            return (await ruEn(text)) as T;
          }
          case "es": {
            const { ruEs } = await import("converters/ru/ru-es");
            return (await ruEs(text)) as T;
          }
          case "et": {
            const { ruEt } = await import("converters/ru/ru-et");
            return (await ruEt(text)) as T;
          }
          case "fi": {
            const { ruFi } = await import("converters/ru/ru-fi");
            return (await ruFi(text)) as T;
          }
          case "fr": {
            const { ruFr } = await import("converters/ru/ru-fr");
            return (await ruFr(text)) as T;
          }
          case "hr": {
            const { ruHr } = await import("converters/ru/ru-hr");
            return (await ruHr(text)) as T;
          }
          case "hu": {
            const { ruHu } = await import("converters/ru/ru-hu");
            return (await ruHu(text)) as T;
          }
          case "id": {
            const { ruId } = await import("converters/ru/ru-id");
            return (await ruId(text)) as T;
          }
          case "is": {
            const { ruIs } = await import("converters/ru/ru-is");
            return (await ruIs(text)) as T;
          }
          case "it": {
            const { ruIt } = await import("converters/ru/ru-it");
            return (await ruIt(text)) as T;
          }
          case "kk": {
            const { ruKk } = await import("converters/ru/ru-kk");
            return (await ruKk(text)) as T;
          }
          case "lb": {
            const { ruLb } = await import("converters/ru/ru-lb");
            return (await ruLb(text)) as T;
          }
          case "lt": {
            const { ruLt } = await import("converters/ru/ru-lt");
            return (await ruLt(text)) as T;
          }
          case "lv": {
            const { ruLv } = await import("converters/ru/ru-lv");
            return (await ruLv(text)) as T;
          }
          case "ms": {
            const { ruMs } = await import("converters/ru/ru-ms");
            return (await ruMs(text)) as T;
          }
          case "mt": {
            const { ruMt } = await import("converters/ru/ru-mt");
            return (await ruMt(text)) as T;
          }
          case "nl": {
            const { ruNl } = await import("converters/ru/ru-nl");
            return (await ruNl(text)) as T;
          }
          case "no": {
            const { ruNo } = await import("converters/ru/ru-no");
            return (await ruNo(text)) as T;
          }
          case "pl": {
            const { ruPl } = await import("converters/ru/ru-pl");
            return (await ruPl(text)) as T;
          }
          case "pt": {
            const { ruPt } = await import("converters/ru/ru-pt");
            return (await ruPt(text)) as T;
          }
          case "ro": {
            const { ruRo } = await import("converters/ru/ru-ro");
            return (await ruRo(text)) as T;
          }
          case "sk": {
            const { ruSk } = await import("converters/ru/ru-sk");
            return (await ruSk(text)) as T;
          }
          case "sl": {
            const { ruSl } = await import("converters/ru/ru-sl");
            return (await ruSl(text)) as T;
          }
          case "sq": {
            const { ruSq } = await import("converters/ru/ru-sq");
            return (await ruSq(text)) as T;
          }
          case "sr": {
            const { ruSr } = await import("converters/ru/ru-sr");
            return (await ruSr(text)) as T;
          }
          case "sv": {
            const { ruSv } = await import("converters/ru/ru-sv");
            return (await ruSv(text)) as T;
          }
          case "tr": {
            const { ruTr } = await import("converters/ru/ru-tr");
            return (await ruTr(text)) as T;
          }
          case "vi": {
            const { ruVi } = await import("converters/ru/ru-vi");
            return (await ruVi(text)) as T;
          }
        }
        break;
      case "uk":
        switch (to) {
          case "zh": {
            const { ukZh } = await import("converters/uk/uk-zh");
            return (await ukZh(text)) as T;
          }
          case "ja": {
            const { ukJa } = await import("converters/uk/uk-ja");
            return (await ukJa(text)) as T;
          }
          case "ko": {
            const { ukKo } = await import("converters/uk/uk-ko");
            return (await ukKo(text)) as T;
          }
          case "hi": {
            const { ukHi } = await import("converters/uk/uk-hi");
            return (await ukHi(text)) as T;
          }
          case "bn": {
            const { ukBn } = await import("converters/uk/uk-bn");
            return (await ukBn(text)) as T;
          }
          case "ur": {
            const { ukUr } = await import("converters/uk/uk-ur");
            return (await ukUr(text)) as T;
          }
          case "fa": {
            const { ukFa } = await import("converters/uk/uk-fa");
            return (await ukFa(text)) as T;
          }
          case "ar": {
            const { ukAr } = await import("converters/uk/uk-ar");
            return (await ukAr(text)) as T;
          }
          case "he": {
            const { ukHe } = await import("converters/uk/uk-he");
            return (await ukHe(text)) as T;
          }
          case "ka": {
            const { ukKa } = await import("converters/uk/uk-ka");
            return (await ukKa(text)) as T;
          }
          case "hy": {
            const { ukHy } = await import("converters/uk/uk-hy");
            return (await ukHy(text)) as T;
          }
          case "el": {
            const { ukEl } = await import("converters/uk/uk-el");
            return (await ukEl(text)) as T;
          }
          case "ru": {
            const { ukRu } = await import("converters/uk/uk-ru");
            return (await ukRu(text)) as T;
          }
          case "bg": {
            const { ukBg } = await import("converters/uk/uk-bg");
            return (await ukBg(text)) as T;
          }
          case "mk": {
            const { ukMk } = await import("converters/uk/uk-mk");
            return (await ukMk(text)) as T;
          }
          case "az": {
            const { ukAz } = await import("converters/uk/uk-az");
            return (await ukAz(text)) as T;
          }
          case "bs": {
            const { ukBs } = await import("converters/uk/uk-bs");
            return (await ukBs(text)) as T;
          }
          case "ca": {
            const { ukCa } = await import("converters/uk/uk-ca");
            return (await ukCa(text)) as T;
          }
          case "cs": {
            const { ukCs } = await import("converters/uk/uk-cs");
            return (await ukCs(text)) as T;
          }
          case "da": {
            const { ukDa } = await import("converters/uk/uk-da");
            return (await ukDa(text)) as T;
          }
          case "de": {
            const { ukDe } = await import("converters/uk/uk-de");
            return (await ukDe(text)) as T;
          }
          case "en": {
            const { ukEn } = await import("converters/uk/uk-en");
            return (await ukEn(text)) as T;
          }
          case "es": {
            const { ukEs } = await import("converters/uk/uk-es");
            return (await ukEs(text)) as T;
          }
          case "et": {
            const { ukEt } = await import("converters/uk/uk-et");
            return (await ukEt(text)) as T;
          }
          case "fi": {
            const { ukFi } = await import("converters/uk/uk-fi");
            return (await ukFi(text)) as T;
          }
          case "fr": {
            const { ukFr } = await import("converters/uk/uk-fr");
            return (await ukFr(text)) as T;
          }
          case "hr": {
            const { ukHr } = await import("converters/uk/uk-hr");
            return (await ukHr(text)) as T;
          }
          case "hu": {
            const { ukHu } = await import("converters/uk/uk-hu");
            return (await ukHu(text)) as T;
          }
          case "id": {
            const { ukId } = await import("converters/uk/uk-id");
            return (await ukId(text)) as T;
          }
          case "is": {
            const { ukIs } = await import("converters/uk/uk-is");
            return (await ukIs(text)) as T;
          }
          case "it": {
            const { ukIt } = await import("converters/uk/uk-it");
            return (await ukIt(text)) as T;
          }
          case "kk": {
            const { ukKk } = await import("converters/uk/uk-kk");
            return (await ukKk(text)) as T;
          }
          case "lb": {
            const { ukLb } = await import("converters/uk/uk-lb");
            return (await ukLb(text)) as T;
          }
          case "lt": {
            const { ukLt } = await import("converters/uk/uk-lt");
            return (await ukLt(text)) as T;
          }
          case "lv": {
            const { ukLv } = await import("converters/uk/uk-lv");
            return (await ukLv(text)) as T;
          }
          case "ms": {
            const { ukMs } = await import("converters/uk/uk-ms");
            return (await ukMs(text)) as T;
          }
          case "mt": {
            const { ukMt } = await import("converters/uk/uk-mt");
            return (await ukMt(text)) as T;
          }
          case "nl": {
            const { ukNl } = await import("converters/uk/uk-nl");
            return (await ukNl(text)) as T;
          }
          case "no": {
            const { ukNo } = await import("converters/uk/uk-no");
            return (await ukNo(text)) as T;
          }
          case "pl": {
            const { ukPl } = await import("converters/uk/uk-pl");
            return (await ukPl(text)) as T;
          }
          case "pt": {
            const { ukPt } = await import("converters/uk/uk-pt");
            return (await ukPt(text)) as T;
          }
          case "ro": {
            const { ukRo } = await import("converters/uk/uk-ro");
            return (await ukRo(text)) as T;
          }
          case "sk": {
            const { ukSk } = await import("converters/uk/uk-sk");
            return (await ukSk(text)) as T;
          }
          case "sl": {
            const { ukSl } = await import("converters/uk/uk-sl");
            return (await ukSl(text)) as T;
          }
          case "sq": {
            const { ukSq } = await import("converters/uk/uk-sq");
            return (await ukSq(text)) as T;
          }
          case "sr": {
            const { ukSr } = await import("converters/uk/uk-sr");
            return (await ukSr(text)) as T;
          }
          case "sv": {
            const { ukSv } = await import("converters/uk/uk-sv");
            return (await ukSv(text)) as T;
          }
          case "tr": {
            const { ukTr } = await import("converters/uk/uk-tr");
            return (await ukTr(text)) as T;
          }
          case "vi": {
            const { ukVi } = await import("converters/uk/uk-vi");
            return (await ukVi(text)) as T;
          }
        }
        break;
      case "bg":
        switch (to) {
          case "zh": {
            const { bgZh } = await import("converters/bg/bg-zh");
            return (await bgZh(text)) as T;
          }
          case "ja": {
            const { bgJa } = await import("converters/bg/bg-ja");
            return (await bgJa(text)) as T;
          }
          case "ko": {
            const { bgKo } = await import("converters/bg/bg-ko");
            return (await bgKo(text)) as T;
          }
          case "hi": {
            const { bgHi } = await import("converters/bg/bg-hi");
            return (await bgHi(text)) as T;
          }
          case "bn": {
            const { bgBn } = await import("converters/bg/bg-bn");
            return (await bgBn(text)) as T;
          }
          case "ur": {
            const { bgUr } = await import("converters/bg/bg-ur");
            return (await bgUr(text)) as T;
          }
          case "fa": {
            const { bgFa } = await import("converters/bg/bg-fa");
            return (await bgFa(text)) as T;
          }
          case "ar": {
            const { bgAr } = await import("converters/bg/bg-ar");
            return (await bgAr(text)) as T;
          }
          case "he": {
            const { bgHe } = await import("converters/bg/bg-he");
            return (await bgHe(text)) as T;
          }
          case "ka": {
            const { bgKa } = await import("converters/bg/bg-ka");
            return (await bgKa(text)) as T;
          }
          case "hy": {
            const { bgHy } = await import("converters/bg/bg-hy");
            return (await bgHy(text)) as T;
          }
          case "el": {
            const { bgEl } = await import("converters/bg/bg-el");
            return (await bgEl(text)) as T;
          }
          case "ru": {
            const { bgRu } = await import("converters/bg/bg-ru");
            return (await bgRu(text)) as T;
          }
          case "uk": {
            const { bgUk } = await import("converters/bg/bg-uk");
            return (await bgUk(text)) as T;
          }
          case "mk": {
            const { bgMk } = await import("converters/bg/bg-mk");
            return (await bgMk(text)) as T;
          }
          case "az": {
            const { bgAz } = await import("converters/bg/bg-az");
            return (await bgAz(text)) as T;
          }
          case "bs": {
            const { bgBs } = await import("converters/bg/bg-bs");
            return (await bgBs(text)) as T;
          }
          case "ca": {
            const { bgCa } = await import("converters/bg/bg-ca");
            return (await bgCa(text)) as T;
          }
          case "cs": {
            const { bgCs } = await import("converters/bg/bg-cs");
            return (await bgCs(text)) as T;
          }
          case "da": {
            const { bgDa } = await import("converters/bg/bg-da");
            return (await bgDa(text)) as T;
          }
          case "de": {
            const { bgDe } = await import("converters/bg/bg-de");
            return (await bgDe(text)) as T;
          }
          case "en": {
            const { bgEn } = await import("converters/bg/bg-en");
            return (await bgEn(text)) as T;
          }
          case "es": {
            const { bgEs } = await import("converters/bg/bg-es");
            return (await bgEs(text)) as T;
          }
          case "et": {
            const { bgEt } = await import("converters/bg/bg-et");
            return (await bgEt(text)) as T;
          }
          case "fi": {
            const { bgFi } = await import("converters/bg/bg-fi");
            return (await bgFi(text)) as T;
          }
          case "fr": {
            const { bgFr } = await import("converters/bg/bg-fr");
            return (await bgFr(text)) as T;
          }
          case "hr": {
            const { bgHr } = await import("converters/bg/bg-hr");
            return (await bgHr(text)) as T;
          }
          case "hu": {
            const { bgHu } = await import("converters/bg/bg-hu");
            return (await bgHu(text)) as T;
          }
          case "id": {
            const { bgId } = await import("converters/bg/bg-id");
            return (await bgId(text)) as T;
          }
          case "is": {
            const { bgIs } = await import("converters/bg/bg-is");
            return (await bgIs(text)) as T;
          }
          case "it": {
            const { bgIt } = await import("converters/bg/bg-it");
            return (await bgIt(text)) as T;
          }
          case "kk": {
            const { bgKk } = await import("converters/bg/bg-kk");
            return (await bgKk(text)) as T;
          }
          case "lb": {
            const { bgLb } = await import("converters/bg/bg-lb");
            return (await bgLb(text)) as T;
          }
          case "lt": {
            const { bgLt } = await import("converters/bg/bg-lt");
            return (await bgLt(text)) as T;
          }
          case "lv": {
            const { bgLv } = await import("converters/bg/bg-lv");
            return (await bgLv(text)) as T;
          }
          case "ms": {
            const { bgMs } = await import("converters/bg/bg-ms");
            return (await bgMs(text)) as T;
          }
          case "mt": {
            const { bgMt } = await import("converters/bg/bg-mt");
            return (await bgMt(text)) as T;
          }
          case "nl": {
            const { bgNl } = await import("converters/bg/bg-nl");
            return (await bgNl(text)) as T;
          }
          case "no": {
            const { bgNo } = await import("converters/bg/bg-no");
            return (await bgNo(text)) as T;
          }
          case "pl": {
            const { bgPl } = await import("converters/bg/bg-pl");
            return (await bgPl(text)) as T;
          }
          case "pt": {
            const { bgPt } = await import("converters/bg/bg-pt");
            return (await bgPt(text)) as T;
          }
          case "ro": {
            const { bgRo } = await import("converters/bg/bg-ro");
            return (await bgRo(text)) as T;
          }
          case "sk": {
            const { bgSk } = await import("converters/bg/bg-sk");
            return (await bgSk(text)) as T;
          }
          case "sl": {
            const { bgSl } = await import("converters/bg/bg-sl");
            return (await bgSl(text)) as T;
          }
          case "sq": {
            const { bgSq } = await import("converters/bg/bg-sq");
            return (await bgSq(text)) as T;
          }
          case "sr": {
            const { bgSr } = await import("converters/bg/bg-sr");
            return (await bgSr(text)) as T;
          }
          case "sv": {
            const { bgSv } = await import("converters/bg/bg-sv");
            return (await bgSv(text)) as T;
          }
          case "tr": {
            const { bgTr } = await import("converters/bg/bg-tr");
            return (await bgTr(text)) as T;
          }
          case "vi": {
            const { bgVi } = await import("converters/bg/bg-vi");
            return (await bgVi(text)) as T;
          }
        }
        break;
      case "mk":
        switch (to) {
          case "zh": {
            const { mkZh } = await import("converters/mk/mk-zh");
            return (await mkZh(text)) as T;
          }
          case "ja": {
            const { mkJa } = await import("converters/mk/mk-ja");
            return (await mkJa(text)) as T;
          }
          case "ko": {
            const { mkKo } = await import("converters/mk/mk-ko");
            return (await mkKo(text)) as T;
          }
          case "hi": {
            const { mkHi } = await import("converters/mk/mk-hi");
            return (await mkHi(text)) as T;
          }
          case "bn": {
            const { mkBn } = await import("converters/mk/mk-bn");
            return (await mkBn(text)) as T;
          }
          case "ur": {
            const { mkUr } = await import("converters/mk/mk-ur");
            return (await mkUr(text)) as T;
          }
          case "fa": {
            const { mkFa } = await import("converters/mk/mk-fa");
            return (await mkFa(text)) as T;
          }
          case "ar": {
            const { mkAr } = await import("converters/mk/mk-ar");
            return (await mkAr(text)) as T;
          }
          case "he": {
            const { mkHe } = await import("converters/mk/mk-he");
            return (await mkHe(text)) as T;
          }
          case "ka": {
            const { mkKa } = await import("converters/mk/mk-ka");
            return (await mkKa(text)) as T;
          }
          case "hy": {
            const { mkHy } = await import("converters/mk/mk-hy");
            return (await mkHy(text)) as T;
          }
          case "el": {
            const { mkEl } = await import("converters/mk/mk-el");
            return (await mkEl(text)) as T;
          }
          case "ru": {
            const { mkRu } = await import("converters/mk/mk-ru");
            return (await mkRu(text)) as T;
          }
          case "uk": {
            const { mkUk } = await import("converters/mk/mk-uk");
            return (await mkUk(text)) as T;
          }
          case "bg": {
            const { mkBg } = await import("converters/mk/mk-bg");
            return (await mkBg(text)) as T;
          }
          case "az": {
            const { mkAz } = await import("converters/mk/mk-az");
            return (await mkAz(text)) as T;
          }
          case "bs": {
            const { mkBs } = await import("converters/mk/mk-bs");
            return (await mkBs(text)) as T;
          }
          case "ca": {
            const { mkCa } = await import("converters/mk/mk-ca");
            return (await mkCa(text)) as T;
          }
          case "cs": {
            const { mkCs } = await import("converters/mk/mk-cs");
            return (await mkCs(text)) as T;
          }
          case "da": {
            const { mkDa } = await import("converters/mk/mk-da");
            return (await mkDa(text)) as T;
          }
          case "de": {
            const { mkDe } = await import("converters/mk/mk-de");
            return (await mkDe(text)) as T;
          }
          case "en": {
            const { mkEn } = await import("converters/mk/mk-en");
            return (await mkEn(text)) as T;
          }
          case "es": {
            const { mkEs } = await import("converters/mk/mk-es");
            return (await mkEs(text)) as T;
          }
          case "et": {
            const { mkEt } = await import("converters/mk/mk-et");
            return (await mkEt(text)) as T;
          }
          case "fi": {
            const { mkFi } = await import("converters/mk/mk-fi");
            return (await mkFi(text)) as T;
          }
          case "fr": {
            const { mkFr } = await import("converters/mk/mk-fr");
            return (await mkFr(text)) as T;
          }
          case "hr": {
            const { mkHr } = await import("converters/mk/mk-hr");
            return (await mkHr(text)) as T;
          }
          case "hu": {
            const { mkHu } = await import("converters/mk/mk-hu");
            return (await mkHu(text)) as T;
          }
          case "id": {
            const { mkId } = await import("converters/mk/mk-id");
            return (await mkId(text)) as T;
          }
          case "is": {
            const { mkIs } = await import("converters/mk/mk-is");
            return (await mkIs(text)) as T;
          }
          case "it": {
            const { mkIt } = await import("converters/mk/mk-it");
            return (await mkIt(text)) as T;
          }
          case "kk": {
            const { mkKk } = await import("converters/mk/mk-kk");
            return (await mkKk(text)) as T;
          }
          case "lb": {
            const { mkLb } = await import("converters/mk/mk-lb");
            return (await mkLb(text)) as T;
          }
          case "lt": {
            const { mkLt } = await import("converters/mk/mk-lt");
            return (await mkLt(text)) as T;
          }
          case "lv": {
            const { mkLv } = await import("converters/mk/mk-lv");
            return (await mkLv(text)) as T;
          }
          case "ms": {
            const { mkMs } = await import("converters/mk/mk-ms");
            return (await mkMs(text)) as T;
          }
          case "mt": {
            const { mkMt } = await import("converters/mk/mk-mt");
            return (await mkMt(text)) as T;
          }
          case "nl": {
            const { mkNl } = await import("converters/mk/mk-nl");
            return (await mkNl(text)) as T;
          }
          case "no": {
            const { mkNo } = await import("converters/mk/mk-no");
            return (await mkNo(text)) as T;
          }
          case "pl": {
            const { mkPl } = await import("converters/mk/mk-pl");
            return (await mkPl(text)) as T;
          }
          case "pt": {
            const { mkPt } = await import("converters/mk/mk-pt");
            return (await mkPt(text)) as T;
          }
          case "ro": {
            const { mkRo } = await import("converters/mk/mk-ro");
            return (await mkRo(text)) as T;
          }
          case "sk": {
            const { mkSk } = await import("converters/mk/mk-sk");
            return (await mkSk(text)) as T;
          }
          case "sl": {
            const { mkSl } = await import("converters/mk/mk-sl");
            return (await mkSl(text)) as T;
          }
          case "sq": {
            const { mkSq } = await import("converters/mk/mk-sq");
            return (await mkSq(text)) as T;
          }
          case "sr": {
            const { mkSr } = await import("converters/mk/mk-sr");
            return (await mkSr(text)) as T;
          }
          case "sv": {
            const { mkSv } = await import("converters/mk/mk-sv");
            return (await mkSv(text)) as T;
          }
          case "tr": {
            const { mkTr } = await import("converters/mk/mk-tr");
            return (await mkTr(text)) as T;
          }
          case "vi": {
            const { mkVi } = await import("converters/mk/mk-vi");
            return (await mkVi(text)) as T;
          }
        }
        break;
      case "az":
        switch (to) {
          case "zh": {
            const { azZh } = await import("converters/az/az-zh");
            return (await azZh(text)) as T;
          }
          case "ja": {
            const { azJa } = await import("converters/az/az-ja");
            return (await azJa(text)) as T;
          }
          case "ko": {
            const { azKo } = await import("converters/az/az-ko");
            return (await azKo(text)) as T;
          }
          case "hi": {
            const { azHi } = await import("converters/az/az-hi");
            return (await azHi(text)) as T;
          }
          case "bn": {
            const { azBn } = await import("converters/az/az-bn");
            return (await azBn(text)) as T;
          }
          case "ur": {
            const { azUr } = await import("converters/az/az-ur");
            return (await azUr(text)) as T;
          }
          case "fa": {
            const { azFa } = await import("converters/az/az-fa");
            return (await azFa(text)) as T;
          }
          case "ar": {
            const { azAr } = await import("converters/az/az-ar");
            return (await azAr(text)) as T;
          }
          case "he": {
            const { azHe } = await import("converters/az/az-he");
            return (await azHe(text)) as T;
          }
          case "ka": {
            const { azKa } = await import("converters/az/az-ka");
            return (await azKa(text)) as T;
          }
          case "hy": {
            const { azHy } = await import("converters/az/az-hy");
            return (await azHy(text)) as T;
          }
          case "el": {
            const { azEl } = await import("converters/az/az-el");
            return (await azEl(text)) as T;
          }
          case "ru": {
            const { azRu } = await import("converters/az/az-ru");
            return (await azRu(text)) as T;
          }
          case "uk": {
            const { azUk } = await import("converters/az/az-uk");
            return (await azUk(text)) as T;
          }
          case "bg": {
            const { azBg } = await import("converters/az/az-bg");
            return (await azBg(text)) as T;
          }
          case "mk": {
            const { azMk } = await import("converters/az/az-mk");
            return (await azMk(text)) as T;
          }
          case "bs": {
            const { azBs } = await import("converters/az/az-bs");
            return (await azBs(text)) as T;
          }
          case "ca": {
            const { azCa } = await import("converters/az/az-ca");
            return (await azCa(text)) as T;
          }
          case "cs": {
            const { azCs } = await import("converters/az/az-cs");
            return (await azCs(text)) as T;
          }
          case "da": {
            const { azDa } = await import("converters/az/az-da");
            return (await azDa(text)) as T;
          }
          case "de": {
            const { azDe } = await import("converters/az/az-de");
            return (await azDe(text)) as T;
          }
          case "en": {
            const { azEn } = await import("converters/az/az-en");
            return (await azEn(text)) as T;
          }
          case "es": {
            const { azEs } = await import("converters/az/az-es");
            return (await azEs(text)) as T;
          }
          case "et": {
            const { azEt } = await import("converters/az/az-et");
            return (await azEt(text)) as T;
          }
          case "fi": {
            const { azFi } = await import("converters/az/az-fi");
            return (await azFi(text)) as T;
          }
          case "fr": {
            const { azFr } = await import("converters/az/az-fr");
            return (await azFr(text)) as T;
          }
          case "hr": {
            const { azHr } = await import("converters/az/az-hr");
            return (await azHr(text)) as T;
          }
          case "hu": {
            const { azHu } = await import("converters/az/az-hu");
            return (await azHu(text)) as T;
          }
          case "id": {
            const { azId } = await import("converters/az/az-id");
            return (await azId(text)) as T;
          }
          case "is": {
            const { azIs } = await import("converters/az/az-is");
            return (await azIs(text)) as T;
          }
          case "it": {
            const { azIt } = await import("converters/az/az-it");
            return (await azIt(text)) as T;
          }
          case "kk": {
            const { azKk } = await import("converters/az/az-kk");
            return (await azKk(text)) as T;
          }
          case "lb": {
            const { azLb } = await import("converters/az/az-lb");
            return (await azLb(text)) as T;
          }
          case "lt": {
            const { azLt } = await import("converters/az/az-lt");
            return (await azLt(text)) as T;
          }
          case "lv": {
            const { azLv } = await import("converters/az/az-lv");
            return (await azLv(text)) as T;
          }
          case "ms": {
            const { azMs } = await import("converters/az/az-ms");
            return (await azMs(text)) as T;
          }
          case "mt": {
            const { azMt } = await import("converters/az/az-mt");
            return (await azMt(text)) as T;
          }
          case "nl": {
            const { azNl } = await import("converters/az/az-nl");
            return (await azNl(text)) as T;
          }
          case "no": {
            const { azNo } = await import("converters/az/az-no");
            return (await azNo(text)) as T;
          }
          case "pl": {
            const { azPl } = await import("converters/az/az-pl");
            return (await azPl(text)) as T;
          }
          case "pt": {
            const { azPt } = await import("converters/az/az-pt");
            return (await azPt(text)) as T;
          }
          case "ro": {
            const { azRo } = await import("converters/az/az-ro");
            return (await azRo(text)) as T;
          }
          case "sk": {
            const { azSk } = await import("converters/az/az-sk");
            return (await azSk(text)) as T;
          }
          case "sl": {
            const { azSl } = await import("converters/az/az-sl");
            return (await azSl(text)) as T;
          }
          case "sq": {
            const { azSq } = await import("converters/az/az-sq");
            return (await azSq(text)) as T;
          }
          case "sr": {
            const { azSr } = await import("converters/az/az-sr");
            return (await azSr(text)) as T;
          }
          case "sv": {
            const { azSv } = await import("converters/az/az-sv");
            return (await azSv(text)) as T;
          }
          case "tr": {
            const { azTr } = await import("converters/az/az-tr");
            return (await azTr(text)) as T;
          }
          case "vi": {
            const { azVi } = await import("converters/az/az-vi");
            return (await azVi(text)) as T;
          }
        }
        break;
      case "bs":
        switch (to) {
          case "zh": {
            const { bsZh } = await import("converters/bs/bs-zh");
            return (await bsZh(text)) as T;
          }
          case "ja": {
            const { bsJa } = await import("converters/bs/bs-ja");
            return (await bsJa(text)) as T;
          }
          case "ko": {
            const { bsKo } = await import("converters/bs/bs-ko");
            return (await bsKo(text)) as T;
          }
          case "hi": {
            const { bsHi } = await import("converters/bs/bs-hi");
            return (await bsHi(text)) as T;
          }
          case "bn": {
            const { bsBn } = await import("converters/bs/bs-bn");
            return (await bsBn(text)) as T;
          }
          case "ur": {
            const { bsUr } = await import("converters/bs/bs-ur");
            return (await bsUr(text)) as T;
          }
          case "fa": {
            const { bsFa } = await import("converters/bs/bs-fa");
            return (await bsFa(text)) as T;
          }
          case "ar": {
            const { bsAr } = await import("converters/bs/bs-ar");
            return (await bsAr(text)) as T;
          }
          case "he": {
            const { bsHe } = await import("converters/bs/bs-he");
            return (await bsHe(text)) as T;
          }
          case "ka": {
            const { bsKa } = await import("converters/bs/bs-ka");
            return (await bsKa(text)) as T;
          }
          case "hy": {
            const { bsHy } = await import("converters/bs/bs-hy");
            return (await bsHy(text)) as T;
          }
          case "el": {
            const { bsEl } = await import("converters/bs/bs-el");
            return (await bsEl(text)) as T;
          }
          case "ru": {
            const { bsRu } = await import("converters/bs/bs-ru");
            return (await bsRu(text)) as T;
          }
          case "uk": {
            const { bsUk } = await import("converters/bs/bs-uk");
            return (await bsUk(text)) as T;
          }
          case "bg": {
            const { bsBg } = await import("converters/bs/bs-bg");
            return (await bsBg(text)) as T;
          }
          case "mk": {
            const { bsMk } = await import("converters/bs/bs-mk");
            return (await bsMk(text)) as T;
          }
          case "az": {
            const { bsAz } = await import("converters/bs/bs-az");
            return (await bsAz(text)) as T;
          }
          case "ca": {
            const { bsCa } = await import("converters/bs/bs-ca");
            return (await bsCa(text)) as T;
          }
          case "cs": {
            const { bsCs } = await import("converters/bs/bs-cs");
            return (await bsCs(text)) as T;
          }
          case "da": {
            const { bsDa } = await import("converters/bs/bs-da");
            return (await bsDa(text)) as T;
          }
          case "de": {
            const { bsDe } = await import("converters/bs/bs-de");
            return (await bsDe(text)) as T;
          }
          case "en": {
            const { bsEn } = await import("converters/bs/bs-en");
            return (await bsEn(text)) as T;
          }
          case "es": {
            const { bsEs } = await import("converters/bs/bs-es");
            return (await bsEs(text)) as T;
          }
          case "et": {
            const { bsEt } = await import("converters/bs/bs-et");
            return (await bsEt(text)) as T;
          }
          case "fi": {
            const { bsFi } = await import("converters/bs/bs-fi");
            return (await bsFi(text)) as T;
          }
          case "fr": {
            const { bsFr } = await import("converters/bs/bs-fr");
            return (await bsFr(text)) as T;
          }
          case "hr": {
            const { bsHr } = await import("converters/bs/bs-hr");
            return (await bsHr(text)) as T;
          }
          case "hu": {
            const { bsHu } = await import("converters/bs/bs-hu");
            return (await bsHu(text)) as T;
          }
          case "id": {
            const { bsId } = await import("converters/bs/bs-id");
            return (await bsId(text)) as T;
          }
          case "is": {
            const { bsIs } = await import("converters/bs/bs-is");
            return (await bsIs(text)) as T;
          }
          case "it": {
            const { bsIt } = await import("converters/bs/bs-it");
            return (await bsIt(text)) as T;
          }
          case "kk": {
            const { bsKk } = await import("converters/bs/bs-kk");
            return (await bsKk(text)) as T;
          }
          case "lb": {
            const { bsLb } = await import("converters/bs/bs-lb");
            return (await bsLb(text)) as T;
          }
          case "lt": {
            const { bsLt } = await import("converters/bs/bs-lt");
            return (await bsLt(text)) as T;
          }
          case "lv": {
            const { bsLv } = await import("converters/bs/bs-lv");
            return (await bsLv(text)) as T;
          }
          case "ms": {
            const { bsMs } = await import("converters/bs/bs-ms");
            return (await bsMs(text)) as T;
          }
          case "mt": {
            const { bsMt } = await import("converters/bs/bs-mt");
            return (await bsMt(text)) as T;
          }
          case "nl": {
            const { bsNl } = await import("converters/bs/bs-nl");
            return (await bsNl(text)) as T;
          }
          case "no": {
            const { bsNo } = await import("converters/bs/bs-no");
            return (await bsNo(text)) as T;
          }
          case "pl": {
            const { bsPl } = await import("converters/bs/bs-pl");
            return (await bsPl(text)) as T;
          }
          case "pt": {
            const { bsPt } = await import("converters/bs/bs-pt");
            return (await bsPt(text)) as T;
          }
          case "ro": {
            const { bsRo } = await import("converters/bs/bs-ro");
            return (await bsRo(text)) as T;
          }
          case "sk": {
            const { bsSk } = await import("converters/bs/bs-sk");
            return (await bsSk(text)) as T;
          }
          case "sl": {
            const { bsSl } = await import("converters/bs/bs-sl");
            return (await bsSl(text)) as T;
          }
          case "sq": {
            const { bsSq } = await import("converters/bs/bs-sq");
            return (await bsSq(text)) as T;
          }
          case "sr": {
            const { bsSr } = await import("converters/bs/bs-sr");
            return (await bsSr(text)) as T;
          }
          case "sv": {
            const { bsSv } = await import("converters/bs/bs-sv");
            return (await bsSv(text)) as T;
          }
          case "tr": {
            const { bsTr } = await import("converters/bs/bs-tr");
            return (await bsTr(text)) as T;
          }
          case "vi": {
            const { bsVi } = await import("converters/bs/bs-vi");
            return (await bsVi(text)) as T;
          }
        }
        break;
      case "ca":
        switch (to) {
          case "zh": {
            const { caZh } = await import("converters/ca/ca-zh");
            return (await caZh(text)) as T;
          }
          case "ja": {
            const { caJa } = await import("converters/ca/ca-ja");
            return (await caJa(text)) as T;
          }
          case "ko": {
            const { caKo } = await import("converters/ca/ca-ko");
            return (await caKo(text)) as T;
          }
          case "hi": {
            const { caHi } = await import("converters/ca/ca-hi");
            return (await caHi(text)) as T;
          }
          case "bn": {
            const { caBn } = await import("converters/ca/ca-bn");
            return (await caBn(text)) as T;
          }
          case "ur": {
            const { caUr } = await import("converters/ca/ca-ur");
            return (await caUr(text)) as T;
          }
          case "fa": {
            const { caFa } = await import("converters/ca/ca-fa");
            return (await caFa(text)) as T;
          }
          case "ar": {
            const { caAr } = await import("converters/ca/ca-ar");
            return (await caAr(text)) as T;
          }
          case "he": {
            const { caHe } = await import("converters/ca/ca-he");
            return (await caHe(text)) as T;
          }
          case "ka": {
            const { caKa } = await import("converters/ca/ca-ka");
            return (await caKa(text)) as T;
          }
          case "hy": {
            const { caHy } = await import("converters/ca/ca-hy");
            return (await caHy(text)) as T;
          }
          case "el": {
            const { caEl } = await import("converters/ca/ca-el");
            return (await caEl(text)) as T;
          }
          case "ru": {
            const { caRu } = await import("converters/ca/ca-ru");
            return (await caRu(text)) as T;
          }
          case "uk": {
            const { caUk } = await import("converters/ca/ca-uk");
            return (await caUk(text)) as T;
          }
          case "bg": {
            const { caBg } = await import("converters/ca/ca-bg");
            return (await caBg(text)) as T;
          }
          case "mk": {
            const { caMk } = await import("converters/ca/ca-mk");
            return (await caMk(text)) as T;
          }
          case "az": {
            const { caAz } = await import("converters/ca/ca-az");
            return (await caAz(text)) as T;
          }
          case "bs": {
            const { caBs } = await import("converters/ca/ca-bs");
            return (await caBs(text)) as T;
          }
          case "cs": {
            const { caCs } = await import("converters/ca/ca-cs");
            return (await caCs(text)) as T;
          }
          case "da": {
            const { caDa } = await import("converters/ca/ca-da");
            return (await caDa(text)) as T;
          }
          case "de": {
            const { caDe } = await import("converters/ca/ca-de");
            return (await caDe(text)) as T;
          }
          case "en": {
            const { caEn } = await import("converters/ca/ca-en");
            return (await caEn(text)) as T;
          }
          case "es": {
            const { caEs } = await import("converters/ca/ca-es");
            return (await caEs(text)) as T;
          }
          case "et": {
            const { caEt } = await import("converters/ca/ca-et");
            return (await caEt(text)) as T;
          }
          case "fi": {
            const { caFi } = await import("converters/ca/ca-fi");
            return (await caFi(text)) as T;
          }
          case "fr": {
            const { caFr } = await import("converters/ca/ca-fr");
            return (await caFr(text)) as T;
          }
          case "hr": {
            const { caHr } = await import("converters/ca/ca-hr");
            return (await caHr(text)) as T;
          }
          case "hu": {
            const { caHu } = await import("converters/ca/ca-hu");
            return (await caHu(text)) as T;
          }
          case "id": {
            const { caId } = await import("converters/ca/ca-id");
            return (await caId(text)) as T;
          }
          case "is": {
            const { caIs } = await import("converters/ca/ca-is");
            return (await caIs(text)) as T;
          }
          case "it": {
            const { caIt } = await import("converters/ca/ca-it");
            return (await caIt(text)) as T;
          }
          case "kk": {
            const { caKk } = await import("converters/ca/ca-kk");
            return (await caKk(text)) as T;
          }
          case "lb": {
            const { caLb } = await import("converters/ca/ca-lb");
            return (await caLb(text)) as T;
          }
          case "lt": {
            const { caLt } = await import("converters/ca/ca-lt");
            return (await caLt(text)) as T;
          }
          case "lv": {
            const { caLv } = await import("converters/ca/ca-lv");
            return (await caLv(text)) as T;
          }
          case "ms": {
            const { caMs } = await import("converters/ca/ca-ms");
            return (await caMs(text)) as T;
          }
          case "mt": {
            const { caMt } = await import("converters/ca/ca-mt");
            return (await caMt(text)) as T;
          }
          case "nl": {
            const { caNl } = await import("converters/ca/ca-nl");
            return (await caNl(text)) as T;
          }
          case "no": {
            const { caNo } = await import("converters/ca/ca-no");
            return (await caNo(text)) as T;
          }
          case "pl": {
            const { caPl } = await import("converters/ca/ca-pl");
            return (await caPl(text)) as T;
          }
          case "pt": {
            const { caPt } = await import("converters/ca/ca-pt");
            return (await caPt(text)) as T;
          }
          case "ro": {
            const { caRo } = await import("converters/ca/ca-ro");
            return (await caRo(text)) as T;
          }
          case "sk": {
            const { caSk } = await import("converters/ca/ca-sk");
            return (await caSk(text)) as T;
          }
          case "sl": {
            const { caSl } = await import("converters/ca/ca-sl");
            return (await caSl(text)) as T;
          }
          case "sq": {
            const { caSq } = await import("converters/ca/ca-sq");
            return (await caSq(text)) as T;
          }
          case "sr": {
            const { caSr } = await import("converters/ca/ca-sr");
            return (await caSr(text)) as T;
          }
          case "sv": {
            const { caSv } = await import("converters/ca/ca-sv");
            return (await caSv(text)) as T;
          }
          case "tr": {
            const { caTr } = await import("converters/ca/ca-tr");
            return (await caTr(text)) as T;
          }
          case "vi": {
            const { caVi } = await import("converters/ca/ca-vi");
            return (await caVi(text)) as T;
          }
        }
        break;
      case "cs":
        switch (to) {
          case "zh": {
            const { csZh } = await import("converters/cs/cs-zh");
            return (await csZh(text)) as T;
          }
          case "ja": {
            const { csJa } = await import("converters/cs/cs-ja");
            return (await csJa(text)) as T;
          }
          case "ko": {
            const { csKo } = await import("converters/cs/cs-ko");
            return (await csKo(text)) as T;
          }
          case "hi": {
            const { csHi } = await import("converters/cs/cs-hi");
            return (await csHi(text)) as T;
          }
          case "bn": {
            const { csBn } = await import("converters/cs/cs-bn");
            return (await csBn(text)) as T;
          }
          case "ur": {
            const { csUr } = await import("converters/cs/cs-ur");
            return (await csUr(text)) as T;
          }
          case "fa": {
            const { csFa } = await import("converters/cs/cs-fa");
            return (await csFa(text)) as T;
          }
          case "ar": {
            const { csAr } = await import("converters/cs/cs-ar");
            return (await csAr(text)) as T;
          }
          case "he": {
            const { csHe } = await import("converters/cs/cs-he");
            return (await csHe(text)) as T;
          }
          case "ka": {
            const { csKa } = await import("converters/cs/cs-ka");
            return (await csKa(text)) as T;
          }
          case "hy": {
            const { csHy } = await import("converters/cs/cs-hy");
            return (await csHy(text)) as T;
          }
          case "el": {
            const { csEl } = await import("converters/cs/cs-el");
            return (await csEl(text)) as T;
          }
          case "ru": {
            const { csRu } = await import("converters/cs/cs-ru");
            return (await csRu(text)) as T;
          }
          case "uk": {
            const { csUk } = await import("converters/cs/cs-uk");
            return (await csUk(text)) as T;
          }
          case "bg": {
            const { csBg } = await import("converters/cs/cs-bg");
            return (await csBg(text)) as T;
          }
          case "mk": {
            const { csMk } = await import("converters/cs/cs-mk");
            return (await csMk(text)) as T;
          }
          case "az": {
            const { csAz } = await import("converters/cs/cs-az");
            return (await csAz(text)) as T;
          }
          case "bs": {
            const { csBs } = await import("converters/cs/cs-bs");
            return (await csBs(text)) as T;
          }
          case "ca": {
            const { csCa } = await import("converters/cs/cs-ca");
            return (await csCa(text)) as T;
          }
          case "da": {
            const { csDa } = await import("converters/cs/cs-da");
            return (await csDa(text)) as T;
          }
          case "de": {
            const { csDe } = await import("converters/cs/cs-de");
            return (await csDe(text)) as T;
          }
          case "en": {
            const { csEn } = await import("converters/cs/cs-en");
            return (await csEn(text)) as T;
          }
          case "es": {
            const { csEs } = await import("converters/cs/cs-es");
            return (await csEs(text)) as T;
          }
          case "et": {
            const { csEt } = await import("converters/cs/cs-et");
            return (await csEt(text)) as T;
          }
          case "fi": {
            const { csFi } = await import("converters/cs/cs-fi");
            return (await csFi(text)) as T;
          }
          case "fr": {
            const { csFr } = await import("converters/cs/cs-fr");
            return (await csFr(text)) as T;
          }
          case "hr": {
            const { csHr } = await import("converters/cs/cs-hr");
            return (await csHr(text)) as T;
          }
          case "hu": {
            const { csHu } = await import("converters/cs/cs-hu");
            return (await csHu(text)) as T;
          }
          case "id": {
            const { csId } = await import("converters/cs/cs-id");
            return (await csId(text)) as T;
          }
          case "is": {
            const { csIs } = await import("converters/cs/cs-is");
            return (await csIs(text)) as T;
          }
          case "it": {
            const { csIt } = await import("converters/cs/cs-it");
            return (await csIt(text)) as T;
          }
          case "kk": {
            const { csKk } = await import("converters/cs/cs-kk");
            return (await csKk(text)) as T;
          }
          case "lb": {
            const { csLb } = await import("converters/cs/cs-lb");
            return (await csLb(text)) as T;
          }
          case "lt": {
            const { csLt } = await import("converters/cs/cs-lt");
            return (await csLt(text)) as T;
          }
          case "lv": {
            const { csLv } = await import("converters/cs/cs-lv");
            return (await csLv(text)) as T;
          }
          case "ms": {
            const { csMs } = await import("converters/cs/cs-ms");
            return (await csMs(text)) as T;
          }
          case "mt": {
            const { csMt } = await import("converters/cs/cs-mt");
            return (await csMt(text)) as T;
          }
          case "nl": {
            const { csNl } = await import("converters/cs/cs-nl");
            return (await csNl(text)) as T;
          }
          case "no": {
            const { csNo } = await import("converters/cs/cs-no");
            return (await csNo(text)) as T;
          }
          case "pl": {
            const { csPl } = await import("converters/cs/cs-pl");
            return (await csPl(text)) as T;
          }
          case "pt": {
            const { csPt } = await import("converters/cs/cs-pt");
            return (await csPt(text)) as T;
          }
          case "ro": {
            const { csRo } = await import("converters/cs/cs-ro");
            return (await csRo(text)) as T;
          }
          case "sk": {
            const { csSk } = await import("converters/cs/cs-sk");
            return (await csSk(text)) as T;
          }
          case "sl": {
            const { csSl } = await import("converters/cs/cs-sl");
            return (await csSl(text)) as T;
          }
          case "sq": {
            const { csSq } = await import("converters/cs/cs-sq");
            return (await csSq(text)) as T;
          }
          case "sr": {
            const { csSr } = await import("converters/cs/cs-sr");
            return (await csSr(text)) as T;
          }
          case "sv": {
            const { csSv } = await import("converters/cs/cs-sv");
            return (await csSv(text)) as T;
          }
          case "tr": {
            const { csTr } = await import("converters/cs/cs-tr");
            return (await csTr(text)) as T;
          }
          case "vi": {
            const { csVi } = await import("converters/cs/cs-vi");
            return (await csVi(text)) as T;
          }
        }
        break;
      case "da":
        switch (to) {
          case "zh": {
            const { daZh } = await import("converters/da/da-zh");
            return (await daZh(text)) as T;
          }
          case "ja": {
            const { daJa } = await import("converters/da/da-ja");
            return (await daJa(text)) as T;
          }
          case "ko": {
            const { daKo } = await import("converters/da/da-ko");
            return (await daKo(text)) as T;
          }
          case "hi": {
            const { daHi } = await import("converters/da/da-hi");
            return (await daHi(text)) as T;
          }
          case "bn": {
            const { daBn } = await import("converters/da/da-bn");
            return (await daBn(text)) as T;
          }
          case "ur": {
            const { daUr } = await import("converters/da/da-ur");
            return (await daUr(text)) as T;
          }
          case "fa": {
            const { daFa } = await import("converters/da/da-fa");
            return (await daFa(text)) as T;
          }
          case "ar": {
            const { daAr } = await import("converters/da/da-ar");
            return (await daAr(text)) as T;
          }
          case "he": {
            const { daHe } = await import("converters/da/da-he");
            return (await daHe(text)) as T;
          }
          case "ka": {
            const { daKa } = await import("converters/da/da-ka");
            return (await daKa(text)) as T;
          }
          case "hy": {
            const { daHy } = await import("converters/da/da-hy");
            return (await daHy(text)) as T;
          }
          case "el": {
            const { daEl } = await import("converters/da/da-el");
            return (await daEl(text)) as T;
          }
          case "ru": {
            const { daRu } = await import("converters/da/da-ru");
            return (await daRu(text)) as T;
          }
          case "uk": {
            const { daUk } = await import("converters/da/da-uk");
            return (await daUk(text)) as T;
          }
          case "bg": {
            const { daBg } = await import("converters/da/da-bg");
            return (await daBg(text)) as T;
          }
          case "mk": {
            const { daMk } = await import("converters/da/da-mk");
            return (await daMk(text)) as T;
          }
          case "az": {
            const { daAz } = await import("converters/da/da-az");
            return (await daAz(text)) as T;
          }
          case "bs": {
            const { daBs } = await import("converters/da/da-bs");
            return (await daBs(text)) as T;
          }
          case "ca": {
            const { daCa } = await import("converters/da/da-ca");
            return (await daCa(text)) as T;
          }
          case "cs": {
            const { daCs } = await import("converters/da/da-cs");
            return (await daCs(text)) as T;
          }
          case "de": {
            const { daDe } = await import("converters/da/da-de");
            return (await daDe(text)) as T;
          }
          case "en": {
            const { daEn } = await import("converters/da/da-en");
            return (await daEn(text)) as T;
          }
          case "es": {
            const { daEs } = await import("converters/da/da-es");
            return (await daEs(text)) as T;
          }
          case "et": {
            const { daEt } = await import("converters/da/da-et");
            return (await daEt(text)) as T;
          }
          case "fi": {
            const { daFi } = await import("converters/da/da-fi");
            return (await daFi(text)) as T;
          }
          case "fr": {
            const { daFr } = await import("converters/da/da-fr");
            return (await daFr(text)) as T;
          }
          case "hr": {
            const { daHr } = await import("converters/da/da-hr");
            return (await daHr(text)) as T;
          }
          case "hu": {
            const { daHu } = await import("converters/da/da-hu");
            return (await daHu(text)) as T;
          }
          case "id": {
            const { daId } = await import("converters/da/da-id");
            return (await daId(text)) as T;
          }
          case "is": {
            const { daIs } = await import("converters/da/da-is");
            return (await daIs(text)) as T;
          }
          case "it": {
            const { daIt } = await import("converters/da/da-it");
            return (await daIt(text)) as T;
          }
          case "kk": {
            const { daKk } = await import("converters/da/da-kk");
            return (await daKk(text)) as T;
          }
          case "lb": {
            const { daLb } = await import("converters/da/da-lb");
            return (await daLb(text)) as T;
          }
          case "lt": {
            const { daLt } = await import("converters/da/da-lt");
            return (await daLt(text)) as T;
          }
          case "lv": {
            const { daLv } = await import("converters/da/da-lv");
            return (await daLv(text)) as T;
          }
          case "ms": {
            const { daMs } = await import("converters/da/da-ms");
            return (await daMs(text)) as T;
          }
          case "mt": {
            const { daMt } = await import("converters/da/da-mt");
            return (await daMt(text)) as T;
          }
          case "nl": {
            const { daNl } = await import("converters/da/da-nl");
            return (await daNl(text)) as T;
          }
          case "no": {
            const { daNo } = await import("converters/da/da-no");
            return (await daNo(text)) as T;
          }
          case "pl": {
            const { daPl } = await import("converters/da/da-pl");
            return (await daPl(text)) as T;
          }
          case "pt": {
            const { daPt } = await import("converters/da/da-pt");
            return (await daPt(text)) as T;
          }
          case "ro": {
            const { daRo } = await import("converters/da/da-ro");
            return (await daRo(text)) as T;
          }
          case "sk": {
            const { daSk } = await import("converters/da/da-sk");
            return (await daSk(text)) as T;
          }
          case "sl": {
            const { daSl } = await import("converters/da/da-sl");
            return (await daSl(text)) as T;
          }
          case "sq": {
            const { daSq } = await import("converters/da/da-sq");
            return (await daSq(text)) as T;
          }
          case "sr": {
            const { daSr } = await import("converters/da/da-sr");
            return (await daSr(text)) as T;
          }
          case "sv": {
            const { daSv } = await import("converters/da/da-sv");
            return (await daSv(text)) as T;
          }
          case "tr": {
            const { daTr } = await import("converters/da/da-tr");
            return (await daTr(text)) as T;
          }
          case "vi": {
            const { daVi } = await import("converters/da/da-vi");
            return (await daVi(text)) as T;
          }
        }
        break;
      case "de":
        switch (to) {
          case "zh": {
            const { deZh } = await import("converters/de/de-zh");
            return (await deZh(text)) as T;
          }
          case "ja": {
            const { deJa } = await import("converters/de/de-ja");
            return (await deJa(text)) as T;
          }
          case "ko": {
            const { deKo } = await import("converters/de/de-ko");
            return (await deKo(text)) as T;
          }
          case "hi": {
            const { deHi } = await import("converters/de/de-hi");
            return (await deHi(text)) as T;
          }
          case "bn": {
            const { deBn } = await import("converters/de/de-bn");
            return (await deBn(text)) as T;
          }
          case "ur": {
            const { deUr } = await import("converters/de/de-ur");
            return (await deUr(text)) as T;
          }
          case "fa": {
            const { deFa } = await import("converters/de/de-fa");
            return (await deFa(text)) as T;
          }
          case "ar": {
            const { deAr } = await import("converters/de/de-ar");
            return (await deAr(text)) as T;
          }
          case "he": {
            const { deHe } = await import("converters/de/de-he");
            return (await deHe(text)) as T;
          }
          case "ka": {
            const { deKa } = await import("converters/de/de-ka");
            return (await deKa(text)) as T;
          }
          case "hy": {
            const { deHy } = await import("converters/de/de-hy");
            return (await deHy(text)) as T;
          }
          case "el": {
            const { deEl } = await import("converters/de/de-el");
            return (await deEl(text)) as T;
          }
          case "ru": {
            const { deRu } = await import("converters/de/de-ru");
            return (await deRu(text)) as T;
          }
          case "uk": {
            const { deUk } = await import("converters/de/de-uk");
            return (await deUk(text)) as T;
          }
          case "bg": {
            const { deBg } = await import("converters/de/de-bg");
            return (await deBg(text)) as T;
          }
          case "mk": {
            const { deMk } = await import("converters/de/de-mk");
            return (await deMk(text)) as T;
          }
          case "az": {
            const { deAz } = await import("converters/de/de-az");
            return (await deAz(text)) as T;
          }
          case "bs": {
            const { deBs } = await import("converters/de/de-bs");
            return (await deBs(text)) as T;
          }
          case "ca": {
            const { deCa } = await import("converters/de/de-ca");
            return (await deCa(text)) as T;
          }
          case "cs": {
            const { deCs } = await import("converters/de/de-cs");
            return (await deCs(text)) as T;
          }
          case "da": {
            const { deDa } = await import("converters/de/de-da");
            return (await deDa(text)) as T;
          }
          case "en": {
            const { deEn } = await import("converters/de/de-en");
            return (await deEn(text)) as T;
          }
          case "es": {
            const { deEs } = await import("converters/de/de-es");
            return (await deEs(text)) as T;
          }
          case "et": {
            const { deEt } = await import("converters/de/de-et");
            return (await deEt(text)) as T;
          }
          case "fi": {
            const { deFi } = await import("converters/de/de-fi");
            return (await deFi(text)) as T;
          }
          case "fr": {
            const { deFr } = await import("converters/de/de-fr");
            return (await deFr(text)) as T;
          }
          case "hr": {
            const { deHr } = await import("converters/de/de-hr");
            return (await deHr(text)) as T;
          }
          case "hu": {
            const { deHu } = await import("converters/de/de-hu");
            return (await deHu(text)) as T;
          }
          case "id": {
            const { deId } = await import("converters/de/de-id");
            return (await deId(text)) as T;
          }
          case "is": {
            const { deIs } = await import("converters/de/de-is");
            return (await deIs(text)) as T;
          }
          case "it": {
            const { deIt } = await import("converters/de/de-it");
            return (await deIt(text)) as T;
          }
          case "kk": {
            const { deKk } = await import("converters/de/de-kk");
            return (await deKk(text)) as T;
          }
          case "lb": {
            const { deLb } = await import("converters/de/de-lb");
            return (await deLb(text)) as T;
          }
          case "lt": {
            const { deLt } = await import("converters/de/de-lt");
            return (await deLt(text)) as T;
          }
          case "lv": {
            const { deLv } = await import("converters/de/de-lv");
            return (await deLv(text)) as T;
          }
          case "ms": {
            const { deMs } = await import("converters/de/de-ms");
            return (await deMs(text)) as T;
          }
          case "mt": {
            const { deMt } = await import("converters/de/de-mt");
            return (await deMt(text)) as T;
          }
          case "nl": {
            const { deNl } = await import("converters/de/de-nl");
            return (await deNl(text)) as T;
          }
          case "no": {
            const { deNo } = await import("converters/de/de-no");
            return (await deNo(text)) as T;
          }
          case "pl": {
            const { dePl } = await import("converters/de/de-pl");
            return (await dePl(text)) as T;
          }
          case "pt": {
            const { dePt } = await import("converters/de/de-pt");
            return (await dePt(text)) as T;
          }
          case "ro": {
            const { deRo } = await import("converters/de/de-ro");
            return (await deRo(text)) as T;
          }
          case "sk": {
            const { deSk } = await import("converters/de/de-sk");
            return (await deSk(text)) as T;
          }
          case "sl": {
            const { deSl } = await import("converters/de/de-sl");
            return (await deSl(text)) as T;
          }
          case "sq": {
            const { deSq } = await import("converters/de/de-sq");
            return (await deSq(text)) as T;
          }
          case "sr": {
            const { deSr } = await import("converters/de/de-sr");
            return (await deSr(text)) as T;
          }
          case "sv": {
            const { deSv } = await import("converters/de/de-sv");
            return (await deSv(text)) as T;
          }
          case "tr": {
            const { deTr } = await import("converters/de/de-tr");
            return (await deTr(text)) as T;
          }
          case "vi": {
            const { deVi } = await import("converters/de/de-vi");
            return (await deVi(text)) as T;
          }
        }
        break;
      case "en":
        switch (to) {
          case "zh": {
            const { enZh } = await import("converters/en/en-zh");
            return (await enZh(text)) as T;
          }
          case "ja": {
            const { enJa } = await import("converters/en/en-ja");
            return (await enJa(text)) as T;
          }
          case "ko": {
            const { enKo } = await import("converters/en/en-ko");
            return (await enKo(text)) as T;
          }
          case "hi": {
            const { enHi } = await import("converters/en/en-hi");
            return (await enHi(text)) as T;
          }
          case "bn": {
            const { enBn } = await import("converters/en/en-bn");
            return (await enBn(text)) as T;
          }
          case "ur": {
            const { enUr } = await import("converters/en/en-ur");
            return (await enUr(text)) as T;
          }
          case "fa": {
            const { enFa } = await import("converters/en/en-fa");
            return (await enFa(text)) as T;
          }
          case "ar": {
            const { enAr } = await import("converters/en/en-ar");
            return (await enAr(text)) as T;
          }
          case "he": {
            const { enHe } = await import("converters/en/en-he");
            return (await enHe(text)) as T;
          }
          case "ka": {
            const { enKa } = await import("converters/en/en-ka");
            return (await enKa(text)) as T;
          }
          case "hy": {
            const { enHy } = await import("converters/en/en-hy");
            return (await enHy(text)) as T;
          }
          case "el": {
            const { enEl } = await import("converters/en/en-el");
            return (await enEl(text)) as T;
          }
          case "ru": {
            const { enRu } = await import("converters/en/en-ru");
            return (await enRu(text)) as T;
          }
          case "uk": {
            const { enUk } = await import("converters/en/en-uk");
            return (await enUk(text)) as T;
          }
          case "bg": {
            const { enBg } = await import("converters/en/en-bg");
            return (await enBg(text)) as T;
          }
          case "mk": {
            const { enMk } = await import("converters/en/en-mk");
            return (await enMk(text)) as T;
          }
          case "az": {
            const { enAz } = await import("converters/en/en-az");
            return (await enAz(text)) as T;
          }
          case "bs": {
            const { enBs } = await import("converters/en/en-bs");
            return (await enBs(text)) as T;
          }
          case "ca": {
            const { enCa } = await import("converters/en/en-ca");
            return (await enCa(text)) as T;
          }
          case "cs": {
            const { enCs } = await import("converters/en/en-cs");
            return (await enCs(text)) as T;
          }
          case "da": {
            const { enDa } = await import("converters/en/en-da");
            return (await enDa(text)) as T;
          }
          case "de": {
            const { enDe } = await import("converters/en/en-de");
            return (await enDe(text)) as T;
          }
          case "es": {
            const { enEs } = await import("converters/en/en-es");
            return (await enEs(text)) as T;
          }
          case "et": {
            const { enEt } = await import("converters/en/en-et");
            return (await enEt(text)) as T;
          }
          case "fi": {
            const { enFi } = await import("converters/en/en-fi");
            return (await enFi(text)) as T;
          }
          case "fr": {
            const { enFr } = await import("converters/en/en-fr");
            return (await enFr(text)) as T;
          }
          case "hr": {
            const { enHr } = await import("converters/en/en-hr");
            return (await enHr(text)) as T;
          }
          case "hu": {
            const { enHu } = await import("converters/en/en-hu");
            return (await enHu(text)) as T;
          }
          case "id": {
            const { enId } = await import("converters/en/en-id");
            return (await enId(text)) as T;
          }
          case "is": {
            const { enIs } = await import("converters/en/en-is");
            return (await enIs(text)) as T;
          }
          case "it": {
            const { enIt } = await import("converters/en/en-it");
            return (await enIt(text)) as T;
          }
          case "kk": {
            const { enKk } = await import("converters/en/en-kk");
            return (await enKk(text)) as T;
          }
          case "lb": {
            const { enLb } = await import("converters/en/en-lb");
            return (await enLb(text)) as T;
          }
          case "lt": {
            const { enLt } = await import("converters/en/en-lt");
            return (await enLt(text)) as T;
          }
          case "lv": {
            const { enLv } = await import("converters/en/en-lv");
            return (await enLv(text)) as T;
          }
          case "ms": {
            const { enMs } = await import("converters/en/en-ms");
            return (await enMs(text)) as T;
          }
          case "mt": {
            const { enMt } = await import("converters/en/en-mt");
            return (await enMt(text)) as T;
          }
          case "nl": {
            const { enNl } = await import("converters/en/en-nl");
            return (await enNl(text)) as T;
          }
          case "no": {
            const { enNo } = await import("converters/en/en-no");
            return (await enNo(text)) as T;
          }
          case "pl": {
            const { enPl } = await import("converters/en/en-pl");
            return (await enPl(text)) as T;
          }
          case "pt": {
            const { enPt } = await import("converters/en/en-pt");
            return (await enPt(text)) as T;
          }
          case "ro": {
            const { enRo } = await import("converters/en/en-ro");
            return (await enRo(text)) as T;
          }
          case "sk": {
            const { enSk } = await import("converters/en/en-sk");
            return (await enSk(text)) as T;
          }
          case "sl": {
            const { enSl } = await import("converters/en/en-sl");
            return (await enSl(text)) as T;
          }
          case "sq": {
            const { enSq } = await import("converters/en/en-sq");
            return (await enSq(text)) as T;
          }
          case "sr": {
            const { enSr } = await import("converters/en/en-sr");
            return (await enSr(text)) as T;
          }
          case "sv": {
            const { enSv } = await import("converters/en/en-sv");
            return (await enSv(text)) as T;
          }
          case "tr": {
            const { enTr } = await import("converters/en/en-tr");
            return (await enTr(text)) as T;
          }
          case "vi": {
            const { enVi } = await import("converters/en/en-vi");
            return (await enVi(text)) as T;
          }
        }
        break;
      case "es":
        switch (to) {
          case "zh": {
            const { esZh } = await import("converters/es/es-zh");
            return (await esZh(text)) as T;
          }
          case "ja": {
            const { esJa } = await import("converters/es/es-ja");
            return (await esJa(text)) as T;
          }
          case "ko": {
            const { esKo } = await import("converters/es/es-ko");
            return (await esKo(text)) as T;
          }
          case "hi": {
            const { esHi } = await import("converters/es/es-hi");
            return (await esHi(text)) as T;
          }
          case "bn": {
            const { esBn } = await import("converters/es/es-bn");
            return (await esBn(text)) as T;
          }
          case "ur": {
            const { esUr } = await import("converters/es/es-ur");
            return (await esUr(text)) as T;
          }
          case "fa": {
            const { esFa } = await import("converters/es/es-fa");
            return (await esFa(text)) as T;
          }
          case "ar": {
            const { esAr } = await import("converters/es/es-ar");
            return (await esAr(text)) as T;
          }
          case "he": {
            const { esHe } = await import("converters/es/es-he");
            return (await esHe(text)) as T;
          }
          case "ka": {
            const { esKa } = await import("converters/es/es-ka");
            return (await esKa(text)) as T;
          }
          case "hy": {
            const { esHy } = await import("converters/es/es-hy");
            return (await esHy(text)) as T;
          }
          case "el": {
            const { esEl } = await import("converters/es/es-el");
            return (await esEl(text)) as T;
          }
          case "ru": {
            const { esRu } = await import("converters/es/es-ru");
            return (await esRu(text)) as T;
          }
          case "uk": {
            const { esUk } = await import("converters/es/es-uk");
            return (await esUk(text)) as T;
          }
          case "bg": {
            const { esBg } = await import("converters/es/es-bg");
            return (await esBg(text)) as T;
          }
          case "mk": {
            const { esMk } = await import("converters/es/es-mk");
            return (await esMk(text)) as T;
          }
          case "az": {
            const { esAz } = await import("converters/es/es-az");
            return (await esAz(text)) as T;
          }
          case "bs": {
            const { esBs } = await import("converters/es/es-bs");
            return (await esBs(text)) as T;
          }
          case "ca": {
            const { esCa } = await import("converters/es/es-ca");
            return (await esCa(text)) as T;
          }
          case "cs": {
            const { esCs } = await import("converters/es/es-cs");
            return (await esCs(text)) as T;
          }
          case "da": {
            const { esDa } = await import("converters/es/es-da");
            return (await esDa(text)) as T;
          }
          case "de": {
            const { esDe } = await import("converters/es/es-de");
            return (await esDe(text)) as T;
          }
          case "en": {
            const { esEn } = await import("converters/es/es-en");
            return (await esEn(text)) as T;
          }
          case "et": {
            const { esEt } = await import("converters/es/es-et");
            return (await esEt(text)) as T;
          }
          case "fi": {
            const { esFi } = await import("converters/es/es-fi");
            return (await esFi(text)) as T;
          }
          case "fr": {
            const { esFr } = await import("converters/es/es-fr");
            return (await esFr(text)) as T;
          }
          case "hr": {
            const { esHr } = await import("converters/es/es-hr");
            return (await esHr(text)) as T;
          }
          case "hu": {
            const { esHu } = await import("converters/es/es-hu");
            return (await esHu(text)) as T;
          }
          case "id": {
            const { esId } = await import("converters/es/es-id");
            return (await esId(text)) as T;
          }
          case "is": {
            const { esIs } = await import("converters/es/es-is");
            return (await esIs(text)) as T;
          }
          case "it": {
            const { esIt } = await import("converters/es/es-it");
            return (await esIt(text)) as T;
          }
          case "kk": {
            const { esKk } = await import("converters/es/es-kk");
            return (await esKk(text)) as T;
          }
          case "lb": {
            const { esLb } = await import("converters/es/es-lb");
            return (await esLb(text)) as T;
          }
          case "lt": {
            const { esLt } = await import("converters/es/es-lt");
            return (await esLt(text)) as T;
          }
          case "lv": {
            const { esLv } = await import("converters/es/es-lv");
            return (await esLv(text)) as T;
          }
          case "ms": {
            const { esMs } = await import("converters/es/es-ms");
            return (await esMs(text)) as T;
          }
          case "mt": {
            const { esMt } = await import("converters/es/es-mt");
            return (await esMt(text)) as T;
          }
          case "nl": {
            const { esNl } = await import("converters/es/es-nl");
            return (await esNl(text)) as T;
          }
          case "no": {
            const { esNo } = await import("converters/es/es-no");
            return (await esNo(text)) as T;
          }
          case "pl": {
            const { esPl } = await import("converters/es/es-pl");
            return (await esPl(text)) as T;
          }
          case "pt": {
            const { esPt } = await import("converters/es/es-pt");
            return (await esPt(text)) as T;
          }
          case "ro": {
            const { esRo } = await import("converters/es/es-ro");
            return (await esRo(text)) as T;
          }
          case "sk": {
            const { esSk } = await import("converters/es/es-sk");
            return (await esSk(text)) as T;
          }
          case "sl": {
            const { esSl } = await import("converters/es/es-sl");
            return (await esSl(text)) as T;
          }
          case "sq": {
            const { esSq } = await import("converters/es/es-sq");
            return (await esSq(text)) as T;
          }
          case "sr": {
            const { esSr } = await import("converters/es/es-sr");
            return (await esSr(text)) as T;
          }
          case "sv": {
            const { esSv } = await import("converters/es/es-sv");
            return (await esSv(text)) as T;
          }
          case "tr": {
            const { esTr } = await import("converters/es/es-tr");
            return (await esTr(text)) as T;
          }
          case "vi": {
            const { esVi } = await import("converters/es/es-vi");
            return (await esVi(text)) as T;
          }
        }
        break;
      case "et":
        switch (to) {
          case "zh": {
            const { etZh } = await import("converters/et/et-zh");
            return (await etZh(text)) as T;
          }
          case "ja": {
            const { etJa } = await import("converters/et/et-ja");
            return (await etJa(text)) as T;
          }
          case "ko": {
            const { etKo } = await import("converters/et/et-ko");
            return (await etKo(text)) as T;
          }
          case "hi": {
            const { etHi } = await import("converters/et/et-hi");
            return (await etHi(text)) as T;
          }
          case "bn": {
            const { etBn } = await import("converters/et/et-bn");
            return (await etBn(text)) as T;
          }
          case "ur": {
            const { etUr } = await import("converters/et/et-ur");
            return (await etUr(text)) as T;
          }
          case "fa": {
            const { etFa } = await import("converters/et/et-fa");
            return (await etFa(text)) as T;
          }
          case "ar": {
            const { etAr } = await import("converters/et/et-ar");
            return (await etAr(text)) as T;
          }
          case "he": {
            const { etHe } = await import("converters/et/et-he");
            return (await etHe(text)) as T;
          }
          case "ka": {
            const { etKa } = await import("converters/et/et-ka");
            return (await etKa(text)) as T;
          }
          case "hy": {
            const { etHy } = await import("converters/et/et-hy");
            return (await etHy(text)) as T;
          }
          case "el": {
            const { etEl } = await import("converters/et/et-el");
            return (await etEl(text)) as T;
          }
          case "ru": {
            const { etRu } = await import("converters/et/et-ru");
            return (await etRu(text)) as T;
          }
          case "uk": {
            const { etUk } = await import("converters/et/et-uk");
            return (await etUk(text)) as T;
          }
          case "bg": {
            const { etBg } = await import("converters/et/et-bg");
            return (await etBg(text)) as T;
          }
          case "mk": {
            const { etMk } = await import("converters/et/et-mk");
            return (await etMk(text)) as T;
          }
          case "az": {
            const { etAz } = await import("converters/et/et-az");
            return (await etAz(text)) as T;
          }
          case "bs": {
            const { etBs } = await import("converters/et/et-bs");
            return (await etBs(text)) as T;
          }
          case "ca": {
            const { etCa } = await import("converters/et/et-ca");
            return (await etCa(text)) as T;
          }
          case "cs": {
            const { etCs } = await import("converters/et/et-cs");
            return (await etCs(text)) as T;
          }
          case "da": {
            const { etDa } = await import("converters/et/et-da");
            return (await etDa(text)) as T;
          }
          case "de": {
            const { etDe } = await import("converters/et/et-de");
            return (await etDe(text)) as T;
          }
          case "en": {
            const { etEn } = await import("converters/et/et-en");
            return (await etEn(text)) as T;
          }
          case "es": {
            const { etEs } = await import("converters/et/et-es");
            return (await etEs(text)) as T;
          }
          case "fi": {
            const { etFi } = await import("converters/et/et-fi");
            return (await etFi(text)) as T;
          }
          case "fr": {
            const { etFr } = await import("converters/et/et-fr");
            return (await etFr(text)) as T;
          }
          case "hr": {
            const { etHr } = await import("converters/et/et-hr");
            return (await etHr(text)) as T;
          }
          case "hu": {
            const { etHu } = await import("converters/et/et-hu");
            return (await etHu(text)) as T;
          }
          case "id": {
            const { etId } = await import("converters/et/et-id");
            return (await etId(text)) as T;
          }
          case "is": {
            const { etIs } = await import("converters/et/et-is");
            return (await etIs(text)) as T;
          }
          case "it": {
            const { etIt } = await import("converters/et/et-it");
            return (await etIt(text)) as T;
          }
          case "kk": {
            const { etKk } = await import("converters/et/et-kk");
            return (await etKk(text)) as T;
          }
          case "lb": {
            const { etLb } = await import("converters/et/et-lb");
            return (await etLb(text)) as T;
          }
          case "lt": {
            const { etLt } = await import("converters/et/et-lt");
            return (await etLt(text)) as T;
          }
          case "lv": {
            const { etLv } = await import("converters/et/et-lv");
            return (await etLv(text)) as T;
          }
          case "ms": {
            const { etMs } = await import("converters/et/et-ms");
            return (await etMs(text)) as T;
          }
          case "mt": {
            const { etMt } = await import("converters/et/et-mt");
            return (await etMt(text)) as T;
          }
          case "nl": {
            const { etNl } = await import("converters/et/et-nl");
            return (await etNl(text)) as T;
          }
          case "no": {
            const { etNo } = await import("converters/et/et-no");
            return (await etNo(text)) as T;
          }
          case "pl": {
            const { etPl } = await import("converters/et/et-pl");
            return (await etPl(text)) as T;
          }
          case "pt": {
            const { etPt } = await import("converters/et/et-pt");
            return (await etPt(text)) as T;
          }
          case "ro": {
            const { etRo } = await import("converters/et/et-ro");
            return (await etRo(text)) as T;
          }
          case "sk": {
            const { etSk } = await import("converters/et/et-sk");
            return (await etSk(text)) as T;
          }
          case "sl": {
            const { etSl } = await import("converters/et/et-sl");
            return (await etSl(text)) as T;
          }
          case "sq": {
            const { etSq } = await import("converters/et/et-sq");
            return (await etSq(text)) as T;
          }
          case "sr": {
            const { etSr } = await import("converters/et/et-sr");
            return (await etSr(text)) as T;
          }
          case "sv": {
            const { etSv } = await import("converters/et/et-sv");
            return (await etSv(text)) as T;
          }
          case "tr": {
            const { etTr } = await import("converters/et/et-tr");
            return (await etTr(text)) as T;
          }
          case "vi": {
            const { etVi } = await import("converters/et/et-vi");
            return (await etVi(text)) as T;
          }
        }
        break;
      case "fi":
        switch (to) {
          case "zh": {
            const { fiZh } = await import("converters/fi/fi-zh");
            return (await fiZh(text)) as T;
          }
          case "ja": {
            const { fiJa } = await import("converters/fi/fi-ja");
            return (await fiJa(text)) as T;
          }
          case "ko": {
            const { fiKo } = await import("converters/fi/fi-ko");
            return (await fiKo(text)) as T;
          }
          case "hi": {
            const { fiHi } = await import("converters/fi/fi-hi");
            return (await fiHi(text)) as T;
          }
          case "bn": {
            const { fiBn } = await import("converters/fi/fi-bn");
            return (await fiBn(text)) as T;
          }
          case "ur": {
            const { fiUr } = await import("converters/fi/fi-ur");
            return (await fiUr(text)) as T;
          }
          case "fa": {
            const { fiFa } = await import("converters/fi/fi-fa");
            return (await fiFa(text)) as T;
          }
          case "ar": {
            const { fiAr } = await import("converters/fi/fi-ar");
            return (await fiAr(text)) as T;
          }
          case "he": {
            const { fiHe } = await import("converters/fi/fi-he");
            return (await fiHe(text)) as T;
          }
          case "ka": {
            const { fiKa } = await import("converters/fi/fi-ka");
            return (await fiKa(text)) as T;
          }
          case "hy": {
            const { fiHy } = await import("converters/fi/fi-hy");
            return (await fiHy(text)) as T;
          }
          case "el": {
            const { fiEl } = await import("converters/fi/fi-el");
            return (await fiEl(text)) as T;
          }
          case "ru": {
            const { fiRu } = await import("converters/fi/fi-ru");
            return (await fiRu(text)) as T;
          }
          case "uk": {
            const { fiUk } = await import("converters/fi/fi-uk");
            return (await fiUk(text)) as T;
          }
          case "bg": {
            const { fiBg } = await import("converters/fi/fi-bg");
            return (await fiBg(text)) as T;
          }
          case "mk": {
            const { fiMk } = await import("converters/fi/fi-mk");
            return (await fiMk(text)) as T;
          }
          case "az": {
            const { fiAz } = await import("converters/fi/fi-az");
            return (await fiAz(text)) as T;
          }
          case "bs": {
            const { fiBs } = await import("converters/fi/fi-bs");
            return (await fiBs(text)) as T;
          }
          case "ca": {
            const { fiCa } = await import("converters/fi/fi-ca");
            return (await fiCa(text)) as T;
          }
          case "cs": {
            const { fiCs } = await import("converters/fi/fi-cs");
            return (await fiCs(text)) as T;
          }
          case "da": {
            const { fiDa } = await import("converters/fi/fi-da");
            return (await fiDa(text)) as T;
          }
          case "de": {
            const { fiDe } = await import("converters/fi/fi-de");
            return (await fiDe(text)) as T;
          }
          case "en": {
            const { fiEn } = await import("converters/fi/fi-en");
            return (await fiEn(text)) as T;
          }
          case "es": {
            const { fiEs } = await import("converters/fi/fi-es");
            return (await fiEs(text)) as T;
          }
          case "et": {
            const { fiEt } = await import("converters/fi/fi-et");
            return (await fiEt(text)) as T;
          }
          case "fr": {
            const { fiFr } = await import("converters/fi/fi-fr");
            return (await fiFr(text)) as T;
          }
          case "hr": {
            const { fiHr } = await import("converters/fi/fi-hr");
            return (await fiHr(text)) as T;
          }
          case "hu": {
            const { fiHu } = await import("converters/fi/fi-hu");
            return (await fiHu(text)) as T;
          }
          case "id": {
            const { fiId } = await import("converters/fi/fi-id");
            return (await fiId(text)) as T;
          }
          case "is": {
            const { fiIs } = await import("converters/fi/fi-is");
            return (await fiIs(text)) as T;
          }
          case "it": {
            const { fiIt } = await import("converters/fi/fi-it");
            return (await fiIt(text)) as T;
          }
          case "kk": {
            const { fiKk } = await import("converters/fi/fi-kk");
            return (await fiKk(text)) as T;
          }
          case "lb": {
            const { fiLb } = await import("converters/fi/fi-lb");
            return (await fiLb(text)) as T;
          }
          case "lt": {
            const { fiLt } = await import("converters/fi/fi-lt");
            return (await fiLt(text)) as T;
          }
          case "lv": {
            const { fiLv } = await import("converters/fi/fi-lv");
            return (await fiLv(text)) as T;
          }
          case "ms": {
            const { fiMs } = await import("converters/fi/fi-ms");
            return (await fiMs(text)) as T;
          }
          case "mt": {
            const { fiMt } = await import("converters/fi/fi-mt");
            return (await fiMt(text)) as T;
          }
          case "nl": {
            const { fiNl } = await import("converters/fi/fi-nl");
            return (await fiNl(text)) as T;
          }
          case "no": {
            const { fiNo } = await import("converters/fi/fi-no");
            return (await fiNo(text)) as T;
          }
          case "pl": {
            const { fiPl } = await import("converters/fi/fi-pl");
            return (await fiPl(text)) as T;
          }
          case "pt": {
            const { fiPt } = await import("converters/fi/fi-pt");
            return (await fiPt(text)) as T;
          }
          case "ro": {
            const { fiRo } = await import("converters/fi/fi-ro");
            return (await fiRo(text)) as T;
          }
          case "sk": {
            const { fiSk } = await import("converters/fi/fi-sk");
            return (await fiSk(text)) as T;
          }
          case "sl": {
            const { fiSl } = await import("converters/fi/fi-sl");
            return (await fiSl(text)) as T;
          }
          case "sq": {
            const { fiSq } = await import("converters/fi/fi-sq");
            return (await fiSq(text)) as T;
          }
          case "sr": {
            const { fiSr } = await import("converters/fi/fi-sr");
            return (await fiSr(text)) as T;
          }
          case "sv": {
            const { fiSv } = await import("converters/fi/fi-sv");
            return (await fiSv(text)) as T;
          }
          case "tr": {
            const { fiTr } = await import("converters/fi/fi-tr");
            return (await fiTr(text)) as T;
          }
          case "vi": {
            const { fiVi } = await import("converters/fi/fi-vi");
            return (await fiVi(text)) as T;
          }
        }
        break;
      case "fr":
        switch (to) {
          case "zh": {
            const { frZh } = await import("converters/fr/fr-zh");
            return (await frZh(text)) as T;
          }
          case "ja": {
            const { frJa } = await import("converters/fr/fr-ja");
            return (await frJa(text)) as T;
          }
          case "ko": {
            const { frKo } = await import("converters/fr/fr-ko");
            return (await frKo(text)) as T;
          }
          case "hi": {
            const { frHi } = await import("converters/fr/fr-hi");
            return (await frHi(text)) as T;
          }
          case "bn": {
            const { frBn } = await import("converters/fr/fr-bn");
            return (await frBn(text)) as T;
          }
          case "ur": {
            const { frUr } = await import("converters/fr/fr-ur");
            return (await frUr(text)) as T;
          }
          case "fa": {
            const { frFa } = await import("converters/fr/fr-fa");
            return (await frFa(text)) as T;
          }
          case "ar": {
            const { frAr } = await import("converters/fr/fr-ar");
            return (await frAr(text)) as T;
          }
          case "he": {
            const { frHe } = await import("converters/fr/fr-he");
            return (await frHe(text)) as T;
          }
          case "ka": {
            const { frKa } = await import("converters/fr/fr-ka");
            return (await frKa(text)) as T;
          }
          case "hy": {
            const { frHy } = await import("converters/fr/fr-hy");
            return (await frHy(text)) as T;
          }
          case "el": {
            const { frEl } = await import("converters/fr/fr-el");
            return (await frEl(text)) as T;
          }
          case "ru": {
            const { frRu } = await import("converters/fr/fr-ru");
            return (await frRu(text)) as T;
          }
          case "uk": {
            const { frUk } = await import("converters/fr/fr-uk");
            return (await frUk(text)) as T;
          }
          case "bg": {
            const { frBg } = await import("converters/fr/fr-bg");
            return (await frBg(text)) as T;
          }
          case "mk": {
            const { frMk } = await import("converters/fr/fr-mk");
            return (await frMk(text)) as T;
          }
          case "az": {
            const { frAz } = await import("converters/fr/fr-az");
            return (await frAz(text)) as T;
          }
          case "bs": {
            const { frBs } = await import("converters/fr/fr-bs");
            return (await frBs(text)) as T;
          }
          case "ca": {
            const { frCa } = await import("converters/fr/fr-ca");
            return (await frCa(text)) as T;
          }
          case "cs": {
            const { frCs } = await import("converters/fr/fr-cs");
            return (await frCs(text)) as T;
          }
          case "da": {
            const { frDa } = await import("converters/fr/fr-da");
            return (await frDa(text)) as T;
          }
          case "de": {
            const { frDe } = await import("converters/fr/fr-de");
            return (await frDe(text)) as T;
          }
          case "en": {
            const { frEn } = await import("converters/fr/fr-en");
            return (await frEn(text)) as T;
          }
          case "es": {
            const { frEs } = await import("converters/fr/fr-es");
            return (await frEs(text)) as T;
          }
          case "et": {
            const { frEt } = await import("converters/fr/fr-et");
            return (await frEt(text)) as T;
          }
          case "fi": {
            const { frFi } = await import("converters/fr/fr-fi");
            return (await frFi(text)) as T;
          }
          case "hr": {
            const { frHr } = await import("converters/fr/fr-hr");
            return (await frHr(text)) as T;
          }
          case "hu": {
            const { frHu } = await import("converters/fr/fr-hu");
            return (await frHu(text)) as T;
          }
          case "id": {
            const { frId } = await import("converters/fr/fr-id");
            return (await frId(text)) as T;
          }
          case "is": {
            const { frIs } = await import("converters/fr/fr-is");
            return (await frIs(text)) as T;
          }
          case "it": {
            const { frIt } = await import("converters/fr/fr-it");
            return (await frIt(text)) as T;
          }
          case "kk": {
            const { frKk } = await import("converters/fr/fr-kk");
            return (await frKk(text)) as T;
          }
          case "lb": {
            const { frLb } = await import("converters/fr/fr-lb");
            return (await frLb(text)) as T;
          }
          case "lt": {
            const { frLt } = await import("converters/fr/fr-lt");
            return (await frLt(text)) as T;
          }
          case "lv": {
            const { frLv } = await import("converters/fr/fr-lv");
            return (await frLv(text)) as T;
          }
          case "ms": {
            const { frMs } = await import("converters/fr/fr-ms");
            return (await frMs(text)) as T;
          }
          case "mt": {
            const { frMt } = await import("converters/fr/fr-mt");
            return (await frMt(text)) as T;
          }
          case "nl": {
            const { frNl } = await import("converters/fr/fr-nl");
            return (await frNl(text)) as T;
          }
          case "no": {
            const { frNo } = await import("converters/fr/fr-no");
            return (await frNo(text)) as T;
          }
          case "pl": {
            const { frPl } = await import("converters/fr/fr-pl");
            return (await frPl(text)) as T;
          }
          case "pt": {
            const { frPt } = await import("converters/fr/fr-pt");
            return (await frPt(text)) as T;
          }
          case "ro": {
            const { frRo } = await import("converters/fr/fr-ro");
            return (await frRo(text)) as T;
          }
          case "sk": {
            const { frSk } = await import("converters/fr/fr-sk");
            return (await frSk(text)) as T;
          }
          case "sl": {
            const { frSl } = await import("converters/fr/fr-sl");
            return (await frSl(text)) as T;
          }
          case "sq": {
            const { frSq } = await import("converters/fr/fr-sq");
            return (await frSq(text)) as T;
          }
          case "sr": {
            const { frSr } = await import("converters/fr/fr-sr");
            return (await frSr(text)) as T;
          }
          case "sv": {
            const { frSv } = await import("converters/fr/fr-sv");
            return (await frSv(text)) as T;
          }
          case "tr": {
            const { frTr } = await import("converters/fr/fr-tr");
            return (await frTr(text)) as T;
          }
          case "vi": {
            const { frVi } = await import("converters/fr/fr-vi");
            return (await frVi(text)) as T;
          }
        }
        break;
      case "hr":
        switch (to) {
          case "zh": {
            const { hrZh } = await import("converters/hr/hr-zh");
            return (await hrZh(text)) as T;
          }
          case "ja": {
            const { hrJa } = await import("converters/hr/hr-ja");
            return (await hrJa(text)) as T;
          }
          case "ko": {
            const { hrKo } = await import("converters/hr/hr-ko");
            return (await hrKo(text)) as T;
          }
          case "hi": {
            const { hrHi } = await import("converters/hr/hr-hi");
            return (await hrHi(text)) as T;
          }
          case "bn": {
            const { hrBn } = await import("converters/hr/hr-bn");
            return (await hrBn(text)) as T;
          }
          case "ur": {
            const { hrUr } = await import("converters/hr/hr-ur");
            return (await hrUr(text)) as T;
          }
          case "fa": {
            const { hrFa } = await import("converters/hr/hr-fa");
            return (await hrFa(text)) as T;
          }
          case "ar": {
            const { hrAr } = await import("converters/hr/hr-ar");
            return (await hrAr(text)) as T;
          }
          case "he": {
            const { hrHe } = await import("converters/hr/hr-he");
            return (await hrHe(text)) as T;
          }
          case "ka": {
            const { hrKa } = await import("converters/hr/hr-ka");
            return (await hrKa(text)) as T;
          }
          case "hy": {
            const { hrHy } = await import("converters/hr/hr-hy");
            return (await hrHy(text)) as T;
          }
          case "el": {
            const { hrEl } = await import("converters/hr/hr-el");
            return (await hrEl(text)) as T;
          }
          case "ru": {
            const { hrRu } = await import("converters/hr/hr-ru");
            return (await hrRu(text)) as T;
          }
          case "uk": {
            const { hrUk } = await import("converters/hr/hr-uk");
            return (await hrUk(text)) as T;
          }
          case "bg": {
            const { hrBg } = await import("converters/hr/hr-bg");
            return (await hrBg(text)) as T;
          }
          case "mk": {
            const { hrMk } = await import("converters/hr/hr-mk");
            return (await hrMk(text)) as T;
          }
          case "az": {
            const { hrAz } = await import("converters/hr/hr-az");
            return (await hrAz(text)) as T;
          }
          case "bs": {
            const { hrBs } = await import("converters/hr/hr-bs");
            return (await hrBs(text)) as T;
          }
          case "ca": {
            const { hrCa } = await import("converters/hr/hr-ca");
            return (await hrCa(text)) as T;
          }
          case "cs": {
            const { hrCs } = await import("converters/hr/hr-cs");
            return (await hrCs(text)) as T;
          }
          case "da": {
            const { hrDa } = await import("converters/hr/hr-da");
            return (await hrDa(text)) as T;
          }
          case "de": {
            const { hrDe } = await import("converters/hr/hr-de");
            return (await hrDe(text)) as T;
          }
          case "en": {
            const { hrEn } = await import("converters/hr/hr-en");
            return (await hrEn(text)) as T;
          }
          case "es": {
            const { hrEs } = await import("converters/hr/hr-es");
            return (await hrEs(text)) as T;
          }
          case "et": {
            const { hrEt } = await import("converters/hr/hr-et");
            return (await hrEt(text)) as T;
          }
          case "fi": {
            const { hrFi } = await import("converters/hr/hr-fi");
            return (await hrFi(text)) as T;
          }
          case "fr": {
            const { hrFr } = await import("converters/hr/hr-fr");
            return (await hrFr(text)) as T;
          }
          case "hu": {
            const { hrHu } = await import("converters/hr/hr-hu");
            return (await hrHu(text)) as T;
          }
          case "id": {
            const { hrId } = await import("converters/hr/hr-id");
            return (await hrId(text)) as T;
          }
          case "is": {
            const { hrIs } = await import("converters/hr/hr-is");
            return (await hrIs(text)) as T;
          }
          case "it": {
            const { hrIt } = await import("converters/hr/hr-it");
            return (await hrIt(text)) as T;
          }
          case "kk": {
            const { hrKk } = await import("converters/hr/hr-kk");
            return (await hrKk(text)) as T;
          }
          case "lb": {
            const { hrLb } = await import("converters/hr/hr-lb");
            return (await hrLb(text)) as T;
          }
          case "lt": {
            const { hrLt } = await import("converters/hr/hr-lt");
            return (await hrLt(text)) as T;
          }
          case "lv": {
            const { hrLv } = await import("converters/hr/hr-lv");
            return (await hrLv(text)) as T;
          }
          case "ms": {
            const { hrMs } = await import("converters/hr/hr-ms");
            return (await hrMs(text)) as T;
          }
          case "mt": {
            const { hrMt } = await import("converters/hr/hr-mt");
            return (await hrMt(text)) as T;
          }
          case "nl": {
            const { hrNl } = await import("converters/hr/hr-nl");
            return (await hrNl(text)) as T;
          }
          case "no": {
            const { hrNo } = await import("converters/hr/hr-no");
            return (await hrNo(text)) as T;
          }
          case "pl": {
            const { hrPl } = await import("converters/hr/hr-pl");
            return (await hrPl(text)) as T;
          }
          case "pt": {
            const { hrPt } = await import("converters/hr/hr-pt");
            return (await hrPt(text)) as T;
          }
          case "ro": {
            const { hrRo } = await import("converters/hr/hr-ro");
            return (await hrRo(text)) as T;
          }
          case "sk": {
            const { hrSk } = await import("converters/hr/hr-sk");
            return (await hrSk(text)) as T;
          }
          case "sl": {
            const { hrSl } = await import("converters/hr/hr-sl");
            return (await hrSl(text)) as T;
          }
          case "sq": {
            const { hrSq } = await import("converters/hr/hr-sq");
            return (await hrSq(text)) as T;
          }
          case "sr": {
            const { hrSr } = await import("converters/hr/hr-sr");
            return (await hrSr(text)) as T;
          }
          case "sv": {
            const { hrSv } = await import("converters/hr/hr-sv");
            return (await hrSv(text)) as T;
          }
          case "tr": {
            const { hrTr } = await import("converters/hr/hr-tr");
            return (await hrTr(text)) as T;
          }
          case "vi": {
            const { hrVi } = await import("converters/hr/hr-vi");
            return (await hrVi(text)) as T;
          }
        }
        break;
      case "hu":
        switch (to) {
          case "zh": {
            const { huZh } = await import("converters/hu/hu-zh");
            return (await huZh(text)) as T;
          }
          case "ja": {
            const { huJa } = await import("converters/hu/hu-ja");
            return (await huJa(text)) as T;
          }
          case "ko": {
            const { huKo } = await import("converters/hu/hu-ko");
            return (await huKo(text)) as T;
          }
          case "hi": {
            const { huHi } = await import("converters/hu/hu-hi");
            return (await huHi(text)) as T;
          }
          case "bn": {
            const { huBn } = await import("converters/hu/hu-bn");
            return (await huBn(text)) as T;
          }
          case "ur": {
            const { huUr } = await import("converters/hu/hu-ur");
            return (await huUr(text)) as T;
          }
          case "fa": {
            const { huFa } = await import("converters/hu/hu-fa");
            return (await huFa(text)) as T;
          }
          case "ar": {
            const { huAr } = await import("converters/hu/hu-ar");
            return (await huAr(text)) as T;
          }
          case "he": {
            const { huHe } = await import("converters/hu/hu-he");
            return (await huHe(text)) as T;
          }
          case "ka": {
            const { huKa } = await import("converters/hu/hu-ka");
            return (await huKa(text)) as T;
          }
          case "hy": {
            const { huHy } = await import("converters/hu/hu-hy");
            return (await huHy(text)) as T;
          }
          case "el": {
            const { huEl } = await import("converters/hu/hu-el");
            return (await huEl(text)) as T;
          }
          case "ru": {
            const { huRu } = await import("converters/hu/hu-ru");
            return (await huRu(text)) as T;
          }
          case "uk": {
            const { huUk } = await import("converters/hu/hu-uk");
            return (await huUk(text)) as T;
          }
          case "bg": {
            const { huBg } = await import("converters/hu/hu-bg");
            return (await huBg(text)) as T;
          }
          case "mk": {
            const { huMk } = await import("converters/hu/hu-mk");
            return (await huMk(text)) as T;
          }
          case "az": {
            const { huAz } = await import("converters/hu/hu-az");
            return (await huAz(text)) as T;
          }
          case "bs": {
            const { huBs } = await import("converters/hu/hu-bs");
            return (await huBs(text)) as T;
          }
          case "ca": {
            const { huCa } = await import("converters/hu/hu-ca");
            return (await huCa(text)) as T;
          }
          case "cs": {
            const { huCs } = await import("converters/hu/hu-cs");
            return (await huCs(text)) as T;
          }
          case "da": {
            const { huDa } = await import("converters/hu/hu-da");
            return (await huDa(text)) as T;
          }
          case "de": {
            const { huDe } = await import("converters/hu/hu-de");
            return (await huDe(text)) as T;
          }
          case "en": {
            const { huEn } = await import("converters/hu/hu-en");
            return (await huEn(text)) as T;
          }
          case "es": {
            const { huEs } = await import("converters/hu/hu-es");
            return (await huEs(text)) as T;
          }
          case "et": {
            const { huEt } = await import("converters/hu/hu-et");
            return (await huEt(text)) as T;
          }
          case "fi": {
            const { huFi } = await import("converters/hu/hu-fi");
            return (await huFi(text)) as T;
          }
          case "fr": {
            const { huFr } = await import("converters/hu/hu-fr");
            return (await huFr(text)) as T;
          }
          case "hr": {
            const { huHr } = await import("converters/hu/hu-hr");
            return (await huHr(text)) as T;
          }
          case "id": {
            const { huId } = await import("converters/hu/hu-id");
            return (await huId(text)) as T;
          }
          case "is": {
            const { huIs } = await import("converters/hu/hu-is");
            return (await huIs(text)) as T;
          }
          case "it": {
            const { huIt } = await import("converters/hu/hu-it");
            return (await huIt(text)) as T;
          }
          case "kk": {
            const { huKk } = await import("converters/hu/hu-kk");
            return (await huKk(text)) as T;
          }
          case "lb": {
            const { huLb } = await import("converters/hu/hu-lb");
            return (await huLb(text)) as T;
          }
          case "lt": {
            const { huLt } = await import("converters/hu/hu-lt");
            return (await huLt(text)) as T;
          }
          case "lv": {
            const { huLv } = await import("converters/hu/hu-lv");
            return (await huLv(text)) as T;
          }
          case "ms": {
            const { huMs } = await import("converters/hu/hu-ms");
            return (await huMs(text)) as T;
          }
          case "mt": {
            const { huMt } = await import("converters/hu/hu-mt");
            return (await huMt(text)) as T;
          }
          case "nl": {
            const { huNl } = await import("converters/hu/hu-nl");
            return (await huNl(text)) as T;
          }
          case "no": {
            const { huNo } = await import("converters/hu/hu-no");
            return (await huNo(text)) as T;
          }
          case "pl": {
            const { huPl } = await import("converters/hu/hu-pl");
            return (await huPl(text)) as T;
          }
          case "pt": {
            const { huPt } = await import("converters/hu/hu-pt");
            return (await huPt(text)) as T;
          }
          case "ro": {
            const { huRo } = await import("converters/hu/hu-ro");
            return (await huRo(text)) as T;
          }
          case "sk": {
            const { huSk } = await import("converters/hu/hu-sk");
            return (await huSk(text)) as T;
          }
          case "sl": {
            const { huSl } = await import("converters/hu/hu-sl");
            return (await huSl(text)) as T;
          }
          case "sq": {
            const { huSq } = await import("converters/hu/hu-sq");
            return (await huSq(text)) as T;
          }
          case "sr": {
            const { huSr } = await import("converters/hu/hu-sr");
            return (await huSr(text)) as T;
          }
          case "sv": {
            const { huSv } = await import("converters/hu/hu-sv");
            return (await huSv(text)) as T;
          }
          case "tr": {
            const { huTr } = await import("converters/hu/hu-tr");
            return (await huTr(text)) as T;
          }
          case "vi": {
            const { huVi } = await import("converters/hu/hu-vi");
            return (await huVi(text)) as T;
          }
        }
        break;
      case "id":
        switch (to) {
          case "zh": {
            const { idZh } = await import("converters/id/id-zh");
            return (await idZh(text)) as T;
          }
          case "ja": {
            const { idJa } = await import("converters/id/id-ja");
            return (await idJa(text)) as T;
          }
          case "ko": {
            const { idKo } = await import("converters/id/id-ko");
            return (await idKo(text)) as T;
          }
          case "hi": {
            const { idHi } = await import("converters/id/id-hi");
            return (await idHi(text)) as T;
          }
          case "bn": {
            const { idBn } = await import("converters/id/id-bn");
            return (await idBn(text)) as T;
          }
          case "ur": {
            const { idUr } = await import("converters/id/id-ur");
            return (await idUr(text)) as T;
          }
          case "fa": {
            const { idFa } = await import("converters/id/id-fa");
            return (await idFa(text)) as T;
          }
          case "ar": {
            const { idAr } = await import("converters/id/id-ar");
            return (await idAr(text)) as T;
          }
          case "he": {
            const { idHe } = await import("converters/id/id-he");
            return (await idHe(text)) as T;
          }
          case "ka": {
            const { idKa } = await import("converters/id/id-ka");
            return (await idKa(text)) as T;
          }
          case "hy": {
            const { idHy } = await import("converters/id/id-hy");
            return (await idHy(text)) as T;
          }
          case "el": {
            const { idEl } = await import("converters/id/id-el");
            return (await idEl(text)) as T;
          }
          case "ru": {
            const { idRu } = await import("converters/id/id-ru");
            return (await idRu(text)) as T;
          }
          case "uk": {
            const { idUk } = await import("converters/id/id-uk");
            return (await idUk(text)) as T;
          }
          case "bg": {
            const { idBg } = await import("converters/id/id-bg");
            return (await idBg(text)) as T;
          }
          case "mk": {
            const { idMk } = await import("converters/id/id-mk");
            return (await idMk(text)) as T;
          }
          case "az": {
            const { idAz } = await import("converters/id/id-az");
            return (await idAz(text)) as T;
          }
          case "bs": {
            const { idBs } = await import("converters/id/id-bs");
            return (await idBs(text)) as T;
          }
          case "ca": {
            const { idCa } = await import("converters/id/id-ca");
            return (await idCa(text)) as T;
          }
          case "cs": {
            const { idCs } = await import("converters/id/id-cs");
            return (await idCs(text)) as T;
          }
          case "da": {
            const { idDa } = await import("converters/id/id-da");
            return (await idDa(text)) as T;
          }
          case "de": {
            const { idDe } = await import("converters/id/id-de");
            return (await idDe(text)) as T;
          }
          case "en": {
            const { idEn } = await import("converters/id/id-en");
            return (await idEn(text)) as T;
          }
          case "es": {
            const { idEs } = await import("converters/id/id-es");
            return (await idEs(text)) as T;
          }
          case "et": {
            const { idEt } = await import("converters/id/id-et");
            return (await idEt(text)) as T;
          }
          case "fi": {
            const { idFi } = await import("converters/id/id-fi");
            return (await idFi(text)) as T;
          }
          case "fr": {
            const { idFr } = await import("converters/id/id-fr");
            return (await idFr(text)) as T;
          }
          case "hr": {
            const { idHr } = await import("converters/id/id-hr");
            return (await idHr(text)) as T;
          }
          case "hu": {
            const { idHu } = await import("converters/id/id-hu");
            return (await idHu(text)) as T;
          }
          case "is": {
            const { idIs } = await import("converters/id/id-is");
            return (await idIs(text)) as T;
          }
          case "it": {
            const { idIt } = await import("converters/id/id-it");
            return (await idIt(text)) as T;
          }
          case "kk": {
            const { idKk } = await import("converters/id/id-kk");
            return (await idKk(text)) as T;
          }
          case "lb": {
            const { idLb } = await import("converters/id/id-lb");
            return (await idLb(text)) as T;
          }
          case "lt": {
            const { idLt } = await import("converters/id/id-lt");
            return (await idLt(text)) as T;
          }
          case "lv": {
            const { idLv } = await import("converters/id/id-lv");
            return (await idLv(text)) as T;
          }
          case "ms": {
            const { idMs } = await import("converters/id/id-ms");
            return (await idMs(text)) as T;
          }
          case "mt": {
            const { idMt } = await import("converters/id/id-mt");
            return (await idMt(text)) as T;
          }
          case "nl": {
            const { idNl } = await import("converters/id/id-nl");
            return (await idNl(text)) as T;
          }
          case "no": {
            const { idNo } = await import("converters/id/id-no");
            return (await idNo(text)) as T;
          }
          case "pl": {
            const { idPl } = await import("converters/id/id-pl");
            return (await idPl(text)) as T;
          }
          case "pt": {
            const { idPt } = await import("converters/id/id-pt");
            return (await idPt(text)) as T;
          }
          case "ro": {
            const { idRo } = await import("converters/id/id-ro");
            return (await idRo(text)) as T;
          }
          case "sk": {
            const { idSk } = await import("converters/id/id-sk");
            return (await idSk(text)) as T;
          }
          case "sl": {
            const { idSl } = await import("converters/id/id-sl");
            return (await idSl(text)) as T;
          }
          case "sq": {
            const { idSq } = await import("converters/id/id-sq");
            return (await idSq(text)) as T;
          }
          case "sr": {
            const { idSr } = await import("converters/id/id-sr");
            return (await idSr(text)) as T;
          }
          case "sv": {
            const { idSv } = await import("converters/id/id-sv");
            return (await idSv(text)) as T;
          }
          case "tr": {
            const { idTr } = await import("converters/id/id-tr");
            return (await idTr(text)) as T;
          }
          case "vi": {
            const { idVi } = await import("converters/id/id-vi");
            return (await idVi(text)) as T;
          }
        }
        break;
      case "is":
        switch (to) {
          case "zh": {
            const { isZh } = await import("converters/is/is-zh");
            return (await isZh(text)) as T;
          }
          case "ja": {
            const { isJa } = await import("converters/is/is-ja");
            return (await isJa(text)) as T;
          }
          case "ko": {
            const { isKo } = await import("converters/is/is-ko");
            return (await isKo(text)) as T;
          }
          case "hi": {
            const { isHi } = await import("converters/is/is-hi");
            return (await isHi(text)) as T;
          }
          case "bn": {
            const { isBn } = await import("converters/is/is-bn");
            return (await isBn(text)) as T;
          }
          case "ur": {
            const { isUr } = await import("converters/is/is-ur");
            return (await isUr(text)) as T;
          }
          case "fa": {
            const { isFa } = await import("converters/is/is-fa");
            return (await isFa(text)) as T;
          }
          case "ar": {
            const { isAr } = await import("converters/is/is-ar");
            return (await isAr(text)) as T;
          }
          case "he": {
            const { isHe } = await import("converters/is/is-he");
            return (await isHe(text)) as T;
          }
          case "ka": {
            const { isKa } = await import("converters/is/is-ka");
            return (await isKa(text)) as T;
          }
          case "hy": {
            const { isHy } = await import("converters/is/is-hy");
            return (await isHy(text)) as T;
          }
          case "el": {
            const { isEl } = await import("converters/is/is-el");
            return (await isEl(text)) as T;
          }
          case "ru": {
            const { isRu } = await import("converters/is/is-ru");
            return (await isRu(text)) as T;
          }
          case "uk": {
            const { isUk } = await import("converters/is/is-uk");
            return (await isUk(text)) as T;
          }
          case "bg": {
            const { isBg } = await import("converters/is/is-bg");
            return (await isBg(text)) as T;
          }
          case "mk": {
            const { isMk } = await import("converters/is/is-mk");
            return (await isMk(text)) as T;
          }
          case "az": {
            const { isAz } = await import("converters/is/is-az");
            return (await isAz(text)) as T;
          }
          case "bs": {
            const { isBs } = await import("converters/is/is-bs");
            return (await isBs(text)) as T;
          }
          case "ca": {
            const { isCa } = await import("converters/is/is-ca");
            return (await isCa(text)) as T;
          }
          case "cs": {
            const { isCs } = await import("converters/is/is-cs");
            return (await isCs(text)) as T;
          }
          case "da": {
            const { isDa } = await import("converters/is/is-da");
            return (await isDa(text)) as T;
          }
          case "de": {
            const { isDe } = await import("converters/is/is-de");
            return (await isDe(text)) as T;
          }
          case "en": {
            const { isEn } = await import("converters/is/is-en");
            return (await isEn(text)) as T;
          }
          case "es": {
            const { isEs } = await import("converters/is/is-es");
            return (await isEs(text)) as T;
          }
          case "et": {
            const { isEt } = await import("converters/is/is-et");
            return (await isEt(text)) as T;
          }
          case "fi": {
            const { isFi } = await import("converters/is/is-fi");
            return (await isFi(text)) as T;
          }
          case "fr": {
            const { isFr } = await import("converters/is/is-fr");
            return (await isFr(text)) as T;
          }
          case "hr": {
            const { isHr } = await import("converters/is/is-hr");
            return (await isHr(text)) as T;
          }
          case "hu": {
            const { isHu } = await import("converters/is/is-hu");
            return (await isHu(text)) as T;
          }
          case "id": {
            const { isId } = await import("converters/is/is-id");
            return (await isId(text)) as T;
          }
          case "it": {
            const { isIt } = await import("converters/is/is-it");
            return (await isIt(text)) as T;
          }
          case "kk": {
            const { isKk } = await import("converters/is/is-kk");
            return (await isKk(text)) as T;
          }
          case "lb": {
            const { isLb } = await import("converters/is/is-lb");
            return (await isLb(text)) as T;
          }
          case "lt": {
            const { isLt } = await import("converters/is/is-lt");
            return (await isLt(text)) as T;
          }
          case "lv": {
            const { isLv } = await import("converters/is/is-lv");
            return (await isLv(text)) as T;
          }
          case "ms": {
            const { isMs } = await import("converters/is/is-ms");
            return (await isMs(text)) as T;
          }
          case "mt": {
            const { isMt } = await import("converters/is/is-mt");
            return (await isMt(text)) as T;
          }
          case "nl": {
            const { isNl } = await import("converters/is/is-nl");
            return (await isNl(text)) as T;
          }
          case "no": {
            const { isNo } = await import("converters/is/is-no");
            return (await isNo(text)) as T;
          }
          case "pl": {
            const { isPl } = await import("converters/is/is-pl");
            return (await isPl(text)) as T;
          }
          case "pt": {
            const { isPt } = await import("converters/is/is-pt");
            return (await isPt(text)) as T;
          }
          case "ro": {
            const { isRo } = await import("converters/is/is-ro");
            return (await isRo(text)) as T;
          }
          case "sk": {
            const { isSk } = await import("converters/is/is-sk");
            return (await isSk(text)) as T;
          }
          case "sl": {
            const { isSl } = await import("converters/is/is-sl");
            return (await isSl(text)) as T;
          }
          case "sq": {
            const { isSq } = await import("converters/is/is-sq");
            return (await isSq(text)) as T;
          }
          case "sr": {
            const { isSr } = await import("converters/is/is-sr");
            return (await isSr(text)) as T;
          }
          case "sv": {
            const { isSv } = await import("converters/is/is-sv");
            return (await isSv(text)) as T;
          }
          case "tr": {
            const { isTr } = await import("converters/is/is-tr");
            return (await isTr(text)) as T;
          }
          case "vi": {
            const { isVi } = await import("converters/is/is-vi");
            return (await isVi(text)) as T;
          }
        }
        break;
      case "it":
        switch (to) {
          case "zh": {
            const { itZh } = await import("converters/it/it-zh");
            return (await itZh(text)) as T;
          }
          case "ja": {
            const { itJa } = await import("converters/it/it-ja");
            return (await itJa(text)) as T;
          }
          case "ko": {
            const { itKo } = await import("converters/it/it-ko");
            return (await itKo(text)) as T;
          }
          case "hi": {
            const { itHi } = await import("converters/it/it-hi");
            return (await itHi(text)) as T;
          }
          case "bn": {
            const { itBn } = await import("converters/it/it-bn");
            return (await itBn(text)) as T;
          }
          case "ur": {
            const { itUr } = await import("converters/it/it-ur");
            return (await itUr(text)) as T;
          }
          case "fa": {
            const { itFa } = await import("converters/it/it-fa");
            return (await itFa(text)) as T;
          }
          case "ar": {
            const { itAr } = await import("converters/it/it-ar");
            return (await itAr(text)) as T;
          }
          case "he": {
            const { itHe } = await import("converters/it/it-he");
            return (await itHe(text)) as T;
          }
          case "ka": {
            const { itKa } = await import("converters/it/it-ka");
            return (await itKa(text)) as T;
          }
          case "hy": {
            const { itHy } = await import("converters/it/it-hy");
            return (await itHy(text)) as T;
          }
          case "el": {
            const { itEl } = await import("converters/it/it-el");
            return (await itEl(text)) as T;
          }
          case "ru": {
            const { itRu } = await import("converters/it/it-ru");
            return (await itRu(text)) as T;
          }
          case "uk": {
            const { itUk } = await import("converters/it/it-uk");
            return (await itUk(text)) as T;
          }
          case "bg": {
            const { itBg } = await import("converters/it/it-bg");
            return (await itBg(text)) as T;
          }
          case "mk": {
            const { itMk } = await import("converters/it/it-mk");
            return (await itMk(text)) as T;
          }
          case "az": {
            const { itAz } = await import("converters/it/it-az");
            return (await itAz(text)) as T;
          }
          case "bs": {
            const { itBs } = await import("converters/it/it-bs");
            return (await itBs(text)) as T;
          }
          case "ca": {
            const { itCa } = await import("converters/it/it-ca");
            return (await itCa(text)) as T;
          }
          case "cs": {
            const { itCs } = await import("converters/it/it-cs");
            return (await itCs(text)) as T;
          }
          case "da": {
            const { itDa } = await import("converters/it/it-da");
            return (await itDa(text)) as T;
          }
          case "de": {
            const { itDe } = await import("converters/it/it-de");
            return (await itDe(text)) as T;
          }
          case "en": {
            const { itEn } = await import("converters/it/it-en");
            return (await itEn(text)) as T;
          }
          case "es": {
            const { itEs } = await import("converters/it/it-es");
            return (await itEs(text)) as T;
          }
          case "et": {
            const { itEt } = await import("converters/it/it-et");
            return (await itEt(text)) as T;
          }
          case "fi": {
            const { itFi } = await import("converters/it/it-fi");
            return (await itFi(text)) as T;
          }
          case "fr": {
            const { itFr } = await import("converters/it/it-fr");
            return (await itFr(text)) as T;
          }
          case "hr": {
            const { itHr } = await import("converters/it/it-hr");
            return (await itHr(text)) as T;
          }
          case "hu": {
            const { itHu } = await import("converters/it/it-hu");
            return (await itHu(text)) as T;
          }
          case "id": {
            const { itId } = await import("converters/it/it-id");
            return (await itId(text)) as T;
          }
          case "is": {
            const { itIs } = await import("converters/it/it-is");
            return (await itIs(text)) as T;
          }
          case "kk": {
            const { itKk } = await import("converters/it/it-kk");
            return (await itKk(text)) as T;
          }
          case "lb": {
            const { itLb } = await import("converters/it/it-lb");
            return (await itLb(text)) as T;
          }
          case "lt": {
            const { itLt } = await import("converters/it/it-lt");
            return (await itLt(text)) as T;
          }
          case "lv": {
            const { itLv } = await import("converters/it/it-lv");
            return (await itLv(text)) as T;
          }
          case "ms": {
            const { itMs } = await import("converters/it/it-ms");
            return (await itMs(text)) as T;
          }
          case "mt": {
            const { itMt } = await import("converters/it/it-mt");
            return (await itMt(text)) as T;
          }
          case "nl": {
            const { itNl } = await import("converters/it/it-nl");
            return (await itNl(text)) as T;
          }
          case "no": {
            const { itNo } = await import("converters/it/it-no");
            return (await itNo(text)) as T;
          }
          case "pl": {
            const { itPl } = await import("converters/it/it-pl");
            return (await itPl(text)) as T;
          }
          case "pt": {
            const { itPt } = await import("converters/it/it-pt");
            return (await itPt(text)) as T;
          }
          case "ro": {
            const { itRo } = await import("converters/it/it-ro");
            return (await itRo(text)) as T;
          }
          case "sk": {
            const { itSk } = await import("converters/it/it-sk");
            return (await itSk(text)) as T;
          }
          case "sl": {
            const { itSl } = await import("converters/it/it-sl");
            return (await itSl(text)) as T;
          }
          case "sq": {
            const { itSq } = await import("converters/it/it-sq");
            return (await itSq(text)) as T;
          }
          case "sr": {
            const { itSr } = await import("converters/it/it-sr");
            return (await itSr(text)) as T;
          }
          case "sv": {
            const { itSv } = await import("converters/it/it-sv");
            return (await itSv(text)) as T;
          }
          case "tr": {
            const { itTr } = await import("converters/it/it-tr");
            return (await itTr(text)) as T;
          }
          case "vi": {
            const { itVi } = await import("converters/it/it-vi");
            return (await itVi(text)) as T;
          }
        }
        break;
      case "kk":
        switch (to) {
          case "zh": {
            const { kkZh } = await import("converters/kk/kk-zh");
            return (await kkZh(text)) as T;
          }
          case "ja": {
            const { kkJa } = await import("converters/kk/kk-ja");
            return (await kkJa(text)) as T;
          }
          case "ko": {
            const { kkKo } = await import("converters/kk/kk-ko");
            return (await kkKo(text)) as T;
          }
          case "hi": {
            const { kkHi } = await import("converters/kk/kk-hi");
            return (await kkHi(text)) as T;
          }
          case "bn": {
            const { kkBn } = await import("converters/kk/kk-bn");
            return (await kkBn(text)) as T;
          }
          case "ur": {
            const { kkUr } = await import("converters/kk/kk-ur");
            return (await kkUr(text)) as T;
          }
          case "fa": {
            const { kkFa } = await import("converters/kk/kk-fa");
            return (await kkFa(text)) as T;
          }
          case "ar": {
            const { kkAr } = await import("converters/kk/kk-ar");
            return (await kkAr(text)) as T;
          }
          case "he": {
            const { kkHe } = await import("converters/kk/kk-he");
            return (await kkHe(text)) as T;
          }
          case "ka": {
            const { kkKa } = await import("converters/kk/kk-ka");
            return (await kkKa(text)) as T;
          }
          case "hy": {
            const { kkHy } = await import("converters/kk/kk-hy");
            return (await kkHy(text)) as T;
          }
          case "el": {
            const { kkEl } = await import("converters/kk/kk-el");
            return (await kkEl(text)) as T;
          }
          case "ru": {
            const { kkRu } = await import("converters/kk/kk-ru");
            return (await kkRu(text)) as T;
          }
          case "uk": {
            const { kkUk } = await import("converters/kk/kk-uk");
            return (await kkUk(text)) as T;
          }
          case "bg": {
            const { kkBg } = await import("converters/kk/kk-bg");
            return (await kkBg(text)) as T;
          }
          case "mk": {
            const { kkMk } = await import("converters/kk/kk-mk");
            return (await kkMk(text)) as T;
          }
          case "az": {
            const { kkAz } = await import("converters/kk/kk-az");
            return (await kkAz(text)) as T;
          }
          case "bs": {
            const { kkBs } = await import("converters/kk/kk-bs");
            return (await kkBs(text)) as T;
          }
          case "ca": {
            const { kkCa } = await import("converters/kk/kk-ca");
            return (await kkCa(text)) as T;
          }
          case "cs": {
            const { kkCs } = await import("converters/kk/kk-cs");
            return (await kkCs(text)) as T;
          }
          case "da": {
            const { kkDa } = await import("converters/kk/kk-da");
            return (await kkDa(text)) as T;
          }
          case "de": {
            const { kkDe } = await import("converters/kk/kk-de");
            return (await kkDe(text)) as T;
          }
          case "en": {
            const { kkEn } = await import("converters/kk/kk-en");
            return (await kkEn(text)) as T;
          }
          case "es": {
            const { kkEs } = await import("converters/kk/kk-es");
            return (await kkEs(text)) as T;
          }
          case "et": {
            const { kkEt } = await import("converters/kk/kk-et");
            return (await kkEt(text)) as T;
          }
          case "fi": {
            const { kkFi } = await import("converters/kk/kk-fi");
            return (await kkFi(text)) as T;
          }
          case "fr": {
            const { kkFr } = await import("converters/kk/kk-fr");
            return (await kkFr(text)) as T;
          }
          case "hr": {
            const { kkHr } = await import("converters/kk/kk-hr");
            return (await kkHr(text)) as T;
          }
          case "hu": {
            const { kkHu } = await import("converters/kk/kk-hu");
            return (await kkHu(text)) as T;
          }
          case "id": {
            const { kkId } = await import("converters/kk/kk-id");
            return (await kkId(text)) as T;
          }
          case "is": {
            const { kkIs } = await import("converters/kk/kk-is");
            return (await kkIs(text)) as T;
          }
          case "it": {
            const { kkIt } = await import("converters/kk/kk-it");
            return (await kkIt(text)) as T;
          }
          case "lb": {
            const { kkLb } = await import("converters/kk/kk-lb");
            return (await kkLb(text)) as T;
          }
          case "lt": {
            const { kkLt } = await import("converters/kk/kk-lt");
            return (await kkLt(text)) as T;
          }
          case "lv": {
            const { kkLv } = await import("converters/kk/kk-lv");
            return (await kkLv(text)) as T;
          }
          case "ms": {
            const { kkMs } = await import("converters/kk/kk-ms");
            return (await kkMs(text)) as T;
          }
          case "mt": {
            const { kkMt } = await import("converters/kk/kk-mt");
            return (await kkMt(text)) as T;
          }
          case "nl": {
            const { kkNl } = await import("converters/kk/kk-nl");
            return (await kkNl(text)) as T;
          }
          case "no": {
            const { kkNo } = await import("converters/kk/kk-no");
            return (await kkNo(text)) as T;
          }
          case "pl": {
            const { kkPl } = await import("converters/kk/kk-pl");
            return (await kkPl(text)) as T;
          }
          case "pt": {
            const { kkPt } = await import("converters/kk/kk-pt");
            return (await kkPt(text)) as T;
          }
          case "ro": {
            const { kkRo } = await import("converters/kk/kk-ro");
            return (await kkRo(text)) as T;
          }
          case "sk": {
            const { kkSk } = await import("converters/kk/kk-sk");
            return (await kkSk(text)) as T;
          }
          case "sl": {
            const { kkSl } = await import("converters/kk/kk-sl");
            return (await kkSl(text)) as T;
          }
          case "sq": {
            const { kkSq } = await import("converters/kk/kk-sq");
            return (await kkSq(text)) as T;
          }
          case "sr": {
            const { kkSr } = await import("converters/kk/kk-sr");
            return (await kkSr(text)) as T;
          }
          case "sv": {
            const { kkSv } = await import("converters/kk/kk-sv");
            return (await kkSv(text)) as T;
          }
          case "tr": {
            const { kkTr } = await import("converters/kk/kk-tr");
            return (await kkTr(text)) as T;
          }
          case "vi": {
            const { kkVi } = await import("converters/kk/kk-vi");
            return (await kkVi(text)) as T;
          }
        }
        break;
      case "lb":
        switch (to) {
          case "zh": {
            const { lbZh } = await import("converters/lb/lb-zh");
            return (await lbZh(text)) as T;
          }
          case "ja": {
            const { lbJa } = await import("converters/lb/lb-ja");
            return (await lbJa(text)) as T;
          }
          case "ko": {
            const { lbKo } = await import("converters/lb/lb-ko");
            return (await lbKo(text)) as T;
          }
          case "hi": {
            const { lbHi } = await import("converters/lb/lb-hi");
            return (await lbHi(text)) as T;
          }
          case "bn": {
            const { lbBn } = await import("converters/lb/lb-bn");
            return (await lbBn(text)) as T;
          }
          case "ur": {
            const { lbUr } = await import("converters/lb/lb-ur");
            return (await lbUr(text)) as T;
          }
          case "fa": {
            const { lbFa } = await import("converters/lb/lb-fa");
            return (await lbFa(text)) as T;
          }
          case "ar": {
            const { lbAr } = await import("converters/lb/lb-ar");
            return (await lbAr(text)) as T;
          }
          case "he": {
            const { lbHe } = await import("converters/lb/lb-he");
            return (await lbHe(text)) as T;
          }
          case "ka": {
            const { lbKa } = await import("converters/lb/lb-ka");
            return (await lbKa(text)) as T;
          }
          case "hy": {
            const { lbHy } = await import("converters/lb/lb-hy");
            return (await lbHy(text)) as T;
          }
          case "el": {
            const { lbEl } = await import("converters/lb/lb-el");
            return (await lbEl(text)) as T;
          }
          case "ru": {
            const { lbRu } = await import("converters/lb/lb-ru");
            return (await lbRu(text)) as T;
          }
          case "uk": {
            const { lbUk } = await import("converters/lb/lb-uk");
            return (await lbUk(text)) as T;
          }
          case "bg": {
            const { lbBg } = await import("converters/lb/lb-bg");
            return (await lbBg(text)) as T;
          }
          case "mk": {
            const { lbMk } = await import("converters/lb/lb-mk");
            return (await lbMk(text)) as T;
          }
          case "az": {
            const { lbAz } = await import("converters/lb/lb-az");
            return (await lbAz(text)) as T;
          }
          case "bs": {
            const { lbBs } = await import("converters/lb/lb-bs");
            return (await lbBs(text)) as T;
          }
          case "ca": {
            const { lbCa } = await import("converters/lb/lb-ca");
            return (await lbCa(text)) as T;
          }
          case "cs": {
            const { lbCs } = await import("converters/lb/lb-cs");
            return (await lbCs(text)) as T;
          }
          case "da": {
            const { lbDa } = await import("converters/lb/lb-da");
            return (await lbDa(text)) as T;
          }
          case "de": {
            const { lbDe } = await import("converters/lb/lb-de");
            return (await lbDe(text)) as T;
          }
          case "en": {
            const { lbEn } = await import("converters/lb/lb-en");
            return (await lbEn(text)) as T;
          }
          case "es": {
            const { lbEs } = await import("converters/lb/lb-es");
            return (await lbEs(text)) as T;
          }
          case "et": {
            const { lbEt } = await import("converters/lb/lb-et");
            return (await lbEt(text)) as T;
          }
          case "fi": {
            const { lbFi } = await import("converters/lb/lb-fi");
            return (await lbFi(text)) as T;
          }
          case "fr": {
            const { lbFr } = await import("converters/lb/lb-fr");
            return (await lbFr(text)) as T;
          }
          case "hr": {
            const { lbHr } = await import("converters/lb/lb-hr");
            return (await lbHr(text)) as T;
          }
          case "hu": {
            const { lbHu } = await import("converters/lb/lb-hu");
            return (await lbHu(text)) as T;
          }
          case "id": {
            const { lbId } = await import("converters/lb/lb-id");
            return (await lbId(text)) as T;
          }
          case "is": {
            const { lbIs } = await import("converters/lb/lb-is");
            return (await lbIs(text)) as T;
          }
          case "it": {
            const { lbIt } = await import("converters/lb/lb-it");
            return (await lbIt(text)) as T;
          }
          case "kk": {
            const { lbKk } = await import("converters/lb/lb-kk");
            return (await lbKk(text)) as T;
          }
          case "lt": {
            const { lbLt } = await import("converters/lb/lb-lt");
            return (await lbLt(text)) as T;
          }
          case "lv": {
            const { lbLv } = await import("converters/lb/lb-lv");
            return (await lbLv(text)) as T;
          }
          case "ms": {
            const { lbMs } = await import("converters/lb/lb-ms");
            return (await lbMs(text)) as T;
          }
          case "mt": {
            const { lbMt } = await import("converters/lb/lb-mt");
            return (await lbMt(text)) as T;
          }
          case "nl": {
            const { lbNl } = await import("converters/lb/lb-nl");
            return (await lbNl(text)) as T;
          }
          case "no": {
            const { lbNo } = await import("converters/lb/lb-no");
            return (await lbNo(text)) as T;
          }
          case "pl": {
            const { lbPl } = await import("converters/lb/lb-pl");
            return (await lbPl(text)) as T;
          }
          case "pt": {
            const { lbPt } = await import("converters/lb/lb-pt");
            return (await lbPt(text)) as T;
          }
          case "ro": {
            const { lbRo } = await import("converters/lb/lb-ro");
            return (await lbRo(text)) as T;
          }
          case "sk": {
            const { lbSk } = await import("converters/lb/lb-sk");
            return (await lbSk(text)) as T;
          }
          case "sl": {
            const { lbSl } = await import("converters/lb/lb-sl");
            return (await lbSl(text)) as T;
          }
          case "sq": {
            const { lbSq } = await import("converters/lb/lb-sq");
            return (await lbSq(text)) as T;
          }
          case "sr": {
            const { lbSr } = await import("converters/lb/lb-sr");
            return (await lbSr(text)) as T;
          }
          case "sv": {
            const { lbSv } = await import("converters/lb/lb-sv");
            return (await lbSv(text)) as T;
          }
          case "tr": {
            const { lbTr } = await import("converters/lb/lb-tr");
            return (await lbTr(text)) as T;
          }
          case "vi": {
            const { lbVi } = await import("converters/lb/lb-vi");
            return (await lbVi(text)) as T;
          }
        }
        break;
      case "lt":
        switch (to) {
          case "zh": {
            const { ltZh } = await import("converters/lt/lt-zh");
            return (await ltZh(text)) as T;
          }
          case "ja": {
            const { ltJa } = await import("converters/lt/lt-ja");
            return (await ltJa(text)) as T;
          }
          case "ko": {
            const { ltKo } = await import("converters/lt/lt-ko");
            return (await ltKo(text)) as T;
          }
          case "hi": {
            const { ltHi } = await import("converters/lt/lt-hi");
            return (await ltHi(text)) as T;
          }
          case "bn": {
            const { ltBn } = await import("converters/lt/lt-bn");
            return (await ltBn(text)) as T;
          }
          case "ur": {
            const { ltUr } = await import("converters/lt/lt-ur");
            return (await ltUr(text)) as T;
          }
          case "fa": {
            const { ltFa } = await import("converters/lt/lt-fa");
            return (await ltFa(text)) as T;
          }
          case "ar": {
            const { ltAr } = await import("converters/lt/lt-ar");
            return (await ltAr(text)) as T;
          }
          case "he": {
            const { ltHe } = await import("converters/lt/lt-he");
            return (await ltHe(text)) as T;
          }
          case "ka": {
            const { ltKa } = await import("converters/lt/lt-ka");
            return (await ltKa(text)) as T;
          }
          case "hy": {
            const { ltHy } = await import("converters/lt/lt-hy");
            return (await ltHy(text)) as T;
          }
          case "el": {
            const { ltEl } = await import("converters/lt/lt-el");
            return (await ltEl(text)) as T;
          }
          case "ru": {
            const { ltRu } = await import("converters/lt/lt-ru");
            return (await ltRu(text)) as T;
          }
          case "uk": {
            const { ltUk } = await import("converters/lt/lt-uk");
            return (await ltUk(text)) as T;
          }
          case "bg": {
            const { ltBg } = await import("converters/lt/lt-bg");
            return (await ltBg(text)) as T;
          }
          case "mk": {
            const { ltMk } = await import("converters/lt/lt-mk");
            return (await ltMk(text)) as T;
          }
          case "az": {
            const { ltAz } = await import("converters/lt/lt-az");
            return (await ltAz(text)) as T;
          }
          case "bs": {
            const { ltBs } = await import("converters/lt/lt-bs");
            return (await ltBs(text)) as T;
          }
          case "ca": {
            const { ltCa } = await import("converters/lt/lt-ca");
            return (await ltCa(text)) as T;
          }
          case "cs": {
            const { ltCs } = await import("converters/lt/lt-cs");
            return (await ltCs(text)) as T;
          }
          case "da": {
            const { ltDa } = await import("converters/lt/lt-da");
            return (await ltDa(text)) as T;
          }
          case "de": {
            const { ltDe } = await import("converters/lt/lt-de");
            return (await ltDe(text)) as T;
          }
          case "en": {
            const { ltEn } = await import("converters/lt/lt-en");
            return (await ltEn(text)) as T;
          }
          case "es": {
            const { ltEs } = await import("converters/lt/lt-es");
            return (await ltEs(text)) as T;
          }
          case "et": {
            const { ltEt } = await import("converters/lt/lt-et");
            return (await ltEt(text)) as T;
          }
          case "fi": {
            const { ltFi } = await import("converters/lt/lt-fi");
            return (await ltFi(text)) as T;
          }
          case "fr": {
            const { ltFr } = await import("converters/lt/lt-fr");
            return (await ltFr(text)) as T;
          }
          case "hr": {
            const { ltHr } = await import("converters/lt/lt-hr");
            return (await ltHr(text)) as T;
          }
          case "hu": {
            const { ltHu } = await import("converters/lt/lt-hu");
            return (await ltHu(text)) as T;
          }
          case "id": {
            const { ltId } = await import("converters/lt/lt-id");
            return (await ltId(text)) as T;
          }
          case "is": {
            const { ltIs } = await import("converters/lt/lt-is");
            return (await ltIs(text)) as T;
          }
          case "it": {
            const { ltIt } = await import("converters/lt/lt-it");
            return (await ltIt(text)) as T;
          }
          case "kk": {
            const { ltKk } = await import("converters/lt/lt-kk");
            return (await ltKk(text)) as T;
          }
          case "lb": {
            const { ltLb } = await import("converters/lt/lt-lb");
            return (await ltLb(text)) as T;
          }
          case "lv": {
            const { ltLv } = await import("converters/lt/lt-lv");
            return (await ltLv(text)) as T;
          }
          case "ms": {
            const { ltMs } = await import("converters/lt/lt-ms");
            return (await ltMs(text)) as T;
          }
          case "mt": {
            const { ltMt } = await import("converters/lt/lt-mt");
            return (await ltMt(text)) as T;
          }
          case "nl": {
            const { ltNl } = await import("converters/lt/lt-nl");
            return (await ltNl(text)) as T;
          }
          case "no": {
            const { ltNo } = await import("converters/lt/lt-no");
            return (await ltNo(text)) as T;
          }
          case "pl": {
            const { ltPl } = await import("converters/lt/lt-pl");
            return (await ltPl(text)) as T;
          }
          case "pt": {
            const { ltPt } = await import("converters/lt/lt-pt");
            return (await ltPt(text)) as T;
          }
          case "ro": {
            const { ltRo } = await import("converters/lt/lt-ro");
            return (await ltRo(text)) as T;
          }
          case "sk": {
            const { ltSk } = await import("converters/lt/lt-sk");
            return (await ltSk(text)) as T;
          }
          case "sl": {
            const { ltSl } = await import("converters/lt/lt-sl");
            return (await ltSl(text)) as T;
          }
          case "sq": {
            const { ltSq } = await import("converters/lt/lt-sq");
            return (await ltSq(text)) as T;
          }
          case "sr": {
            const { ltSr } = await import("converters/lt/lt-sr");
            return (await ltSr(text)) as T;
          }
          case "sv": {
            const { ltSv } = await import("converters/lt/lt-sv");
            return (await ltSv(text)) as T;
          }
          case "tr": {
            const { ltTr } = await import("converters/lt/lt-tr");
            return (await ltTr(text)) as T;
          }
          case "vi": {
            const { ltVi } = await import("converters/lt/lt-vi");
            return (await ltVi(text)) as T;
          }
        }
        break;
      case "lv":
        switch (to) {
          case "zh": {
            const { lvZh } = await import("converters/lv/lv-zh");
            return (await lvZh(text)) as T;
          }
          case "ja": {
            const { lvJa } = await import("converters/lv/lv-ja");
            return (await lvJa(text)) as T;
          }
          case "ko": {
            const { lvKo } = await import("converters/lv/lv-ko");
            return (await lvKo(text)) as T;
          }
          case "hi": {
            const { lvHi } = await import("converters/lv/lv-hi");
            return (await lvHi(text)) as T;
          }
          case "bn": {
            const { lvBn } = await import("converters/lv/lv-bn");
            return (await lvBn(text)) as T;
          }
          case "ur": {
            const { lvUr } = await import("converters/lv/lv-ur");
            return (await lvUr(text)) as T;
          }
          case "fa": {
            const { lvFa } = await import("converters/lv/lv-fa");
            return (await lvFa(text)) as T;
          }
          case "ar": {
            const { lvAr } = await import("converters/lv/lv-ar");
            return (await lvAr(text)) as T;
          }
          case "he": {
            const { lvHe } = await import("converters/lv/lv-he");
            return (await lvHe(text)) as T;
          }
          case "ka": {
            const { lvKa } = await import("converters/lv/lv-ka");
            return (await lvKa(text)) as T;
          }
          case "hy": {
            const { lvHy } = await import("converters/lv/lv-hy");
            return (await lvHy(text)) as T;
          }
          case "el": {
            const { lvEl } = await import("converters/lv/lv-el");
            return (await lvEl(text)) as T;
          }
          case "ru": {
            const { lvRu } = await import("converters/lv/lv-ru");
            return (await lvRu(text)) as T;
          }
          case "uk": {
            const { lvUk } = await import("converters/lv/lv-uk");
            return (await lvUk(text)) as T;
          }
          case "bg": {
            const { lvBg } = await import("converters/lv/lv-bg");
            return (await lvBg(text)) as T;
          }
          case "mk": {
            const { lvMk } = await import("converters/lv/lv-mk");
            return (await lvMk(text)) as T;
          }
          case "az": {
            const { lvAz } = await import("converters/lv/lv-az");
            return (await lvAz(text)) as T;
          }
          case "bs": {
            const { lvBs } = await import("converters/lv/lv-bs");
            return (await lvBs(text)) as T;
          }
          case "ca": {
            const { lvCa } = await import("converters/lv/lv-ca");
            return (await lvCa(text)) as T;
          }
          case "cs": {
            const { lvCs } = await import("converters/lv/lv-cs");
            return (await lvCs(text)) as T;
          }
          case "da": {
            const { lvDa } = await import("converters/lv/lv-da");
            return (await lvDa(text)) as T;
          }
          case "de": {
            const { lvDe } = await import("converters/lv/lv-de");
            return (await lvDe(text)) as T;
          }
          case "en": {
            const { lvEn } = await import("converters/lv/lv-en");
            return (await lvEn(text)) as T;
          }
          case "es": {
            const { lvEs } = await import("converters/lv/lv-es");
            return (await lvEs(text)) as T;
          }
          case "et": {
            const { lvEt } = await import("converters/lv/lv-et");
            return (await lvEt(text)) as T;
          }
          case "fi": {
            const { lvFi } = await import("converters/lv/lv-fi");
            return (await lvFi(text)) as T;
          }
          case "fr": {
            const { lvFr } = await import("converters/lv/lv-fr");
            return (await lvFr(text)) as T;
          }
          case "hr": {
            const { lvHr } = await import("converters/lv/lv-hr");
            return (await lvHr(text)) as T;
          }
          case "hu": {
            const { lvHu } = await import("converters/lv/lv-hu");
            return (await lvHu(text)) as T;
          }
          case "id": {
            const { lvId } = await import("converters/lv/lv-id");
            return (await lvId(text)) as T;
          }
          case "is": {
            const { lvIs } = await import("converters/lv/lv-is");
            return (await lvIs(text)) as T;
          }
          case "it": {
            const { lvIt } = await import("converters/lv/lv-it");
            return (await lvIt(text)) as T;
          }
          case "kk": {
            const { lvKk } = await import("converters/lv/lv-kk");
            return (await lvKk(text)) as T;
          }
          case "lb": {
            const { lvLb } = await import("converters/lv/lv-lb");
            return (await lvLb(text)) as T;
          }
          case "lt": {
            const { lvLt } = await import("converters/lv/lv-lt");
            return (await lvLt(text)) as T;
          }
          case "ms": {
            const { lvMs } = await import("converters/lv/lv-ms");
            return (await lvMs(text)) as T;
          }
          case "mt": {
            const { lvMt } = await import("converters/lv/lv-mt");
            return (await lvMt(text)) as T;
          }
          case "nl": {
            const { lvNl } = await import("converters/lv/lv-nl");
            return (await lvNl(text)) as T;
          }
          case "no": {
            const { lvNo } = await import("converters/lv/lv-no");
            return (await lvNo(text)) as T;
          }
          case "pl": {
            const { lvPl } = await import("converters/lv/lv-pl");
            return (await lvPl(text)) as T;
          }
          case "pt": {
            const { lvPt } = await import("converters/lv/lv-pt");
            return (await lvPt(text)) as T;
          }
          case "ro": {
            const { lvRo } = await import("converters/lv/lv-ro");
            return (await lvRo(text)) as T;
          }
          case "sk": {
            const { lvSk } = await import("converters/lv/lv-sk");
            return (await lvSk(text)) as T;
          }
          case "sl": {
            const { lvSl } = await import("converters/lv/lv-sl");
            return (await lvSl(text)) as T;
          }
          case "sq": {
            const { lvSq } = await import("converters/lv/lv-sq");
            return (await lvSq(text)) as T;
          }
          case "sr": {
            const { lvSr } = await import("converters/lv/lv-sr");
            return (await lvSr(text)) as T;
          }
          case "sv": {
            const { lvSv } = await import("converters/lv/lv-sv");
            return (await lvSv(text)) as T;
          }
          case "tr": {
            const { lvTr } = await import("converters/lv/lv-tr");
            return (await lvTr(text)) as T;
          }
          case "vi": {
            const { lvVi } = await import("converters/lv/lv-vi");
            return (await lvVi(text)) as T;
          }
        }
        break;
      case "ms":
        switch (to) {
          case "zh": {
            const { msZh } = await import("converters/ms/ms-zh");
            return (await msZh(text)) as T;
          }
          case "ja": {
            const { msJa } = await import("converters/ms/ms-ja");
            return (await msJa(text)) as T;
          }
          case "ko": {
            const { msKo } = await import("converters/ms/ms-ko");
            return (await msKo(text)) as T;
          }
          case "hi": {
            const { msHi } = await import("converters/ms/ms-hi");
            return (await msHi(text)) as T;
          }
          case "bn": {
            const { msBn } = await import("converters/ms/ms-bn");
            return (await msBn(text)) as T;
          }
          case "ur": {
            const { msUr } = await import("converters/ms/ms-ur");
            return (await msUr(text)) as T;
          }
          case "fa": {
            const { msFa } = await import("converters/ms/ms-fa");
            return (await msFa(text)) as T;
          }
          case "ar": {
            const { msAr } = await import("converters/ms/ms-ar");
            return (await msAr(text)) as T;
          }
          case "he": {
            const { msHe } = await import("converters/ms/ms-he");
            return (await msHe(text)) as T;
          }
          case "ka": {
            const { msKa } = await import("converters/ms/ms-ka");
            return (await msKa(text)) as T;
          }
          case "hy": {
            const { msHy } = await import("converters/ms/ms-hy");
            return (await msHy(text)) as T;
          }
          case "el": {
            const { msEl } = await import("converters/ms/ms-el");
            return (await msEl(text)) as T;
          }
          case "ru": {
            const { msRu } = await import("converters/ms/ms-ru");
            return (await msRu(text)) as T;
          }
          case "uk": {
            const { msUk } = await import("converters/ms/ms-uk");
            return (await msUk(text)) as T;
          }
          case "bg": {
            const { msBg } = await import("converters/ms/ms-bg");
            return (await msBg(text)) as T;
          }
          case "mk": {
            const { msMk } = await import("converters/ms/ms-mk");
            return (await msMk(text)) as T;
          }
          case "az": {
            const { msAz } = await import("converters/ms/ms-az");
            return (await msAz(text)) as T;
          }
          case "bs": {
            const { msBs } = await import("converters/ms/ms-bs");
            return (await msBs(text)) as T;
          }
          case "ca": {
            const { msCa } = await import("converters/ms/ms-ca");
            return (await msCa(text)) as T;
          }
          case "cs": {
            const { msCs } = await import("converters/ms/ms-cs");
            return (await msCs(text)) as T;
          }
          case "da": {
            const { msDa } = await import("converters/ms/ms-da");
            return (await msDa(text)) as T;
          }
          case "de": {
            const { msDe } = await import("converters/ms/ms-de");
            return (await msDe(text)) as T;
          }
          case "en": {
            const { msEn } = await import("converters/ms/ms-en");
            return (await msEn(text)) as T;
          }
          case "es": {
            const { msEs } = await import("converters/ms/ms-es");
            return (await msEs(text)) as T;
          }
          case "et": {
            const { msEt } = await import("converters/ms/ms-et");
            return (await msEt(text)) as T;
          }
          case "fi": {
            const { msFi } = await import("converters/ms/ms-fi");
            return (await msFi(text)) as T;
          }
          case "fr": {
            const { msFr } = await import("converters/ms/ms-fr");
            return (await msFr(text)) as T;
          }
          case "hr": {
            const { msHr } = await import("converters/ms/ms-hr");
            return (await msHr(text)) as T;
          }
          case "hu": {
            const { msHu } = await import("converters/ms/ms-hu");
            return (await msHu(text)) as T;
          }
          case "id": {
            const { msId } = await import("converters/ms/ms-id");
            return (await msId(text)) as T;
          }
          case "is": {
            const { msIs } = await import("converters/ms/ms-is");
            return (await msIs(text)) as T;
          }
          case "it": {
            const { msIt } = await import("converters/ms/ms-it");
            return (await msIt(text)) as T;
          }
          case "kk": {
            const { msKk } = await import("converters/ms/ms-kk");
            return (await msKk(text)) as T;
          }
          case "lb": {
            const { msLb } = await import("converters/ms/ms-lb");
            return (await msLb(text)) as T;
          }
          case "lt": {
            const { msLt } = await import("converters/ms/ms-lt");
            return (await msLt(text)) as T;
          }
          case "lv": {
            const { msLv } = await import("converters/ms/ms-lv");
            return (await msLv(text)) as T;
          }
          case "mt": {
            const { msMt } = await import("converters/ms/ms-mt");
            return (await msMt(text)) as T;
          }
          case "nl": {
            const { msNl } = await import("converters/ms/ms-nl");
            return (await msNl(text)) as T;
          }
          case "no": {
            const { msNo } = await import("converters/ms/ms-no");
            return (await msNo(text)) as T;
          }
          case "pl": {
            const { msPl } = await import("converters/ms/ms-pl");
            return (await msPl(text)) as T;
          }
          case "pt": {
            const { msPt } = await import("converters/ms/ms-pt");
            return (await msPt(text)) as T;
          }
          case "ro": {
            const { msRo } = await import("converters/ms/ms-ro");
            return (await msRo(text)) as T;
          }
          case "sk": {
            const { msSk } = await import("converters/ms/ms-sk");
            return (await msSk(text)) as T;
          }
          case "sl": {
            const { msSl } = await import("converters/ms/ms-sl");
            return (await msSl(text)) as T;
          }
          case "sq": {
            const { msSq } = await import("converters/ms/ms-sq");
            return (await msSq(text)) as T;
          }
          case "sr": {
            const { msSr } = await import("converters/ms/ms-sr");
            return (await msSr(text)) as T;
          }
          case "sv": {
            const { msSv } = await import("converters/ms/ms-sv");
            return (await msSv(text)) as T;
          }
          case "tr": {
            const { msTr } = await import("converters/ms/ms-tr");
            return (await msTr(text)) as T;
          }
          case "vi": {
            const { msVi } = await import("converters/ms/ms-vi");
            return (await msVi(text)) as T;
          }
        }
        break;
      case "mt":
        switch (to) {
          case "zh": {
            const { mtZh } = await import("converters/mt/mt-zh");
            return (await mtZh(text)) as T;
          }
          case "ja": {
            const { mtJa } = await import("converters/mt/mt-ja");
            return (await mtJa(text)) as T;
          }
          case "ko": {
            const { mtKo } = await import("converters/mt/mt-ko");
            return (await mtKo(text)) as T;
          }
          case "hi": {
            const { mtHi } = await import("converters/mt/mt-hi");
            return (await mtHi(text)) as T;
          }
          case "bn": {
            const { mtBn } = await import("converters/mt/mt-bn");
            return (await mtBn(text)) as T;
          }
          case "ur": {
            const { mtUr } = await import("converters/mt/mt-ur");
            return (await mtUr(text)) as T;
          }
          case "fa": {
            const { mtFa } = await import("converters/mt/mt-fa");
            return (await mtFa(text)) as T;
          }
          case "ar": {
            const { mtAr } = await import("converters/mt/mt-ar");
            return (await mtAr(text)) as T;
          }
          case "he": {
            const { mtHe } = await import("converters/mt/mt-he");
            return (await mtHe(text)) as T;
          }
          case "ka": {
            const { mtKa } = await import("converters/mt/mt-ka");
            return (await mtKa(text)) as T;
          }
          case "hy": {
            const { mtHy } = await import("converters/mt/mt-hy");
            return (await mtHy(text)) as T;
          }
          case "el": {
            const { mtEl } = await import("converters/mt/mt-el");
            return (await mtEl(text)) as T;
          }
          case "ru": {
            const { mtRu } = await import("converters/mt/mt-ru");
            return (await mtRu(text)) as T;
          }
          case "uk": {
            const { mtUk } = await import("converters/mt/mt-uk");
            return (await mtUk(text)) as T;
          }
          case "bg": {
            const { mtBg } = await import("converters/mt/mt-bg");
            return (await mtBg(text)) as T;
          }
          case "mk": {
            const { mtMk } = await import("converters/mt/mt-mk");
            return (await mtMk(text)) as T;
          }
          case "az": {
            const { mtAz } = await import("converters/mt/mt-az");
            return (await mtAz(text)) as T;
          }
          case "bs": {
            const { mtBs } = await import("converters/mt/mt-bs");
            return (await mtBs(text)) as T;
          }
          case "ca": {
            const { mtCa } = await import("converters/mt/mt-ca");
            return (await mtCa(text)) as T;
          }
          case "cs": {
            const { mtCs } = await import("converters/mt/mt-cs");
            return (await mtCs(text)) as T;
          }
          case "da": {
            const { mtDa } = await import("converters/mt/mt-da");
            return (await mtDa(text)) as T;
          }
          case "de": {
            const { mtDe } = await import("converters/mt/mt-de");
            return (await mtDe(text)) as T;
          }
          case "en": {
            const { mtEn } = await import("converters/mt/mt-en");
            return (await mtEn(text)) as T;
          }
          case "es": {
            const { mtEs } = await import("converters/mt/mt-es");
            return (await mtEs(text)) as T;
          }
          case "et": {
            const { mtEt } = await import("converters/mt/mt-et");
            return (await mtEt(text)) as T;
          }
          case "fi": {
            const { mtFi } = await import("converters/mt/mt-fi");
            return (await mtFi(text)) as T;
          }
          case "fr": {
            const { mtFr } = await import("converters/mt/mt-fr");
            return (await mtFr(text)) as T;
          }
          case "hr": {
            const { mtHr } = await import("converters/mt/mt-hr");
            return (await mtHr(text)) as T;
          }
          case "hu": {
            const { mtHu } = await import("converters/mt/mt-hu");
            return (await mtHu(text)) as T;
          }
          case "id": {
            const { mtId } = await import("converters/mt/mt-id");
            return (await mtId(text)) as T;
          }
          case "is": {
            const { mtIs } = await import("converters/mt/mt-is");
            return (await mtIs(text)) as T;
          }
          case "it": {
            const { mtIt } = await import("converters/mt/mt-it");
            return (await mtIt(text)) as T;
          }
          case "kk": {
            const { mtKk } = await import("converters/mt/mt-kk");
            return (await mtKk(text)) as T;
          }
          case "lb": {
            const { mtLb } = await import("converters/mt/mt-lb");
            return (await mtLb(text)) as T;
          }
          case "lt": {
            const { mtLt } = await import("converters/mt/mt-lt");
            return (await mtLt(text)) as T;
          }
          case "lv": {
            const { mtLv } = await import("converters/mt/mt-lv");
            return (await mtLv(text)) as T;
          }
          case "ms": {
            const { mtMs } = await import("converters/mt/mt-ms");
            return (await mtMs(text)) as T;
          }
          case "nl": {
            const { mtNl } = await import("converters/mt/mt-nl");
            return (await mtNl(text)) as T;
          }
          case "no": {
            const { mtNo } = await import("converters/mt/mt-no");
            return (await mtNo(text)) as T;
          }
          case "pl": {
            const { mtPl } = await import("converters/mt/mt-pl");
            return (await mtPl(text)) as T;
          }
          case "pt": {
            const { mtPt } = await import("converters/mt/mt-pt");
            return (await mtPt(text)) as T;
          }
          case "ro": {
            const { mtRo } = await import("converters/mt/mt-ro");
            return (await mtRo(text)) as T;
          }
          case "sk": {
            const { mtSk } = await import("converters/mt/mt-sk");
            return (await mtSk(text)) as T;
          }
          case "sl": {
            const { mtSl } = await import("converters/mt/mt-sl");
            return (await mtSl(text)) as T;
          }
          case "sq": {
            const { mtSq } = await import("converters/mt/mt-sq");
            return (await mtSq(text)) as T;
          }
          case "sr": {
            const { mtSr } = await import("converters/mt/mt-sr");
            return (await mtSr(text)) as T;
          }
          case "sv": {
            const { mtSv } = await import("converters/mt/mt-sv");
            return (await mtSv(text)) as T;
          }
          case "tr": {
            const { mtTr } = await import("converters/mt/mt-tr");
            return (await mtTr(text)) as T;
          }
          case "vi": {
            const { mtVi } = await import("converters/mt/mt-vi");
            return (await mtVi(text)) as T;
          }
        }
        break;
      case "nl":
        switch (to) {
          case "zh": {
            const { nlZh } = await import("converters/nl/nl-zh");
            return (await nlZh(text)) as T;
          }
          case "ja": {
            const { nlJa } = await import("converters/nl/nl-ja");
            return (await nlJa(text)) as T;
          }
          case "ko": {
            const { nlKo } = await import("converters/nl/nl-ko");
            return (await nlKo(text)) as T;
          }
          case "hi": {
            const { nlHi } = await import("converters/nl/nl-hi");
            return (await nlHi(text)) as T;
          }
          case "bn": {
            const { nlBn } = await import("converters/nl/nl-bn");
            return (await nlBn(text)) as T;
          }
          case "ur": {
            const { nlUr } = await import("converters/nl/nl-ur");
            return (await nlUr(text)) as T;
          }
          case "fa": {
            const { nlFa } = await import("converters/nl/nl-fa");
            return (await nlFa(text)) as T;
          }
          case "ar": {
            const { nlAr } = await import("converters/nl/nl-ar");
            return (await nlAr(text)) as T;
          }
          case "he": {
            const { nlHe } = await import("converters/nl/nl-he");
            return (await nlHe(text)) as T;
          }
          case "ka": {
            const { nlKa } = await import("converters/nl/nl-ka");
            return (await nlKa(text)) as T;
          }
          case "hy": {
            const { nlHy } = await import("converters/nl/nl-hy");
            return (await nlHy(text)) as T;
          }
          case "el": {
            const { nlEl } = await import("converters/nl/nl-el");
            return (await nlEl(text)) as T;
          }
          case "ru": {
            const { nlRu } = await import("converters/nl/nl-ru");
            return (await nlRu(text)) as T;
          }
          case "uk": {
            const { nlUk } = await import("converters/nl/nl-uk");
            return (await nlUk(text)) as T;
          }
          case "bg": {
            const { nlBg } = await import("converters/nl/nl-bg");
            return (await nlBg(text)) as T;
          }
          case "mk": {
            const { nlMk } = await import("converters/nl/nl-mk");
            return (await nlMk(text)) as T;
          }
          case "az": {
            const { nlAz } = await import("converters/nl/nl-az");
            return (await nlAz(text)) as T;
          }
          case "bs": {
            const { nlBs } = await import("converters/nl/nl-bs");
            return (await nlBs(text)) as T;
          }
          case "ca": {
            const { nlCa } = await import("converters/nl/nl-ca");
            return (await nlCa(text)) as T;
          }
          case "cs": {
            const { nlCs } = await import("converters/nl/nl-cs");
            return (await nlCs(text)) as T;
          }
          case "da": {
            const { nlDa } = await import("converters/nl/nl-da");
            return (await nlDa(text)) as T;
          }
          case "de": {
            const { nlDe } = await import("converters/nl/nl-de");
            return (await nlDe(text)) as T;
          }
          case "en": {
            const { nlEn } = await import("converters/nl/nl-en");
            return (await nlEn(text)) as T;
          }
          case "es": {
            const { nlEs } = await import("converters/nl/nl-es");
            return (await nlEs(text)) as T;
          }
          case "et": {
            const { nlEt } = await import("converters/nl/nl-et");
            return (await nlEt(text)) as T;
          }
          case "fi": {
            const { nlFi } = await import("converters/nl/nl-fi");
            return (await nlFi(text)) as T;
          }
          case "fr": {
            const { nlFr } = await import("converters/nl/nl-fr");
            return (await nlFr(text)) as T;
          }
          case "hr": {
            const { nlHr } = await import("converters/nl/nl-hr");
            return (await nlHr(text)) as T;
          }
          case "hu": {
            const { nlHu } = await import("converters/nl/nl-hu");
            return (await nlHu(text)) as T;
          }
          case "id": {
            const { nlId } = await import("converters/nl/nl-id");
            return (await nlId(text)) as T;
          }
          case "is": {
            const { nlIs } = await import("converters/nl/nl-is");
            return (await nlIs(text)) as T;
          }
          case "it": {
            const { nlIt } = await import("converters/nl/nl-it");
            return (await nlIt(text)) as T;
          }
          case "kk": {
            const { nlKk } = await import("converters/nl/nl-kk");
            return (await nlKk(text)) as T;
          }
          case "lb": {
            const { nlLb } = await import("converters/nl/nl-lb");
            return (await nlLb(text)) as T;
          }
          case "lt": {
            const { nlLt } = await import("converters/nl/nl-lt");
            return (await nlLt(text)) as T;
          }
          case "lv": {
            const { nlLv } = await import("converters/nl/nl-lv");
            return (await nlLv(text)) as T;
          }
          case "ms": {
            const { nlMs } = await import("converters/nl/nl-ms");
            return (await nlMs(text)) as T;
          }
          case "mt": {
            const { nlMt } = await import("converters/nl/nl-mt");
            return (await nlMt(text)) as T;
          }
          case "no": {
            const { nlNo } = await import("converters/nl/nl-no");
            return (await nlNo(text)) as T;
          }
          case "pl": {
            const { nlPl } = await import("converters/nl/nl-pl");
            return (await nlPl(text)) as T;
          }
          case "pt": {
            const { nlPt } = await import("converters/nl/nl-pt");
            return (await nlPt(text)) as T;
          }
          case "ro": {
            const { nlRo } = await import("converters/nl/nl-ro");
            return (await nlRo(text)) as T;
          }
          case "sk": {
            const { nlSk } = await import("converters/nl/nl-sk");
            return (await nlSk(text)) as T;
          }
          case "sl": {
            const { nlSl } = await import("converters/nl/nl-sl");
            return (await nlSl(text)) as T;
          }
          case "sq": {
            const { nlSq } = await import("converters/nl/nl-sq");
            return (await nlSq(text)) as T;
          }
          case "sr": {
            const { nlSr } = await import("converters/nl/nl-sr");
            return (await nlSr(text)) as T;
          }
          case "sv": {
            const { nlSv } = await import("converters/nl/nl-sv");
            return (await nlSv(text)) as T;
          }
          case "tr": {
            const { nlTr } = await import("converters/nl/nl-tr");
            return (await nlTr(text)) as T;
          }
          case "vi": {
            const { nlVi } = await import("converters/nl/nl-vi");
            return (await nlVi(text)) as T;
          }
        }
        break;
      case "no":
        switch (to) {
          case "zh": {
            const { noZh } = await import("converters/no/no-zh");
            return (await noZh(text)) as T;
          }
          case "ja": {
            const { noJa } = await import("converters/no/no-ja");
            return (await noJa(text)) as T;
          }
          case "ko": {
            const { noKo } = await import("converters/no/no-ko");
            return (await noKo(text)) as T;
          }
          case "hi": {
            const { noHi } = await import("converters/no/no-hi");
            return (await noHi(text)) as T;
          }
          case "bn": {
            const { noBn } = await import("converters/no/no-bn");
            return (await noBn(text)) as T;
          }
          case "ur": {
            const { noUr } = await import("converters/no/no-ur");
            return (await noUr(text)) as T;
          }
          case "fa": {
            const { noFa } = await import("converters/no/no-fa");
            return (await noFa(text)) as T;
          }
          case "ar": {
            const { noAr } = await import("converters/no/no-ar");
            return (await noAr(text)) as T;
          }
          case "he": {
            const { noHe } = await import("converters/no/no-he");
            return (await noHe(text)) as T;
          }
          case "ka": {
            const { noKa } = await import("converters/no/no-ka");
            return (await noKa(text)) as T;
          }
          case "hy": {
            const { noHy } = await import("converters/no/no-hy");
            return (await noHy(text)) as T;
          }
          case "el": {
            const { noEl } = await import("converters/no/no-el");
            return (await noEl(text)) as T;
          }
          case "ru": {
            const { noRu } = await import("converters/no/no-ru");
            return (await noRu(text)) as T;
          }
          case "uk": {
            const { noUk } = await import("converters/no/no-uk");
            return (await noUk(text)) as T;
          }
          case "bg": {
            const { noBg } = await import("converters/no/no-bg");
            return (await noBg(text)) as T;
          }
          case "mk": {
            const { noMk } = await import("converters/no/no-mk");
            return (await noMk(text)) as T;
          }
          case "az": {
            const { noAz } = await import("converters/no/no-az");
            return (await noAz(text)) as T;
          }
          case "bs": {
            const { noBs } = await import("converters/no/no-bs");
            return (await noBs(text)) as T;
          }
          case "ca": {
            const { noCa } = await import("converters/no/no-ca");
            return (await noCa(text)) as T;
          }
          case "cs": {
            const { noCs } = await import("converters/no/no-cs");
            return (await noCs(text)) as T;
          }
          case "da": {
            const { noDa } = await import("converters/no/no-da");
            return (await noDa(text)) as T;
          }
          case "de": {
            const { noDe } = await import("converters/no/no-de");
            return (await noDe(text)) as T;
          }
          case "en": {
            const { noEn } = await import("converters/no/no-en");
            return (await noEn(text)) as T;
          }
          case "es": {
            const { noEs } = await import("converters/no/no-es");
            return (await noEs(text)) as T;
          }
          case "et": {
            const { noEt } = await import("converters/no/no-et");
            return (await noEt(text)) as T;
          }
          case "fi": {
            const { noFi } = await import("converters/no/no-fi");
            return (await noFi(text)) as T;
          }
          case "fr": {
            const { noFr } = await import("converters/no/no-fr");
            return (await noFr(text)) as T;
          }
          case "hr": {
            const { noHr } = await import("converters/no/no-hr");
            return (await noHr(text)) as T;
          }
          case "hu": {
            const { noHu } = await import("converters/no/no-hu");
            return (await noHu(text)) as T;
          }
          case "id": {
            const { noId } = await import("converters/no/no-id");
            return (await noId(text)) as T;
          }
          case "is": {
            const { noIs } = await import("converters/no/no-is");
            return (await noIs(text)) as T;
          }
          case "it": {
            const { noIt } = await import("converters/no/no-it");
            return (await noIt(text)) as T;
          }
          case "kk": {
            const { noKk } = await import("converters/no/no-kk");
            return (await noKk(text)) as T;
          }
          case "lb": {
            const { noLb } = await import("converters/no/no-lb");
            return (await noLb(text)) as T;
          }
          case "lt": {
            const { noLt } = await import("converters/no/no-lt");
            return (await noLt(text)) as T;
          }
          case "lv": {
            const { noLv } = await import("converters/no/no-lv");
            return (await noLv(text)) as T;
          }
          case "ms": {
            const { noMs } = await import("converters/no/no-ms");
            return (await noMs(text)) as T;
          }
          case "mt": {
            const { noMt } = await import("converters/no/no-mt");
            return (await noMt(text)) as T;
          }
          case "nl": {
            const { noNl } = await import("converters/no/no-nl");
            return (await noNl(text)) as T;
          }
          case "pl": {
            const { noPl } = await import("converters/no/no-pl");
            return (await noPl(text)) as T;
          }
          case "pt": {
            const { noPt } = await import("converters/no/no-pt");
            return (await noPt(text)) as T;
          }
          case "ro": {
            const { noRo } = await import("converters/no/no-ro");
            return (await noRo(text)) as T;
          }
          case "sk": {
            const { noSk } = await import("converters/no/no-sk");
            return (await noSk(text)) as T;
          }
          case "sl": {
            const { noSl } = await import("converters/no/no-sl");
            return (await noSl(text)) as T;
          }
          case "sq": {
            const { noSq } = await import("converters/no/no-sq");
            return (await noSq(text)) as T;
          }
          case "sr": {
            const { noSr } = await import("converters/no/no-sr");
            return (await noSr(text)) as T;
          }
          case "sv": {
            const { noSv } = await import("converters/no/no-sv");
            return (await noSv(text)) as T;
          }
          case "tr": {
            const { noTr } = await import("converters/no/no-tr");
            return (await noTr(text)) as T;
          }
          case "vi": {
            const { noVi } = await import("converters/no/no-vi");
            return (await noVi(text)) as T;
          }
        }
        break;
      case "pl":
        switch (to) {
          case "zh": {
            const { plZh } = await import("converters/pl/pl-zh");
            return (await plZh(text)) as T;
          }
          case "ja": {
            const { plJa } = await import("converters/pl/pl-ja");
            return (await plJa(text)) as T;
          }
          case "ko": {
            const { plKo } = await import("converters/pl/pl-ko");
            return (await plKo(text)) as T;
          }
          case "hi": {
            const { plHi } = await import("converters/pl/pl-hi");
            return (await plHi(text)) as T;
          }
          case "bn": {
            const { plBn } = await import("converters/pl/pl-bn");
            return (await plBn(text)) as T;
          }
          case "ur": {
            const { plUr } = await import("converters/pl/pl-ur");
            return (await plUr(text)) as T;
          }
          case "fa": {
            const { plFa } = await import("converters/pl/pl-fa");
            return (await plFa(text)) as T;
          }
          case "ar": {
            const { plAr } = await import("converters/pl/pl-ar");
            return (await plAr(text)) as T;
          }
          case "he": {
            const { plHe } = await import("converters/pl/pl-he");
            return (await plHe(text)) as T;
          }
          case "ka": {
            const { plKa } = await import("converters/pl/pl-ka");
            return (await plKa(text)) as T;
          }
          case "hy": {
            const { plHy } = await import("converters/pl/pl-hy");
            return (await plHy(text)) as T;
          }
          case "el": {
            const { plEl } = await import("converters/pl/pl-el");
            return (await plEl(text)) as T;
          }
          case "ru": {
            const { plRu } = await import("converters/pl/pl-ru");
            return (await plRu(text)) as T;
          }
          case "uk": {
            const { plUk } = await import("converters/pl/pl-uk");
            return (await plUk(text)) as T;
          }
          case "bg": {
            const { plBg } = await import("converters/pl/pl-bg");
            return (await plBg(text)) as T;
          }
          case "mk": {
            const { plMk } = await import("converters/pl/pl-mk");
            return (await plMk(text)) as T;
          }
          case "az": {
            const { plAz } = await import("converters/pl/pl-az");
            return (await plAz(text)) as T;
          }
          case "bs": {
            const { plBs } = await import("converters/pl/pl-bs");
            return (await plBs(text)) as T;
          }
          case "ca": {
            const { plCa } = await import("converters/pl/pl-ca");
            return (await plCa(text)) as T;
          }
          case "cs": {
            const { plCs } = await import("converters/pl/pl-cs");
            return (await plCs(text)) as T;
          }
          case "da": {
            const { plDa } = await import("converters/pl/pl-da");
            return (await plDa(text)) as T;
          }
          case "de": {
            const { plDe } = await import("converters/pl/pl-de");
            return (await plDe(text)) as T;
          }
          case "en": {
            const { plEn } = await import("converters/pl/pl-en");
            return (await plEn(text)) as T;
          }
          case "es": {
            const { plEs } = await import("converters/pl/pl-es");
            return (await plEs(text)) as T;
          }
          case "et": {
            const { plEt } = await import("converters/pl/pl-et");
            return (await plEt(text)) as T;
          }
          case "fi": {
            const { plFi } = await import("converters/pl/pl-fi");
            return (await plFi(text)) as T;
          }
          case "fr": {
            const { plFr } = await import("converters/pl/pl-fr");
            return (await plFr(text)) as T;
          }
          case "hr": {
            const { plHr } = await import("converters/pl/pl-hr");
            return (await plHr(text)) as T;
          }
          case "hu": {
            const { plHu } = await import("converters/pl/pl-hu");
            return (await plHu(text)) as T;
          }
          case "id": {
            const { plId } = await import("converters/pl/pl-id");
            return (await plId(text)) as T;
          }
          case "is": {
            const { plIs } = await import("converters/pl/pl-is");
            return (await plIs(text)) as T;
          }
          case "it": {
            const { plIt } = await import("converters/pl/pl-it");
            return (await plIt(text)) as T;
          }
          case "kk": {
            const { plKk } = await import("converters/pl/pl-kk");
            return (await plKk(text)) as T;
          }
          case "lb": {
            const { plLb } = await import("converters/pl/pl-lb");
            return (await plLb(text)) as T;
          }
          case "lt": {
            const { plLt } = await import("converters/pl/pl-lt");
            return (await plLt(text)) as T;
          }
          case "lv": {
            const { plLv } = await import("converters/pl/pl-lv");
            return (await plLv(text)) as T;
          }
          case "ms": {
            const { plMs } = await import("converters/pl/pl-ms");
            return (await plMs(text)) as T;
          }
          case "mt": {
            const { plMt } = await import("converters/pl/pl-mt");
            return (await plMt(text)) as T;
          }
          case "nl": {
            const { plNl } = await import("converters/pl/pl-nl");
            return (await plNl(text)) as T;
          }
          case "no": {
            const { plNo } = await import("converters/pl/pl-no");
            return (await plNo(text)) as T;
          }
          case "pt": {
            const { plPt } = await import("converters/pl/pl-pt");
            return (await plPt(text)) as T;
          }
          case "ro": {
            const { plRo } = await import("converters/pl/pl-ro");
            return (await plRo(text)) as T;
          }
          case "sk": {
            const { plSk } = await import("converters/pl/pl-sk");
            return (await plSk(text)) as T;
          }
          case "sl": {
            const { plSl } = await import("converters/pl/pl-sl");
            return (await plSl(text)) as T;
          }
          case "sq": {
            const { plSq } = await import("converters/pl/pl-sq");
            return (await plSq(text)) as T;
          }
          case "sr": {
            const { plSr } = await import("converters/pl/pl-sr");
            return (await plSr(text)) as T;
          }
          case "sv": {
            const { plSv } = await import("converters/pl/pl-sv");
            return (await plSv(text)) as T;
          }
          case "tr": {
            const { plTr } = await import("converters/pl/pl-tr");
            return (await plTr(text)) as T;
          }
          case "vi": {
            const { plVi } = await import("converters/pl/pl-vi");
            return (await plVi(text)) as T;
          }
        }
        break;
      case "pt":
        switch (to) {
          case "zh": {
            const { ptZh } = await import("converters/pt/pt-zh");
            return (await ptZh(text)) as T;
          }
          case "ja": {
            const { ptJa } = await import("converters/pt/pt-ja");
            return (await ptJa(text)) as T;
          }
          case "ko": {
            const { ptKo } = await import("converters/pt/pt-ko");
            return (await ptKo(text)) as T;
          }
          case "hi": {
            const { ptHi } = await import("converters/pt/pt-hi");
            return (await ptHi(text)) as T;
          }
          case "bn": {
            const { ptBn } = await import("converters/pt/pt-bn");
            return (await ptBn(text)) as T;
          }
          case "ur": {
            const { ptUr } = await import("converters/pt/pt-ur");
            return (await ptUr(text)) as T;
          }
          case "fa": {
            const { ptFa } = await import("converters/pt/pt-fa");
            return (await ptFa(text)) as T;
          }
          case "ar": {
            const { ptAr } = await import("converters/pt/pt-ar");
            return (await ptAr(text)) as T;
          }
          case "he": {
            const { ptHe } = await import("converters/pt/pt-he");
            return (await ptHe(text)) as T;
          }
          case "ka": {
            const { ptKa } = await import("converters/pt/pt-ka");
            return (await ptKa(text)) as T;
          }
          case "hy": {
            const { ptHy } = await import("converters/pt/pt-hy");
            return (await ptHy(text)) as T;
          }
          case "el": {
            const { ptEl } = await import("converters/pt/pt-el");
            return (await ptEl(text)) as T;
          }
          case "ru": {
            const { ptRu } = await import("converters/pt/pt-ru");
            return (await ptRu(text)) as T;
          }
          case "uk": {
            const { ptUk } = await import("converters/pt/pt-uk");
            return (await ptUk(text)) as T;
          }
          case "bg": {
            const { ptBg } = await import("converters/pt/pt-bg");
            return (await ptBg(text)) as T;
          }
          case "mk": {
            const { ptMk } = await import("converters/pt/pt-mk");
            return (await ptMk(text)) as T;
          }
          case "az": {
            const { ptAz } = await import("converters/pt/pt-az");
            return (await ptAz(text)) as T;
          }
          case "bs": {
            const { ptBs } = await import("converters/pt/pt-bs");
            return (await ptBs(text)) as T;
          }
          case "ca": {
            const { ptCa } = await import("converters/pt/pt-ca");
            return (await ptCa(text)) as T;
          }
          case "cs": {
            const { ptCs } = await import("converters/pt/pt-cs");
            return (await ptCs(text)) as T;
          }
          case "da": {
            const { ptDa } = await import("converters/pt/pt-da");
            return (await ptDa(text)) as T;
          }
          case "de": {
            const { ptDe } = await import("converters/pt/pt-de");
            return (await ptDe(text)) as T;
          }
          case "en": {
            const { ptEn } = await import("converters/pt/pt-en");
            return (await ptEn(text)) as T;
          }
          case "es": {
            const { ptEs } = await import("converters/pt/pt-es");
            return (await ptEs(text)) as T;
          }
          case "et": {
            const { ptEt } = await import("converters/pt/pt-et");
            return (await ptEt(text)) as T;
          }
          case "fi": {
            const { ptFi } = await import("converters/pt/pt-fi");
            return (await ptFi(text)) as T;
          }
          case "fr": {
            const { ptFr } = await import("converters/pt/pt-fr");
            return (await ptFr(text)) as T;
          }
          case "hr": {
            const { ptHr } = await import("converters/pt/pt-hr");
            return (await ptHr(text)) as T;
          }
          case "hu": {
            const { ptHu } = await import("converters/pt/pt-hu");
            return (await ptHu(text)) as T;
          }
          case "id": {
            const { ptId } = await import("converters/pt/pt-id");
            return (await ptId(text)) as T;
          }
          case "is": {
            const { ptIs } = await import("converters/pt/pt-is");
            return (await ptIs(text)) as T;
          }
          case "it": {
            const { ptIt } = await import("converters/pt/pt-it");
            return (await ptIt(text)) as T;
          }
          case "kk": {
            const { ptKk } = await import("converters/pt/pt-kk");
            return (await ptKk(text)) as T;
          }
          case "lb": {
            const { ptLb } = await import("converters/pt/pt-lb");
            return (await ptLb(text)) as T;
          }
          case "lt": {
            const { ptLt } = await import("converters/pt/pt-lt");
            return (await ptLt(text)) as T;
          }
          case "lv": {
            const { ptLv } = await import("converters/pt/pt-lv");
            return (await ptLv(text)) as T;
          }
          case "ms": {
            const { ptMs } = await import("converters/pt/pt-ms");
            return (await ptMs(text)) as T;
          }
          case "mt": {
            const { ptMt } = await import("converters/pt/pt-mt");
            return (await ptMt(text)) as T;
          }
          case "nl": {
            const { ptNl } = await import("converters/pt/pt-nl");
            return (await ptNl(text)) as T;
          }
          case "no": {
            const { ptNo } = await import("converters/pt/pt-no");
            return (await ptNo(text)) as T;
          }
          case "pl": {
            const { ptPl } = await import("converters/pt/pt-pl");
            return (await ptPl(text)) as T;
          }
          case "ro": {
            const { ptRo } = await import("converters/pt/pt-ro");
            return (await ptRo(text)) as T;
          }
          case "sk": {
            const { ptSk } = await import("converters/pt/pt-sk");
            return (await ptSk(text)) as T;
          }
          case "sl": {
            const { ptSl } = await import("converters/pt/pt-sl");
            return (await ptSl(text)) as T;
          }
          case "sq": {
            const { ptSq } = await import("converters/pt/pt-sq");
            return (await ptSq(text)) as T;
          }
          case "sr": {
            const { ptSr } = await import("converters/pt/pt-sr");
            return (await ptSr(text)) as T;
          }
          case "sv": {
            const { ptSv } = await import("converters/pt/pt-sv");
            return (await ptSv(text)) as T;
          }
          case "tr": {
            const { ptTr } = await import("converters/pt/pt-tr");
            return (await ptTr(text)) as T;
          }
          case "vi": {
            const { ptVi } = await import("converters/pt/pt-vi");
            return (await ptVi(text)) as T;
          }
        }
        break;
      case "ro":
        switch (to) {
          case "zh": {
            const { roZh } = await import("converters/ro/ro-zh");
            return (await roZh(text)) as T;
          }
          case "ja": {
            const { roJa } = await import("converters/ro/ro-ja");
            return (await roJa(text)) as T;
          }
          case "ko": {
            const { roKo } = await import("converters/ro/ro-ko");
            return (await roKo(text)) as T;
          }
          case "hi": {
            const { roHi } = await import("converters/ro/ro-hi");
            return (await roHi(text)) as T;
          }
          case "bn": {
            const { roBn } = await import("converters/ro/ro-bn");
            return (await roBn(text)) as T;
          }
          case "ur": {
            const { roUr } = await import("converters/ro/ro-ur");
            return (await roUr(text)) as T;
          }
          case "fa": {
            const { roFa } = await import("converters/ro/ro-fa");
            return (await roFa(text)) as T;
          }
          case "ar": {
            const { roAr } = await import("converters/ro/ro-ar");
            return (await roAr(text)) as T;
          }
          case "he": {
            const { roHe } = await import("converters/ro/ro-he");
            return (await roHe(text)) as T;
          }
          case "ka": {
            const { roKa } = await import("converters/ro/ro-ka");
            return (await roKa(text)) as T;
          }
          case "hy": {
            const { roHy } = await import("converters/ro/ro-hy");
            return (await roHy(text)) as T;
          }
          case "el": {
            const { roEl } = await import("converters/ro/ro-el");
            return (await roEl(text)) as T;
          }
          case "ru": {
            const { roRu } = await import("converters/ro/ro-ru");
            return (await roRu(text)) as T;
          }
          case "uk": {
            const { roUk } = await import("converters/ro/ro-uk");
            return (await roUk(text)) as T;
          }
          case "bg": {
            const { roBg } = await import("converters/ro/ro-bg");
            return (await roBg(text)) as T;
          }
          case "mk": {
            const { roMk } = await import("converters/ro/ro-mk");
            return (await roMk(text)) as T;
          }
          case "az": {
            const { roAz } = await import("converters/ro/ro-az");
            return (await roAz(text)) as T;
          }
          case "bs": {
            const { roBs } = await import("converters/ro/ro-bs");
            return (await roBs(text)) as T;
          }
          case "ca": {
            const { roCa } = await import("converters/ro/ro-ca");
            return (await roCa(text)) as T;
          }
          case "cs": {
            const { roCs } = await import("converters/ro/ro-cs");
            return (await roCs(text)) as T;
          }
          case "da": {
            const { roDa } = await import("converters/ro/ro-da");
            return (await roDa(text)) as T;
          }
          case "de": {
            const { roDe } = await import("converters/ro/ro-de");
            return (await roDe(text)) as T;
          }
          case "en": {
            const { roEn } = await import("converters/ro/ro-en");
            return (await roEn(text)) as T;
          }
          case "es": {
            const { roEs } = await import("converters/ro/ro-es");
            return (await roEs(text)) as T;
          }
          case "et": {
            const { roEt } = await import("converters/ro/ro-et");
            return (await roEt(text)) as T;
          }
          case "fi": {
            const { roFi } = await import("converters/ro/ro-fi");
            return (await roFi(text)) as T;
          }
          case "fr": {
            const { roFr } = await import("converters/ro/ro-fr");
            return (await roFr(text)) as T;
          }
          case "hr": {
            const { roHr } = await import("converters/ro/ro-hr");
            return (await roHr(text)) as T;
          }
          case "hu": {
            const { roHu } = await import("converters/ro/ro-hu");
            return (await roHu(text)) as T;
          }
          case "id": {
            const { roId } = await import("converters/ro/ro-id");
            return (await roId(text)) as T;
          }
          case "is": {
            const { roIs } = await import("converters/ro/ro-is");
            return (await roIs(text)) as T;
          }
          case "it": {
            const { roIt } = await import("converters/ro/ro-it");
            return (await roIt(text)) as T;
          }
          case "kk": {
            const { roKk } = await import("converters/ro/ro-kk");
            return (await roKk(text)) as T;
          }
          case "lb": {
            const { roLb } = await import("converters/ro/ro-lb");
            return (await roLb(text)) as T;
          }
          case "lt": {
            const { roLt } = await import("converters/ro/ro-lt");
            return (await roLt(text)) as T;
          }
          case "lv": {
            const { roLv } = await import("converters/ro/ro-lv");
            return (await roLv(text)) as T;
          }
          case "ms": {
            const { roMs } = await import("converters/ro/ro-ms");
            return (await roMs(text)) as T;
          }
          case "mt": {
            const { roMt } = await import("converters/ro/ro-mt");
            return (await roMt(text)) as T;
          }
          case "nl": {
            const { roNl } = await import("converters/ro/ro-nl");
            return (await roNl(text)) as T;
          }
          case "no": {
            const { roNo } = await import("converters/ro/ro-no");
            return (await roNo(text)) as T;
          }
          case "pl": {
            const { roPl } = await import("converters/ro/ro-pl");
            return (await roPl(text)) as T;
          }
          case "pt": {
            const { roPt } = await import("converters/ro/ro-pt");
            return (await roPt(text)) as T;
          }
          case "sk": {
            const { roSk } = await import("converters/ro/ro-sk");
            return (await roSk(text)) as T;
          }
          case "sl": {
            const { roSl } = await import("converters/ro/ro-sl");
            return (await roSl(text)) as T;
          }
          case "sq": {
            const { roSq } = await import("converters/ro/ro-sq");
            return (await roSq(text)) as T;
          }
          case "sr": {
            const { roSr } = await import("converters/ro/ro-sr");
            return (await roSr(text)) as T;
          }
          case "sv": {
            const { roSv } = await import("converters/ro/ro-sv");
            return (await roSv(text)) as T;
          }
          case "tr": {
            const { roTr } = await import("converters/ro/ro-tr");
            return (await roTr(text)) as T;
          }
          case "vi": {
            const { roVi } = await import("converters/ro/ro-vi");
            return (await roVi(text)) as T;
          }
        }
        break;
      case "sk":
        switch (to) {
          case "zh": {
            const { skZh } = await import("converters/sk/sk-zh");
            return (await skZh(text)) as T;
          }
          case "ja": {
            const { skJa } = await import("converters/sk/sk-ja");
            return (await skJa(text)) as T;
          }
          case "ko": {
            const { skKo } = await import("converters/sk/sk-ko");
            return (await skKo(text)) as T;
          }
          case "hi": {
            const { skHi } = await import("converters/sk/sk-hi");
            return (await skHi(text)) as T;
          }
          case "bn": {
            const { skBn } = await import("converters/sk/sk-bn");
            return (await skBn(text)) as T;
          }
          case "ur": {
            const { skUr } = await import("converters/sk/sk-ur");
            return (await skUr(text)) as T;
          }
          case "fa": {
            const { skFa } = await import("converters/sk/sk-fa");
            return (await skFa(text)) as T;
          }
          case "ar": {
            const { skAr } = await import("converters/sk/sk-ar");
            return (await skAr(text)) as T;
          }
          case "he": {
            const { skHe } = await import("converters/sk/sk-he");
            return (await skHe(text)) as T;
          }
          case "ka": {
            const { skKa } = await import("converters/sk/sk-ka");
            return (await skKa(text)) as T;
          }
          case "hy": {
            const { skHy } = await import("converters/sk/sk-hy");
            return (await skHy(text)) as T;
          }
          case "el": {
            const { skEl } = await import("converters/sk/sk-el");
            return (await skEl(text)) as T;
          }
          case "ru": {
            const { skRu } = await import("converters/sk/sk-ru");
            return (await skRu(text)) as T;
          }
          case "uk": {
            const { skUk } = await import("converters/sk/sk-uk");
            return (await skUk(text)) as T;
          }
          case "bg": {
            const { skBg } = await import("converters/sk/sk-bg");
            return (await skBg(text)) as T;
          }
          case "mk": {
            const { skMk } = await import("converters/sk/sk-mk");
            return (await skMk(text)) as T;
          }
          case "az": {
            const { skAz } = await import("converters/sk/sk-az");
            return (await skAz(text)) as T;
          }
          case "bs": {
            const { skBs } = await import("converters/sk/sk-bs");
            return (await skBs(text)) as T;
          }
          case "ca": {
            const { skCa } = await import("converters/sk/sk-ca");
            return (await skCa(text)) as T;
          }
          case "cs": {
            const { skCs } = await import("converters/sk/sk-cs");
            return (await skCs(text)) as T;
          }
          case "da": {
            const { skDa } = await import("converters/sk/sk-da");
            return (await skDa(text)) as T;
          }
          case "de": {
            const { skDe } = await import("converters/sk/sk-de");
            return (await skDe(text)) as T;
          }
          case "en": {
            const { skEn } = await import("converters/sk/sk-en");
            return (await skEn(text)) as T;
          }
          case "es": {
            const { skEs } = await import("converters/sk/sk-es");
            return (await skEs(text)) as T;
          }
          case "et": {
            const { skEt } = await import("converters/sk/sk-et");
            return (await skEt(text)) as T;
          }
          case "fi": {
            const { skFi } = await import("converters/sk/sk-fi");
            return (await skFi(text)) as T;
          }
          case "fr": {
            const { skFr } = await import("converters/sk/sk-fr");
            return (await skFr(text)) as T;
          }
          case "hr": {
            const { skHr } = await import("converters/sk/sk-hr");
            return (await skHr(text)) as T;
          }
          case "hu": {
            const { skHu } = await import("converters/sk/sk-hu");
            return (await skHu(text)) as T;
          }
          case "id": {
            const { skId } = await import("converters/sk/sk-id");
            return (await skId(text)) as T;
          }
          case "is": {
            const { skIs } = await import("converters/sk/sk-is");
            return (await skIs(text)) as T;
          }
          case "it": {
            const { skIt } = await import("converters/sk/sk-it");
            return (await skIt(text)) as T;
          }
          case "kk": {
            const { skKk } = await import("converters/sk/sk-kk");
            return (await skKk(text)) as T;
          }
          case "lb": {
            const { skLb } = await import("converters/sk/sk-lb");
            return (await skLb(text)) as T;
          }
          case "lt": {
            const { skLt } = await import("converters/sk/sk-lt");
            return (await skLt(text)) as T;
          }
          case "lv": {
            const { skLv } = await import("converters/sk/sk-lv");
            return (await skLv(text)) as T;
          }
          case "ms": {
            const { skMs } = await import("converters/sk/sk-ms");
            return (await skMs(text)) as T;
          }
          case "mt": {
            const { skMt } = await import("converters/sk/sk-mt");
            return (await skMt(text)) as T;
          }
          case "nl": {
            const { skNl } = await import("converters/sk/sk-nl");
            return (await skNl(text)) as T;
          }
          case "no": {
            const { skNo } = await import("converters/sk/sk-no");
            return (await skNo(text)) as T;
          }
          case "pl": {
            const { skPl } = await import("converters/sk/sk-pl");
            return (await skPl(text)) as T;
          }
          case "pt": {
            const { skPt } = await import("converters/sk/sk-pt");
            return (await skPt(text)) as T;
          }
          case "ro": {
            const { skRo } = await import("converters/sk/sk-ro");
            return (await skRo(text)) as T;
          }
          case "sl": {
            const { skSl } = await import("converters/sk/sk-sl");
            return (await skSl(text)) as T;
          }
          case "sq": {
            const { skSq } = await import("converters/sk/sk-sq");
            return (await skSq(text)) as T;
          }
          case "sr": {
            const { skSr } = await import("converters/sk/sk-sr");
            return (await skSr(text)) as T;
          }
          case "sv": {
            const { skSv } = await import("converters/sk/sk-sv");
            return (await skSv(text)) as T;
          }
          case "tr": {
            const { skTr } = await import("converters/sk/sk-tr");
            return (await skTr(text)) as T;
          }
          case "vi": {
            const { skVi } = await import("converters/sk/sk-vi");
            return (await skVi(text)) as T;
          }
        }
        break;
      case "sl":
        switch (to) {
          case "zh": {
            const { slZh } = await import("converters/sl/sl-zh");
            return (await slZh(text)) as T;
          }
          case "ja": {
            const { slJa } = await import("converters/sl/sl-ja");
            return (await slJa(text)) as T;
          }
          case "ko": {
            const { slKo } = await import("converters/sl/sl-ko");
            return (await slKo(text)) as T;
          }
          case "hi": {
            const { slHi } = await import("converters/sl/sl-hi");
            return (await slHi(text)) as T;
          }
          case "bn": {
            const { slBn } = await import("converters/sl/sl-bn");
            return (await slBn(text)) as T;
          }
          case "ur": {
            const { slUr } = await import("converters/sl/sl-ur");
            return (await slUr(text)) as T;
          }
          case "fa": {
            const { slFa } = await import("converters/sl/sl-fa");
            return (await slFa(text)) as T;
          }
          case "ar": {
            const { slAr } = await import("converters/sl/sl-ar");
            return (await slAr(text)) as T;
          }
          case "he": {
            const { slHe } = await import("converters/sl/sl-he");
            return (await slHe(text)) as T;
          }
          case "ka": {
            const { slKa } = await import("converters/sl/sl-ka");
            return (await slKa(text)) as T;
          }
          case "hy": {
            const { slHy } = await import("converters/sl/sl-hy");
            return (await slHy(text)) as T;
          }
          case "el": {
            const { slEl } = await import("converters/sl/sl-el");
            return (await slEl(text)) as T;
          }
          case "ru": {
            const { slRu } = await import("converters/sl/sl-ru");
            return (await slRu(text)) as T;
          }
          case "uk": {
            const { slUk } = await import("converters/sl/sl-uk");
            return (await slUk(text)) as T;
          }
          case "bg": {
            const { slBg } = await import("converters/sl/sl-bg");
            return (await slBg(text)) as T;
          }
          case "mk": {
            const { slMk } = await import("converters/sl/sl-mk");
            return (await slMk(text)) as T;
          }
          case "az": {
            const { slAz } = await import("converters/sl/sl-az");
            return (await slAz(text)) as T;
          }
          case "bs": {
            const { slBs } = await import("converters/sl/sl-bs");
            return (await slBs(text)) as T;
          }
          case "ca": {
            const { slCa } = await import("converters/sl/sl-ca");
            return (await slCa(text)) as T;
          }
          case "cs": {
            const { slCs } = await import("converters/sl/sl-cs");
            return (await slCs(text)) as T;
          }
          case "da": {
            const { slDa } = await import("converters/sl/sl-da");
            return (await slDa(text)) as T;
          }
          case "de": {
            const { slDe } = await import("converters/sl/sl-de");
            return (await slDe(text)) as T;
          }
          case "en": {
            const { slEn } = await import("converters/sl/sl-en");
            return (await slEn(text)) as T;
          }
          case "es": {
            const { slEs } = await import("converters/sl/sl-es");
            return (await slEs(text)) as T;
          }
          case "et": {
            const { slEt } = await import("converters/sl/sl-et");
            return (await slEt(text)) as T;
          }
          case "fi": {
            const { slFi } = await import("converters/sl/sl-fi");
            return (await slFi(text)) as T;
          }
          case "fr": {
            const { slFr } = await import("converters/sl/sl-fr");
            return (await slFr(text)) as T;
          }
          case "hr": {
            const { slHr } = await import("converters/sl/sl-hr");
            return (await slHr(text)) as T;
          }
          case "hu": {
            const { slHu } = await import("converters/sl/sl-hu");
            return (await slHu(text)) as T;
          }
          case "id": {
            const { slId } = await import("converters/sl/sl-id");
            return (await slId(text)) as T;
          }
          case "is": {
            const { slIs } = await import("converters/sl/sl-is");
            return (await slIs(text)) as T;
          }
          case "it": {
            const { slIt } = await import("converters/sl/sl-it");
            return (await slIt(text)) as T;
          }
          case "kk": {
            const { slKk } = await import("converters/sl/sl-kk");
            return (await slKk(text)) as T;
          }
          case "lb": {
            const { slLb } = await import("converters/sl/sl-lb");
            return (await slLb(text)) as T;
          }
          case "lt": {
            const { slLt } = await import("converters/sl/sl-lt");
            return (await slLt(text)) as T;
          }
          case "lv": {
            const { slLv } = await import("converters/sl/sl-lv");
            return (await slLv(text)) as T;
          }
          case "ms": {
            const { slMs } = await import("converters/sl/sl-ms");
            return (await slMs(text)) as T;
          }
          case "mt": {
            const { slMt } = await import("converters/sl/sl-mt");
            return (await slMt(text)) as T;
          }
          case "nl": {
            const { slNl } = await import("converters/sl/sl-nl");
            return (await slNl(text)) as T;
          }
          case "no": {
            const { slNo } = await import("converters/sl/sl-no");
            return (await slNo(text)) as T;
          }
          case "pl": {
            const { slPl } = await import("converters/sl/sl-pl");
            return (await slPl(text)) as T;
          }
          case "pt": {
            const { slPt } = await import("converters/sl/sl-pt");
            return (await slPt(text)) as T;
          }
          case "ro": {
            const { slRo } = await import("converters/sl/sl-ro");
            return (await slRo(text)) as T;
          }
          case "sk": {
            const { slSk } = await import("converters/sl/sl-sk");
            return (await slSk(text)) as T;
          }
          case "sq": {
            const { slSq } = await import("converters/sl/sl-sq");
            return (await slSq(text)) as T;
          }
          case "sr": {
            const { slSr } = await import("converters/sl/sl-sr");
            return (await slSr(text)) as T;
          }
          case "sv": {
            const { slSv } = await import("converters/sl/sl-sv");
            return (await slSv(text)) as T;
          }
          case "tr": {
            const { slTr } = await import("converters/sl/sl-tr");
            return (await slTr(text)) as T;
          }
          case "vi": {
            const { slVi } = await import("converters/sl/sl-vi");
            return (await slVi(text)) as T;
          }
        }
        break;
      case "sq":
        switch (to) {
          case "zh": {
            const { sqZh } = await import("converters/sq/sq-zh");
            return (await sqZh(text)) as T;
          }
          case "ja": {
            const { sqJa } = await import("converters/sq/sq-ja");
            return (await sqJa(text)) as T;
          }
          case "ko": {
            const { sqKo } = await import("converters/sq/sq-ko");
            return (await sqKo(text)) as T;
          }
          case "hi": {
            const { sqHi } = await import("converters/sq/sq-hi");
            return (await sqHi(text)) as T;
          }
          case "bn": {
            const { sqBn } = await import("converters/sq/sq-bn");
            return (await sqBn(text)) as T;
          }
          case "ur": {
            const { sqUr } = await import("converters/sq/sq-ur");
            return (await sqUr(text)) as T;
          }
          case "fa": {
            const { sqFa } = await import("converters/sq/sq-fa");
            return (await sqFa(text)) as T;
          }
          case "ar": {
            const { sqAr } = await import("converters/sq/sq-ar");
            return (await sqAr(text)) as T;
          }
          case "he": {
            const { sqHe } = await import("converters/sq/sq-he");
            return (await sqHe(text)) as T;
          }
          case "ka": {
            const { sqKa } = await import("converters/sq/sq-ka");
            return (await sqKa(text)) as T;
          }
          case "hy": {
            const { sqHy } = await import("converters/sq/sq-hy");
            return (await sqHy(text)) as T;
          }
          case "el": {
            const { sqEl } = await import("converters/sq/sq-el");
            return (await sqEl(text)) as T;
          }
          case "ru": {
            const { sqRu } = await import("converters/sq/sq-ru");
            return (await sqRu(text)) as T;
          }
          case "uk": {
            const { sqUk } = await import("converters/sq/sq-uk");
            return (await sqUk(text)) as T;
          }
          case "bg": {
            const { sqBg } = await import("converters/sq/sq-bg");
            return (await sqBg(text)) as T;
          }
          case "mk": {
            const { sqMk } = await import("converters/sq/sq-mk");
            return (await sqMk(text)) as T;
          }
          case "az": {
            const { sqAz } = await import("converters/sq/sq-az");
            return (await sqAz(text)) as T;
          }
          case "bs": {
            const { sqBs } = await import("converters/sq/sq-bs");
            return (await sqBs(text)) as T;
          }
          case "ca": {
            const { sqCa } = await import("converters/sq/sq-ca");
            return (await sqCa(text)) as T;
          }
          case "cs": {
            const { sqCs } = await import("converters/sq/sq-cs");
            return (await sqCs(text)) as T;
          }
          case "da": {
            const { sqDa } = await import("converters/sq/sq-da");
            return (await sqDa(text)) as T;
          }
          case "de": {
            const { sqDe } = await import("converters/sq/sq-de");
            return (await sqDe(text)) as T;
          }
          case "en": {
            const { sqEn } = await import("converters/sq/sq-en");
            return (await sqEn(text)) as T;
          }
          case "es": {
            const { sqEs } = await import("converters/sq/sq-es");
            return (await sqEs(text)) as T;
          }
          case "et": {
            const { sqEt } = await import("converters/sq/sq-et");
            return (await sqEt(text)) as T;
          }
          case "fi": {
            const { sqFi } = await import("converters/sq/sq-fi");
            return (await sqFi(text)) as T;
          }
          case "fr": {
            const { sqFr } = await import("converters/sq/sq-fr");
            return (await sqFr(text)) as T;
          }
          case "hr": {
            const { sqHr } = await import("converters/sq/sq-hr");
            return (await sqHr(text)) as T;
          }
          case "hu": {
            const { sqHu } = await import("converters/sq/sq-hu");
            return (await sqHu(text)) as T;
          }
          case "id": {
            const { sqId } = await import("converters/sq/sq-id");
            return (await sqId(text)) as T;
          }
          case "is": {
            const { sqIs } = await import("converters/sq/sq-is");
            return (await sqIs(text)) as T;
          }
          case "it": {
            const { sqIt } = await import("converters/sq/sq-it");
            return (await sqIt(text)) as T;
          }
          case "kk": {
            const { sqKk } = await import("converters/sq/sq-kk");
            return (await sqKk(text)) as T;
          }
          case "lb": {
            const { sqLb } = await import("converters/sq/sq-lb");
            return (await sqLb(text)) as T;
          }
          case "lt": {
            const { sqLt } = await import("converters/sq/sq-lt");
            return (await sqLt(text)) as T;
          }
          case "lv": {
            const { sqLv } = await import("converters/sq/sq-lv");
            return (await sqLv(text)) as T;
          }
          case "ms": {
            const { sqMs } = await import("converters/sq/sq-ms");
            return (await sqMs(text)) as T;
          }
          case "mt": {
            const { sqMt } = await import("converters/sq/sq-mt");
            return (await sqMt(text)) as T;
          }
          case "nl": {
            const { sqNl } = await import("converters/sq/sq-nl");
            return (await sqNl(text)) as T;
          }
          case "no": {
            const { sqNo } = await import("converters/sq/sq-no");
            return (await sqNo(text)) as T;
          }
          case "pl": {
            const { sqPl } = await import("converters/sq/sq-pl");
            return (await sqPl(text)) as T;
          }
          case "pt": {
            const { sqPt } = await import("converters/sq/sq-pt");
            return (await sqPt(text)) as T;
          }
          case "ro": {
            const { sqRo } = await import("converters/sq/sq-ro");
            return (await sqRo(text)) as T;
          }
          case "sk": {
            const { sqSk } = await import("converters/sq/sq-sk");
            return (await sqSk(text)) as T;
          }
          case "sl": {
            const { sqSl } = await import("converters/sq/sq-sl");
            return (await sqSl(text)) as T;
          }
          case "sr": {
            const { sqSr } = await import("converters/sq/sq-sr");
            return (await sqSr(text)) as T;
          }
          case "sv": {
            const { sqSv } = await import("converters/sq/sq-sv");
            return (await sqSv(text)) as T;
          }
          case "tr": {
            const { sqTr } = await import("converters/sq/sq-tr");
            return (await sqTr(text)) as T;
          }
          case "vi": {
            const { sqVi } = await import("converters/sq/sq-vi");
            return (await sqVi(text)) as T;
          }
        }
        break;
      case "sr":
        switch (to) {
          case "zh": {
            const { srZh } = await import("converters/sr/sr-zh");
            return (await srZh(text)) as T;
          }
          case "ja": {
            const { srJa } = await import("converters/sr/sr-ja");
            return (await srJa(text)) as T;
          }
          case "ko": {
            const { srKo } = await import("converters/sr/sr-ko");
            return (await srKo(text)) as T;
          }
          case "hi": {
            const { srHi } = await import("converters/sr/sr-hi");
            return (await srHi(text)) as T;
          }
          case "bn": {
            const { srBn } = await import("converters/sr/sr-bn");
            return (await srBn(text)) as T;
          }
          case "ur": {
            const { srUr } = await import("converters/sr/sr-ur");
            return (await srUr(text)) as T;
          }
          case "fa": {
            const { srFa } = await import("converters/sr/sr-fa");
            return (await srFa(text)) as T;
          }
          case "ar": {
            const { srAr } = await import("converters/sr/sr-ar");
            return (await srAr(text)) as T;
          }
          case "he": {
            const { srHe } = await import("converters/sr/sr-he");
            return (await srHe(text)) as T;
          }
          case "ka": {
            const { srKa } = await import("converters/sr/sr-ka");
            return (await srKa(text)) as T;
          }
          case "hy": {
            const { srHy } = await import("converters/sr/sr-hy");
            return (await srHy(text)) as T;
          }
          case "el": {
            const { srEl } = await import("converters/sr/sr-el");
            return (await srEl(text)) as T;
          }
          case "ru": {
            const { srRu } = await import("converters/sr/sr-ru");
            return (await srRu(text)) as T;
          }
          case "uk": {
            const { srUk } = await import("converters/sr/sr-uk");
            return (await srUk(text)) as T;
          }
          case "bg": {
            const { srBg } = await import("converters/sr/sr-bg");
            return (await srBg(text)) as T;
          }
          case "mk": {
            const { srMk } = await import("converters/sr/sr-mk");
            return (await srMk(text)) as T;
          }
          case "az": {
            const { srAz } = await import("converters/sr/sr-az");
            return (await srAz(text)) as T;
          }
          case "bs": {
            const { srBs } = await import("converters/sr/sr-bs");
            return (await srBs(text)) as T;
          }
          case "ca": {
            const { srCa } = await import("converters/sr/sr-ca");
            return (await srCa(text)) as T;
          }
          case "cs": {
            const { srCs } = await import("converters/sr/sr-cs");
            return (await srCs(text)) as T;
          }
          case "da": {
            const { srDa } = await import("converters/sr/sr-da");
            return (await srDa(text)) as T;
          }
          case "de": {
            const { srDe } = await import("converters/sr/sr-de");
            return (await srDe(text)) as T;
          }
          case "en": {
            const { srEn } = await import("converters/sr/sr-en");
            return (await srEn(text)) as T;
          }
          case "es": {
            const { srEs } = await import("converters/sr/sr-es");
            return (await srEs(text)) as T;
          }
          case "et": {
            const { srEt } = await import("converters/sr/sr-et");
            return (await srEt(text)) as T;
          }
          case "fi": {
            const { srFi } = await import("converters/sr/sr-fi");
            return (await srFi(text)) as T;
          }
          case "fr": {
            const { srFr } = await import("converters/sr/sr-fr");
            return (await srFr(text)) as T;
          }
          case "hr": {
            const { srHr } = await import("converters/sr/sr-hr");
            return (await srHr(text)) as T;
          }
          case "hu": {
            const { srHu } = await import("converters/sr/sr-hu");
            return (await srHu(text)) as T;
          }
          case "id": {
            const { srId } = await import("converters/sr/sr-id");
            return (await srId(text)) as T;
          }
          case "is": {
            const { srIs } = await import("converters/sr/sr-is");
            return (await srIs(text)) as T;
          }
          case "it": {
            const { srIt } = await import("converters/sr/sr-it");
            return (await srIt(text)) as T;
          }
          case "kk": {
            const { srKk } = await import("converters/sr/sr-kk");
            return (await srKk(text)) as T;
          }
          case "lb": {
            const { srLb } = await import("converters/sr/sr-lb");
            return (await srLb(text)) as T;
          }
          case "lt": {
            const { srLt } = await import("converters/sr/sr-lt");
            return (await srLt(text)) as T;
          }
          case "lv": {
            const { srLv } = await import("converters/sr/sr-lv");
            return (await srLv(text)) as T;
          }
          case "ms": {
            const { srMs } = await import("converters/sr/sr-ms");
            return (await srMs(text)) as T;
          }
          case "mt": {
            const { srMt } = await import("converters/sr/sr-mt");
            return (await srMt(text)) as T;
          }
          case "nl": {
            const { srNl } = await import("converters/sr/sr-nl");
            return (await srNl(text)) as T;
          }
          case "no": {
            const { srNo } = await import("converters/sr/sr-no");
            return (await srNo(text)) as T;
          }
          case "pl": {
            const { srPl } = await import("converters/sr/sr-pl");
            return (await srPl(text)) as T;
          }
          case "pt": {
            const { srPt } = await import("converters/sr/sr-pt");
            return (await srPt(text)) as T;
          }
          case "ro": {
            const { srRo } = await import("converters/sr/sr-ro");
            return (await srRo(text)) as T;
          }
          case "sk": {
            const { srSk } = await import("converters/sr/sr-sk");
            return (await srSk(text)) as T;
          }
          case "sl": {
            const { srSl } = await import("converters/sr/sr-sl");
            return (await srSl(text)) as T;
          }
          case "sq": {
            const { srSq } = await import("converters/sr/sr-sq");
            return (await srSq(text)) as T;
          }
          case "sv": {
            const { srSv } = await import("converters/sr/sr-sv");
            return (await srSv(text)) as T;
          }
          case "tr": {
            const { srTr } = await import("converters/sr/sr-tr");
            return (await srTr(text)) as T;
          }
          case "vi": {
            const { srVi } = await import("converters/sr/sr-vi");
            return (await srVi(text)) as T;
          }
        }
        break;
      case "sv":
        switch (to) {
          case "zh": {
            const { svZh } = await import("converters/sv/sv-zh");
            return (await svZh(text)) as T;
          }
          case "ja": {
            const { svJa } = await import("converters/sv/sv-ja");
            return (await svJa(text)) as T;
          }
          case "ko": {
            const { svKo } = await import("converters/sv/sv-ko");
            return (await svKo(text)) as T;
          }
          case "hi": {
            const { svHi } = await import("converters/sv/sv-hi");
            return (await svHi(text)) as T;
          }
          case "bn": {
            const { svBn } = await import("converters/sv/sv-bn");
            return (await svBn(text)) as T;
          }
          case "ur": {
            const { svUr } = await import("converters/sv/sv-ur");
            return (await svUr(text)) as T;
          }
          case "fa": {
            const { svFa } = await import("converters/sv/sv-fa");
            return (await svFa(text)) as T;
          }
          case "ar": {
            const { svAr } = await import("converters/sv/sv-ar");
            return (await svAr(text)) as T;
          }
          case "he": {
            const { svHe } = await import("converters/sv/sv-he");
            return (await svHe(text)) as T;
          }
          case "ka": {
            const { svKa } = await import("converters/sv/sv-ka");
            return (await svKa(text)) as T;
          }
          case "hy": {
            const { svHy } = await import("converters/sv/sv-hy");
            return (await svHy(text)) as T;
          }
          case "el": {
            const { svEl } = await import("converters/sv/sv-el");
            return (await svEl(text)) as T;
          }
          case "ru": {
            const { svRu } = await import("converters/sv/sv-ru");
            return (await svRu(text)) as T;
          }
          case "uk": {
            const { svUk } = await import("converters/sv/sv-uk");
            return (await svUk(text)) as T;
          }
          case "bg": {
            const { svBg } = await import("converters/sv/sv-bg");
            return (await svBg(text)) as T;
          }
          case "mk": {
            const { svMk } = await import("converters/sv/sv-mk");
            return (await svMk(text)) as T;
          }
          case "az": {
            const { svAz } = await import("converters/sv/sv-az");
            return (await svAz(text)) as T;
          }
          case "bs": {
            const { svBs } = await import("converters/sv/sv-bs");
            return (await svBs(text)) as T;
          }
          case "ca": {
            const { svCa } = await import("converters/sv/sv-ca");
            return (await svCa(text)) as T;
          }
          case "cs": {
            const { svCs } = await import("converters/sv/sv-cs");
            return (await svCs(text)) as T;
          }
          case "da": {
            const { svDa } = await import("converters/sv/sv-da");
            return (await svDa(text)) as T;
          }
          case "de": {
            const { svDe } = await import("converters/sv/sv-de");
            return (await svDe(text)) as T;
          }
          case "en": {
            const { svEn } = await import("converters/sv/sv-en");
            return (await svEn(text)) as T;
          }
          case "es": {
            const { svEs } = await import("converters/sv/sv-es");
            return (await svEs(text)) as T;
          }
          case "et": {
            const { svEt } = await import("converters/sv/sv-et");
            return (await svEt(text)) as T;
          }
          case "fi": {
            const { svFi } = await import("converters/sv/sv-fi");
            return (await svFi(text)) as T;
          }
          case "fr": {
            const { svFr } = await import("converters/sv/sv-fr");
            return (await svFr(text)) as T;
          }
          case "hr": {
            const { svHr } = await import("converters/sv/sv-hr");
            return (await svHr(text)) as T;
          }
          case "hu": {
            const { svHu } = await import("converters/sv/sv-hu");
            return (await svHu(text)) as T;
          }
          case "id": {
            const { svId } = await import("converters/sv/sv-id");
            return (await svId(text)) as T;
          }
          case "is": {
            const { svIs } = await import("converters/sv/sv-is");
            return (await svIs(text)) as T;
          }
          case "it": {
            const { svIt } = await import("converters/sv/sv-it");
            return (await svIt(text)) as T;
          }
          case "kk": {
            const { svKk } = await import("converters/sv/sv-kk");
            return (await svKk(text)) as T;
          }
          case "lb": {
            const { svLb } = await import("converters/sv/sv-lb");
            return (await svLb(text)) as T;
          }
          case "lt": {
            const { svLt } = await import("converters/sv/sv-lt");
            return (await svLt(text)) as T;
          }
          case "lv": {
            const { svLv } = await import("converters/sv/sv-lv");
            return (await svLv(text)) as T;
          }
          case "ms": {
            const { svMs } = await import("converters/sv/sv-ms");
            return (await svMs(text)) as T;
          }
          case "mt": {
            const { svMt } = await import("converters/sv/sv-mt");
            return (await svMt(text)) as T;
          }
          case "nl": {
            const { svNl } = await import("converters/sv/sv-nl");
            return (await svNl(text)) as T;
          }
          case "no": {
            const { svNo } = await import("converters/sv/sv-no");
            return (await svNo(text)) as T;
          }
          case "pl": {
            const { svPl } = await import("converters/sv/sv-pl");
            return (await svPl(text)) as T;
          }
          case "pt": {
            const { svPt } = await import("converters/sv/sv-pt");
            return (await svPt(text)) as T;
          }
          case "ro": {
            const { svRo } = await import("converters/sv/sv-ro");
            return (await svRo(text)) as T;
          }
          case "sk": {
            const { svSk } = await import("converters/sv/sv-sk");
            return (await svSk(text)) as T;
          }
          case "sl": {
            const { svSl } = await import("converters/sv/sv-sl");
            return (await svSl(text)) as T;
          }
          case "sq": {
            const { svSq } = await import("converters/sv/sv-sq");
            return (await svSq(text)) as T;
          }
          case "sr": {
            const { svSr } = await import("converters/sv/sv-sr");
            return (await svSr(text)) as T;
          }
          case "tr": {
            const { svTr } = await import("converters/sv/sv-tr");
            return (await svTr(text)) as T;
          }
          case "vi": {
            const { svVi } = await import("converters/sv/sv-vi");
            return (await svVi(text)) as T;
          }
        }
        break;
      case "tr":
        switch (to) {
          case "zh": {
            const { trZh } = await import("converters/tr/tr-zh");
            return (await trZh(text)) as T;
          }
          case "ja": {
            const { trJa } = await import("converters/tr/tr-ja");
            return (await trJa(text)) as T;
          }
          case "ko": {
            const { trKo } = await import("converters/tr/tr-ko");
            return (await trKo(text)) as T;
          }
          case "hi": {
            const { trHi } = await import("converters/tr/tr-hi");
            return (await trHi(text)) as T;
          }
          case "bn": {
            const { trBn } = await import("converters/tr/tr-bn");
            return (await trBn(text)) as T;
          }
          case "ur": {
            const { trUr } = await import("converters/tr/tr-ur");
            return (await trUr(text)) as T;
          }
          case "fa": {
            const { trFa } = await import("converters/tr/tr-fa");
            return (await trFa(text)) as T;
          }
          case "ar": {
            const { trAr } = await import("converters/tr/tr-ar");
            return (await trAr(text)) as T;
          }
          case "he": {
            const { trHe } = await import("converters/tr/tr-he");
            return (await trHe(text)) as T;
          }
          case "ka": {
            const { trKa } = await import("converters/tr/tr-ka");
            return (await trKa(text)) as T;
          }
          case "hy": {
            const { trHy } = await import("converters/tr/tr-hy");
            return (await trHy(text)) as T;
          }
          case "el": {
            const { trEl } = await import("converters/tr/tr-el");
            return (await trEl(text)) as T;
          }
          case "ru": {
            const { trRu } = await import("converters/tr/tr-ru");
            return (await trRu(text)) as T;
          }
          case "uk": {
            const { trUk } = await import("converters/tr/tr-uk");
            return (await trUk(text)) as T;
          }
          case "bg": {
            const { trBg } = await import("converters/tr/tr-bg");
            return (await trBg(text)) as T;
          }
          case "mk": {
            const { trMk } = await import("converters/tr/tr-mk");
            return (await trMk(text)) as T;
          }
          case "az": {
            const { trAz } = await import("converters/tr/tr-az");
            return (await trAz(text)) as T;
          }
          case "bs": {
            const { trBs } = await import("converters/tr/tr-bs");
            return (await trBs(text)) as T;
          }
          case "ca": {
            const { trCa } = await import("converters/tr/tr-ca");
            return (await trCa(text)) as T;
          }
          case "cs": {
            const { trCs } = await import("converters/tr/tr-cs");
            return (await trCs(text)) as T;
          }
          case "da": {
            const { trDa } = await import("converters/tr/tr-da");
            return (await trDa(text)) as T;
          }
          case "de": {
            const { trDe } = await import("converters/tr/tr-de");
            return (await trDe(text)) as T;
          }
          case "en": {
            const { trEn } = await import("converters/tr/tr-en");
            return (await trEn(text)) as T;
          }
          case "es": {
            const { trEs } = await import("converters/tr/tr-es");
            return (await trEs(text)) as T;
          }
          case "et": {
            const { trEt } = await import("converters/tr/tr-et");
            return (await trEt(text)) as T;
          }
          case "fi": {
            const { trFi } = await import("converters/tr/tr-fi");
            return (await trFi(text)) as T;
          }
          case "fr": {
            const { trFr } = await import("converters/tr/tr-fr");
            return (await trFr(text)) as T;
          }
          case "hr": {
            const { trHr } = await import("converters/tr/tr-hr");
            return (await trHr(text)) as T;
          }
          case "hu": {
            const { trHu } = await import("converters/tr/tr-hu");
            return (await trHu(text)) as T;
          }
          case "id": {
            const { trId } = await import("converters/tr/tr-id");
            return (await trId(text)) as T;
          }
          case "is": {
            const { trIs } = await import("converters/tr/tr-is");
            return (await trIs(text)) as T;
          }
          case "it": {
            const { trIt } = await import("converters/tr/tr-it");
            return (await trIt(text)) as T;
          }
          case "kk": {
            const { trKk } = await import("converters/tr/tr-kk");
            return (await trKk(text)) as T;
          }
          case "lb": {
            const { trLb } = await import("converters/tr/tr-lb");
            return (await trLb(text)) as T;
          }
          case "lt": {
            const { trLt } = await import("converters/tr/tr-lt");
            return (await trLt(text)) as T;
          }
          case "lv": {
            const { trLv } = await import("converters/tr/tr-lv");
            return (await trLv(text)) as T;
          }
          case "ms": {
            const { trMs } = await import("converters/tr/tr-ms");
            return (await trMs(text)) as T;
          }
          case "mt": {
            const { trMt } = await import("converters/tr/tr-mt");
            return (await trMt(text)) as T;
          }
          case "nl": {
            const { trNl } = await import("converters/tr/tr-nl");
            return (await trNl(text)) as T;
          }
          case "no": {
            const { trNo } = await import("converters/tr/tr-no");
            return (await trNo(text)) as T;
          }
          case "pl": {
            const { trPl } = await import("converters/tr/tr-pl");
            return (await trPl(text)) as T;
          }
          case "pt": {
            const { trPt } = await import("converters/tr/tr-pt");
            return (await trPt(text)) as T;
          }
          case "ro": {
            const { trRo } = await import("converters/tr/tr-ro");
            return (await trRo(text)) as T;
          }
          case "sk": {
            const { trSk } = await import("converters/tr/tr-sk");
            return (await trSk(text)) as T;
          }
          case "sl": {
            const { trSl } = await import("converters/tr/tr-sl");
            return (await trSl(text)) as T;
          }
          case "sq": {
            const { trSq } = await import("converters/tr/tr-sq");
            return (await trSq(text)) as T;
          }
          case "sr": {
            const { trSr } = await import("converters/tr/tr-sr");
            return (await trSr(text)) as T;
          }
          case "sv": {
            const { trSv } = await import("converters/tr/tr-sv");
            return (await trSv(text)) as T;
          }
          case "vi": {
            const { trVi } = await import("converters/tr/tr-vi");
            return (await trVi(text)) as T;
          }
        }
        break;
      case "vi":
        switch (to) {
          case "zh": {
            const { viZh } = await import("converters/vi/vi-zh");
            return (await viZh(text)) as T;
          }
          case "ja": {
            const { viJa } = await import("converters/vi/vi-ja");
            return (await viJa(text)) as T;
          }
          case "ko": {
            const { viKo } = await import("converters/vi/vi-ko");
            return (await viKo(text)) as T;
          }
          case "hi": {
            const { viHi } = await import("converters/vi/vi-hi");
            return (await viHi(text)) as T;
          }
          case "bn": {
            const { viBn } = await import("converters/vi/vi-bn");
            return (await viBn(text)) as T;
          }
          case "ur": {
            const { viUr } = await import("converters/vi/vi-ur");
            return (await viUr(text)) as T;
          }
          case "fa": {
            const { viFa } = await import("converters/vi/vi-fa");
            return (await viFa(text)) as T;
          }
          case "ar": {
            const { viAr } = await import("converters/vi/vi-ar");
            return (await viAr(text)) as T;
          }
          case "he": {
            const { viHe } = await import("converters/vi/vi-he");
            return (await viHe(text)) as T;
          }
          case "ka": {
            const { viKa } = await import("converters/vi/vi-ka");
            return (await viKa(text)) as T;
          }
          case "hy": {
            const { viHy } = await import("converters/vi/vi-hy");
            return (await viHy(text)) as T;
          }
          case "el": {
            const { viEl } = await import("converters/vi/vi-el");
            return (await viEl(text)) as T;
          }
          case "ru": {
            const { viRu } = await import("converters/vi/vi-ru");
            return (await viRu(text)) as T;
          }
          case "uk": {
            const { viUk } = await import("converters/vi/vi-uk");
            return (await viUk(text)) as T;
          }
          case "bg": {
            const { viBg } = await import("converters/vi/vi-bg");
            return (await viBg(text)) as T;
          }
          case "mk": {
            const { viMk } = await import("converters/vi/vi-mk");
            return (await viMk(text)) as T;
          }
          case "az": {
            const { viAz } = await import("converters/vi/vi-az");
            return (await viAz(text)) as T;
          }
          case "bs": {
            const { viBs } = await import("converters/vi/vi-bs");
            return (await viBs(text)) as T;
          }
          case "ca": {
            const { viCa } = await import("converters/vi/vi-ca");
            return (await viCa(text)) as T;
          }
          case "cs": {
            const { viCs } = await import("converters/vi/vi-cs");
            return (await viCs(text)) as T;
          }
          case "da": {
            const { viDa } = await import("converters/vi/vi-da");
            return (await viDa(text)) as T;
          }
          case "de": {
            const { viDe } = await import("converters/vi/vi-de");
            return (await viDe(text)) as T;
          }
          case "en": {
            const { viEn } = await import("converters/vi/vi-en");
            return (await viEn(text)) as T;
          }
          case "es": {
            const { viEs } = await import("converters/vi/vi-es");
            return (await viEs(text)) as T;
          }
          case "et": {
            const { viEt } = await import("converters/vi/vi-et");
            return (await viEt(text)) as T;
          }
          case "fi": {
            const { viFi } = await import("converters/vi/vi-fi");
            return (await viFi(text)) as T;
          }
          case "fr": {
            const { viFr } = await import("converters/vi/vi-fr");
            return (await viFr(text)) as T;
          }
          case "hr": {
            const { viHr } = await import("converters/vi/vi-hr");
            return (await viHr(text)) as T;
          }
          case "hu": {
            const { viHu } = await import("converters/vi/vi-hu");
            return (await viHu(text)) as T;
          }
          case "id": {
            const { viId } = await import("converters/vi/vi-id");
            return (await viId(text)) as T;
          }
          case "is": {
            const { viIs } = await import("converters/vi/vi-is");
            return (await viIs(text)) as T;
          }
          case "it": {
            const { viIt } = await import("converters/vi/vi-it");
            return (await viIt(text)) as T;
          }
          case "kk": {
            const { viKk } = await import("converters/vi/vi-kk");
            return (await viKk(text)) as T;
          }
          case "lb": {
            const { viLb } = await import("converters/vi/vi-lb");
            return (await viLb(text)) as T;
          }
          case "lt": {
            const { viLt } = await import("converters/vi/vi-lt");
            return (await viLt(text)) as T;
          }
          case "lv": {
            const { viLv } = await import("converters/vi/vi-lv");
            return (await viLv(text)) as T;
          }
          case "ms": {
            const { viMs } = await import("converters/vi/vi-ms");
            return (await viMs(text)) as T;
          }
          case "mt": {
            const { viMt } = await import("converters/vi/vi-mt");
            return (await viMt(text)) as T;
          }
          case "nl": {
            const { viNl } = await import("converters/vi/vi-nl");
            return (await viNl(text)) as T;
          }
          case "no": {
            const { viNo } = await import("converters/vi/vi-no");
            return (await viNo(text)) as T;
          }
          case "pl": {
            const { viPl } = await import("converters/vi/vi-pl");
            return (await viPl(text)) as T;
          }
          case "pt": {
            const { viPt } = await import("converters/vi/vi-pt");
            return (await viPt(text)) as T;
          }
          case "ro": {
            const { viRo } = await import("converters/vi/vi-ro");
            return (await viRo(text)) as T;
          }
          case "sk": {
            const { viSk } = await import("converters/vi/vi-sk");
            return (await viSk(text)) as T;
          }
          case "sl": {
            const { viSl } = await import("converters/vi/vi-sl");
            return (await viSl(text)) as T;
          }
          case "sq": {
            const { viSq } = await import("converters/vi/vi-sq");
            return (await viSq(text)) as T;
          }
          case "sr": {
            const { viSr } = await import("converters/vi/vi-sr");
            return (await viSr(text)) as T;
          }
          case "sv": {
            const { viSv } = await import("converters/vi/vi-sv");
            return (await viSv(text)) as T;
          }
          case "tr": {
            const { viTr } = await import("converters/vi/vi-tr");
            return (await viTr(text)) as T;
          }
        }
        break;
    }
  } catch (e: unknown) {
    throw new Error(typeof e === "string" ? e : JSON.stringify(e), { cause: e });
  }

  throw new Error(`Transliteration failed: the language pair is not supported: ${from} -> ${to}`);
};
