import { Text } from "types";

export const itHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { itIpaRules } = await import("constants/it-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(itIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
