import { Text } from "types";

export const roKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { roIpaRules } = await import("constants/ro-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(roIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
