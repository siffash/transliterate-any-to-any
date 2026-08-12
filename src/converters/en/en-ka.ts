import { Text } from "types";

export const enKa = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaKaRules } = await import("data/ipa-ka.rules");

  const transliterator = RBT.fromRules(ipaKaRules);

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
