import { Text } from "types/languages";

export const fiHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { fiIpaRules } = await import("constants/fi-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(fiIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
