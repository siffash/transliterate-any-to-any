import { Text } from "types";

export const kkUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kkIpaRules } = await import("constants/kk-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(kkIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
