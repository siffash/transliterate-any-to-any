import { Text } from "types";

export const zhHi = async (text: Text) => {
  const { toIPA } = await import("phonemize/zh");
  const { RBT } = await import("icu-transliterator");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(ipaHiRules);

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
