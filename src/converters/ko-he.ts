import { Text } from "types";

export const koHe = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("icu-transliterator");
  const { ipaHeRules } = await import("constants/ipa-he.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaHeRules);

  if (typeof text === "string") {
    const split = wordSplitter(text, "ko");
    const ipa = toIPA(split, { anyAscii: true });
    return transliterator.transliterate(ipa);
  } else {
    return text.map(text => {
      const ipa = toIPA(text, { anyAscii: true });
      return transliterator.transliterate(ipa);
    });
  }
};
