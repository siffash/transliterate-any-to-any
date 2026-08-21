import { Text } from "types";

export const kaZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kaIpaRules } = await import("data/ka/ka-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(kaIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
