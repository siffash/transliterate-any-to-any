import { Text } from "types/languages";

export const koHi = async (text: Text) => {
  const { phonemize } = await import("phonemize/all");
  const { RBT } = await import("icu-transliterator");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(ipaHiRules);

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
