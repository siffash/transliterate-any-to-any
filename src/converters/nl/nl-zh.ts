import { Text } from "types";

export const nlZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { nlIpaRules } = await import("constants/nl-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(nlIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
