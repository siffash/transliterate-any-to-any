import { Text } from "types";

export const zhHe = async (text: Text) => {
  const { toIPA } = require("phonemize/zh");
  const { RBT } = await import("icu-transliterator");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(ipaHeRules);

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
