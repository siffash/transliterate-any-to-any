import { Text } from "types";

export const elJa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { elIpaRules } = await import("constants/el-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(elIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
