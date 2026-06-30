import { Text } from "types";

export const hrKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hrIpaRules } = await import("constants/hr-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(hrIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
