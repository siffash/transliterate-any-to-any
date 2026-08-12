import { Text } from "types";

export const enKo = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(ipaKoRules);

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
