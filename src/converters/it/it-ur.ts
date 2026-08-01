import { Text } from "types";

export const itUr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { itIpaRules } = await import("constants/it-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(itIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
