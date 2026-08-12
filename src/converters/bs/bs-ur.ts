import { Text } from "types";

export const bsUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bsIpaRules } = await import("constants/bs-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(bsIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
