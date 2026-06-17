import { Text } from "types";

export const mtHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mtIpaRules } = await import("constants/mt-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(mtIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
