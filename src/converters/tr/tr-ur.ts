import { Text } from "types";

export const trUr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { trIpaRules } = await import("constants/tr-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(trIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
