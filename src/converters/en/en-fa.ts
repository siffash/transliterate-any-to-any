import { Text } from "types";

export const enFa = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(ipaFaRules);

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
