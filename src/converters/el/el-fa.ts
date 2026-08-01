import { Text } from "types";

export const elFa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { elIpaRules } = await import("constants/el-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(elIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
