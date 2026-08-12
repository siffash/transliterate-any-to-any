import { Text } from "types";

export const enBn = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaBnRules } = await import("data/ipa-bn.rules");

  const transliterator = RBT.fromRules(ipaBnRules);

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
