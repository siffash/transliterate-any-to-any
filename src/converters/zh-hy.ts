import { Text } from "types";

export const zhHy = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { RBT } = await import("icu-transliterator");
  const { ipaHyRules } = await import("constants/ipa-hy.rules");
  const { splitZh } = await import("helpers/splitZh");

  const transliterator = RBT.fromRules(ipaHyRules + "::Title;");

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
