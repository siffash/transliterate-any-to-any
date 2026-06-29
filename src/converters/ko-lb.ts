import { Text } from "types";

export const koLb = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { RBT } = await import("icu-transliterator");
  const { ipaLbRules } = await import("constants/ipa-lb.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaLbRules + "::Title;");

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
