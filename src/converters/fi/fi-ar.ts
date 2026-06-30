import { Text } from "types";

export const fiAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { fiIpaRules } = await import("constants/fi-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(fiIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
