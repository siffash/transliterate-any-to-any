import { Text } from "types";

export const itZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { itIpaZhRules } = await import("data/it/it-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(itIpaRules + itIpaZhRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
