import { Text } from "types";

export const enHe = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { RBT } = await import("helpers/rbt-distributor");
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
