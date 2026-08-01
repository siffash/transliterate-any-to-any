import { Text } from "types";

export const skUr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { skIpaRules } = await import("constants/sk-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(skIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
