import { Text } from "types/languages";

export const ltHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ltIpaRules } = await import("constants/lt-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(ltIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
