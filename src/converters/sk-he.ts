import { Text } from "types";

export const skHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { skIpaRules } = await import("constants/sk-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(skIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
