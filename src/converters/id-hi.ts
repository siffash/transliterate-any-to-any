import { Text } from "types";

export const idHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { idIpaRules } = await import("constants/id-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(idIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
