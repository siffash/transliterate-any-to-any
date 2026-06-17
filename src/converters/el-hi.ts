import { Text } from "types";

export const elHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { elIpaRules } = await import("constants/el-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(elIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
