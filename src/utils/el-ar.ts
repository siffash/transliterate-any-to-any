import { Text } from "types/languages";

export const elAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { elIpaRules } = await import("constants/el-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(elIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
