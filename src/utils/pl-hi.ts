import { Text } from "types/languages";

export const plHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { plIpaRules } = await import("constants/pl-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(plIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
