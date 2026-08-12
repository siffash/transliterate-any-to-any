import { Text } from "types";

export const ruUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ruIpaRules } = await import("constants/ru-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(ruIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
