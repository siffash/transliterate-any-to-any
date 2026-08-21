import { Text } from "types";

export const esZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(esIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
