import { Text } from "types";

export const esZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esIpaRules } = await import("constants/es-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(esIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
