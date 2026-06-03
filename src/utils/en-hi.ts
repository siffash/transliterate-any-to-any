import { Text } from "types/languages";

export const enHi = async (text: Text) => {
  const { toIPA } = await import("phonemize");
  const { RBT } = await import("icu-transliterator");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(ipaHiRules);

  if (typeof text === "string") {
    const ipa = toIPA(text);
    return transliterator.transliterate(ipa);
  } else {
    return text.map(text => {
      const ipa = toIPA(text);
      return transliterator.transliterate(ipa);
    });
  }
};
