import { Text } from "types";

export const itKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { itIpaRules } = await import("constants/it-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(itIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
