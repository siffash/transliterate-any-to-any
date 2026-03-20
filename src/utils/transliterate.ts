import { cyrlLanguages, latnLanguages, supportedLanguages } from "constants/languages";
import { CyrlLanguage, Language, LatnLanguage, Text } from "types/languages";
import { jaLatn } from "utils/ja-latn";
import { anyJa } from "utils/any-ja";
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
import { zhUa } from "utils/zh-ua";
import { zhBg } from "utils/zh-bg";
import { zhMk } from "utils/zh-mk";
import { mkZh } from "utils/mk-zh";
import { bgZh } from "utils/bg-zh";
import { ruZh } from "utils/ru-zh";
import { ukZh } from "utils/uk-zh";
import { azZh } from "utils/az-zh";
import { bsZh } from "utils/bs-zh";

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
    // if OUTPUT language is Latin
    if (latnLanguages.includes(language.output as LatnLanguage)) {
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
      // if input language is Chinese
      if (language.input === "zh") {
        return (await zhBg(text)) as T;
      }
    }

    // if OUTPUT language is Macedonian
    else if (language.output === "mk") {
      // if input language is Chinese
      if (language.input === "zh") {
        return (await zhMk(text)) as T;
      }
    }

    // if OUTPUT language is Russian
    else if (language.output === "ru") {
      // if input language is Chinese
      if (language.input === "zh") {
        return (await zhRu(text)) as T;
      }
    }

    // if OUTPUT language is Ukrainian
    else if (language.output === "uk") {
      // if input language is Chinese
      if (language.input === "zh") {
        return (await zhUa(text)) as T;
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

      return (await anyJa(text)) as T;
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
    }

    // if OUTPUT language is Chinese
    else if (language.output === "zh") {
      // if input language is Azerbaijani
      if (language.input === "az") {
        return (await azZh(text)) as T;
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
    }
  } catch (e: unknown) {
    if (options.silent) {
      return null;
    } else {
      throw new Error(`Error: ${typeof e === "string" ? e : JSON.stringify(e)}`, { cause: e });
    }
  }

  if (options.silent) {
    return null;
  } else {
    throw new Error("Transliteration failed");
  }
};
