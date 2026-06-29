import { Text } from "types";

export const zhAr = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { RBT } = await import("icu-transliterator");
  const { ipaArRules } = await import("constants/ipa-ar.rules");
  const { splitZh } = await import("helpers/splitZh");

  const transliterator = RBT.fromRules(ipaArRules);

  const convert = (text: string) => {
    const ipa = splitZh(text, text => toIPA(text, { separator: "" }));
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
