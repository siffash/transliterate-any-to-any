import { Text } from "types";

export const ruUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruIpaRules } = await import("data/ru/ru-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(ruIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
