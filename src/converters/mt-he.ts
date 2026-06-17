import { Text } from "types";

export const mtHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mtIpaRules } = await import("constants/mt-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(mtIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
