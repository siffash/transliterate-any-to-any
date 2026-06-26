import { Text } from "types";

export const zhKa = async (text: Text) => {
  const { toIPA } = require("phonemize/zh");
  const { RBT } = await import("icu-transliterator");
  const { ipaKaRules } = await import("constants/ipa-ka.rules");

  const transliterator = RBT.fromRules(ipaKaRules);

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
