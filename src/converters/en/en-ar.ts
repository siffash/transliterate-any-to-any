import { Text } from "types";

export const enAr = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaArRules } = await import("data/ipa-ar.rules");

  const transliterator = RBT.fromRules(ipaArRules);

  if (typeof text === "string") {
    const ipa = filterIpa(toIPA(text), text, "en");
    return transliterator.transliterate(ipa);
  } else {
    return text.map(text => {
      const ipa = filterIpa(toIPA(text), text, "en");
      return transliterator.transliterate(ipa);
    });
  }
};
