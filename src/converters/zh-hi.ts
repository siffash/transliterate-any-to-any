import { Text } from "types";

export const zhHi = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { RBT } = await import("icu-transliterator");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaHiRules);

  const convert = (text: string) => {
    const ipa = wordSplitter(text, "zh", text => toIPA(text, { separator: "" }));
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
