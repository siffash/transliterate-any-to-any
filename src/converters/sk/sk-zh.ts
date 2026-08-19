import { Text } from "types";

export const skZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { skIpaRules } = await import("data/sk/sk-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(skIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
