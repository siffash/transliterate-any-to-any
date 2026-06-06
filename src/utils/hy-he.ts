import { Text } from "types/languages";

export const hyHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hyIpaRules } = await import("constants/hy-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(hyIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
