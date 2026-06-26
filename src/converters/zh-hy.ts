import { Text } from "types";

export const zhHy = async (text: Text) => {
  const { toIPA } = require("phonemize/zh");
  const { RBT } = await import("icu-transliterator");
  const { ipaHyRules } = await import("constants/ipa-hy.rules");

  const transliterator = RBT.fromRules(ipaHyRules + "::Title;");

  const convert = (text: string) => {
    const ipa = toIPA(text);
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
