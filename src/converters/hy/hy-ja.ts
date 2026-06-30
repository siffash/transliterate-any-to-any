import { Text } from "types";

export const hyJa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hyIpaRules } = await import("constants/hy-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(hyIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
