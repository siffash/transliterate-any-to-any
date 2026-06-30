import { Text } from "types";

export const etHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { etIpaRules } = await import("constants/et-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(etIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
