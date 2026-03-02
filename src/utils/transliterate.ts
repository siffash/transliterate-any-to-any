import { cyrlLanguages, latnLanguages, supportedLanguages } from "constants/languages";
import { CyrlLanguage, Language, LatnLanguage } from "types/languages";
import { anyLatn } from "utils/any-latn";
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

export const transliterate = async (
  text: string,
  language: { input?: Language; output: Language },
  options: { silent?: boolean; latin_ASCII?: boolean } = { silent: false, latin_ASCII: false }, // TODO: latin_ASCII
): Promise<string | null> => {
  if (!text) {
    if (options.silent) {
      return null;
    } else {
      throw new Error("Text is empty");
    }
  }
  if (language.input && !supportedLanguages.includes(language.input)) {
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
      if (language.input) {
        // if input language is Cyrillic
        if (cyrlLanguages.includes(language.input as CyrlLanguage)) {
          // return cyrlLatn(language.input as CyrlLanguage, text); // TODO
        }

        // if input language is Japanese
        if (language.input === "ja") {
          return await jaLatn(text);
        }

        // if input language is Korean
        if (language.input === "ko") {
          return await koLatn(text);
        }

        // if input language is Chinese
        if (language.input === "zh") {
          return await zhLatn(text);
        }
      }

      // fallback to any
      return await anyLatn(text);
    }

    // if OUTPUT language is Bulgarian
    else if (language.output === "bg") {
      // if input language is Chinese
      if (language.input === "zh") {
        return await zhBg(text);
      }
    }

    // if OUTPUT language is Macedonian
    else if (language.output === "mk") {
      // if input language is Chinese
      if (language.input === "zh") {
        return await zhMk(text);
      }
    }

    // if OUTPUT language is Russian
    else if (language.output === "ru") {
      // if input language is Chinese
      if (language.input === "zh") {
        return await zhRu(text);
      }
    }

    // if OUTPUT language is Ukrainian
    else if (language.output === "uk") {
      // if input language is Chinese
      if (language.input === "zh") {
        return await zhUa(text);
      }
    }

    // if OUTPUT language is Hindi
    else if (language.output === "hi") {
      return await anyHi(text);
    }

    // if OUTPUT language is Japanese
    else if (language.output === "ja") {
      // if input language is Korean
      if (language.input === "ko") {
        return await koJa(text);
      }

      // if input language is Chinese
      if (language.input === "zh") {
        return await zhJa(text);
      }

      return await anyJa(text);
    }

    // if OUTPUT language is Korean
    else if (language.output === "ko") {
      // if input language is Japanese
      if (language.input === "ja") {
        return await jaKo(text);
      }

      // if input language is Chinese
      if (language.input === "zh") {
        return await zhKo(text);
      }

      // return anyKo(text); // TODO
    }

    // if OUTPUT language is Chinese
    else if (language.output === "zh") {
      // if input language is Korean
      if (language.input === "ko") {
        return await koZh(text);
      }

      // if input language is Japanese
      if (language.input === "ja") {
        return await jaZh(text);
      }

      // return anyZh(text); // TODO
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
