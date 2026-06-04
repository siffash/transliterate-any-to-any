import { Text } from "types/languages";

export const koAr = async (text: Text) => {
  const { phonemize } = await import("phonemize/all");
  const { RBT } = await import("icu-transliterator");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(ipaArRules);

  const convert = (text: string) => {
    const ipa = phonemize(text, { anyAscii: true });
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
