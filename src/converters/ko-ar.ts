import { Text } from "types";

export const koAr = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { RBT } = await import("icu-transliterator");
  const { ipaArRules } = await import("constants/ipa-ar.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaArRules);

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
