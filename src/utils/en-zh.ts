import { Text } from "types/languages";

export const enZh = async (text: Text) => {
  const { toIPA } = await import("phonemize");
  const { RBT } = await import("icu-transliterator");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(ipaZhRules);

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
