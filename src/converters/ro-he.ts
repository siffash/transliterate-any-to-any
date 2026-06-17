import { Text } from "types";

export const roHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { roIpaRules } = await import("constants/ro-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(roIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
