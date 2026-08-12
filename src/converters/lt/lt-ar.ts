import { Text } from "types";

export const ltAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ltIpaRules } = await import("constants/lt-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(ltIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
