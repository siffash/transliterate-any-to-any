import { Text } from "types";

export const hrHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hrIpaRules } = await import("constants/hr-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(hrIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
