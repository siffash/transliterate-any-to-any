import { Text } from "types";

export const enZh = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaZhRules } = await import("data/ipa-zh.rules");

  const transliterator = RBT.fromRules(ipaZhRules);

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
