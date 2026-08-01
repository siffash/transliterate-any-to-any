import { Text } from "types";

export const deUr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { deIpaRules } = await import("constants/de-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(deIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
