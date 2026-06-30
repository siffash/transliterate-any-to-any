import { Text } from "types";

export const plAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { plIpaRules } = await import("constants/pl-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(plIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
