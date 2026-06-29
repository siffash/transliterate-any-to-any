import { Text } from "types";

export const koKk = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { RBT } = await import("icu-transliterator");
  const { ipaKkRules } = await import("constants/ipa-kk.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaKkRules + "::Title;");

  const convert = (text: string) => {
    const split = wordSplitter(text, "ko");
    const ipa = toIPA(split, { anyAscii: true });
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
