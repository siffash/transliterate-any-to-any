import { Text } from "types";

export const slZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { slIpaRules } = await import("data/sl-ipa.rules");
  const { ipaZhRules } = await import("data/ipa-zh.rules");

  const transliterator = RBT.fromRules(slIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
