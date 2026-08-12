import { Text } from "types";

export const enAr = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(ipaArRules);

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
