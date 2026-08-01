import { Text } from "types";

export const lvUr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lvIpaRules } = await import("constants/lv-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(lvIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
