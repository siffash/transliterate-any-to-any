import { Text } from "types";

export const enKo = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaKoRules } = await import("data/ipa-ko.rules");

  const transliterator = RBT.fromRules(ipaKoRules);

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
