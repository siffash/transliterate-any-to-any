import { Text } from "types";

export const hyAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hyIpaRules } = await import("constants/hy-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(hyIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
