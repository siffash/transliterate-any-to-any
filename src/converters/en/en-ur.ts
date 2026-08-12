import { Text } from "types";

export const enUr = async (text: Text) => {
  const { toIPA } = require("phonemize");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaUrRules } = await import("data/ipa-ur.rules");

  const transliterator = RBT.fromRules(ipaUrRules);

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
