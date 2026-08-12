import { Text } from "types";

export const enHi = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaHiRules } = await import("data/ipa-hi.rules");

  const transliterator = RBT.fromRules(ipaHiRules);

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
