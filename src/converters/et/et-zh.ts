import { Text } from "types";

export const etZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etIpaRules } = await import("data/et/et-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(etIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
