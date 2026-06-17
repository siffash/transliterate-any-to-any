import { Text } from "types";

export const skHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { skIpaRules } = await import("constants/sk-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(skIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
