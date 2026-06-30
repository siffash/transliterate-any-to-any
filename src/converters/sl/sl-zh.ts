import { Text } from "types";

export const slZh = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { slIpaRules } = await import("constants/sl-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(slIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
