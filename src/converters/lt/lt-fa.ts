import { Text } from "types";

export const ltFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ltIpaRules } = await import("data/lt/lt-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");

  const transliterator = RBT.fromRules(ltIpaRules + ipaFaInitialARules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
