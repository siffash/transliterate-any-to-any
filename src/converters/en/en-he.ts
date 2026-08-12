import { Text } from "types";

export const enHe = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaHeRules } = await import("data/ipa-he.rules");

  const transliterator = RBT.fromRules(ipaHeRules);

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
