import { Text } from "types";

export const koRo = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { RBT } = await import("icu-transliterator");
  const { ipaRoRules } = await import("constants/ipa-ro.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaRoRules + "::Title;");

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
