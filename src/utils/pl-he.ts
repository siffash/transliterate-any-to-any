import { Text } from "types/languages";

export const plHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { plIpaRules } = await import("constants/pl-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(plIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
