import { Text } from "types";

export const enFa = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaFaRules } = await import("data/ipa-fa.rules");

  const transliterator = RBT.fromRules(ipaFaRules);

  if (typeof text === "string") {
    const ipa = filterIpa(toIPA(text));
    return transliterator.transliterate(ipa);
  } else {
    return text.map(text => {
      const ipa = filterIpa(toIPA(text));
      return transliterator.transliterate(ipa);
    });
  }
};
