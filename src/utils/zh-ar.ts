import { Text } from "types/languages";

export const zhAr = async (text: Text) => {
  const { toIPA } = await import("phonemize/zh");
  const { RBT } = await import("icu-transliterator");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(ipaArRules);

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
