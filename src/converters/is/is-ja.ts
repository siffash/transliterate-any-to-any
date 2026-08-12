import { Text } from "types";

export const isJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { isIpaRules } = await import("constants/is-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(isIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
