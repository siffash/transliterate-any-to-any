import { Text } from "types";

export const enJa = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaJaRules } = await import("data/ipa-ja.rules");

  const transliterator = RBT.fromRules(ipaJaRules);

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
