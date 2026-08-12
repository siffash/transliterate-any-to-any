import { Text } from "types";

export const isUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { isIpaRules } = await import("constants/is-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(isIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
