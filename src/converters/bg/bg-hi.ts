import { Text } from "types";

export const bgHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bgIpaRules } = await import("constants/bg-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(bgIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
