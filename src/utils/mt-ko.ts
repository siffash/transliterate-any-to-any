import { Text } from "types/languages";

export const mtKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mtIpaRules } = await import("constants/mt-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(mtIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
