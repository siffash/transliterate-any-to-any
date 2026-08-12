import { Text } from "types";

export const isAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { isIpaRules } = await import("constants/is-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(isIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
