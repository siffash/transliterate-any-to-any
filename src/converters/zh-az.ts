import { Text } from "types";

export const zhAz = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { RBT } = await import("icu-transliterator");
  const { ipaAzRules } = await import("constants/ipa-az.rules");
  const { splitZh } = await import("helpers/splitZh");

  const transliterator = RBT.fromRules(ipaAzRules + "::Title;");

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
