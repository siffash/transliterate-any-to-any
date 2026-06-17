import { Text } from "types";

export const fiKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { fiIpaRules } = await import("constants/fi-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(fiIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
