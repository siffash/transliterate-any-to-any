import { Text } from "types";

export const lvTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lvIpaRules } = await import("data/lv/lv-ipa.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(lvIpaRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
