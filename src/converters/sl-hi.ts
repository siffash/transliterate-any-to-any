import { Text } from "types";

export const slHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { slIpaRules } = await import("constants/sl-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(slIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
