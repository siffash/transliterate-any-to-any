import { Text } from "types";

export const slJa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { slIpaRules } = await import("constants/sl-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(slIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
