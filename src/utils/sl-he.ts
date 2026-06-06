import { Text } from "types/languages";

export const slHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { slIpaRules } = await import("constants/sl-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(slIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
