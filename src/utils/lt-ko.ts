import { Text } from "types/languages";

export const ltKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ltIpaRules } = await import("constants/lt-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(ltIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
