import { Text } from "types";

export const enJa = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("icu-transliterator");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(ipaJaRules);

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
