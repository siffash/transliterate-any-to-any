import { Text } from "types";

export const roHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { roIpaRules } = await import("constants/ro-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(roIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
