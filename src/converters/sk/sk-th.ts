import { Text } from "types";

export const skTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { skIpaRules } = await import("data/sk/sk-ipa.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(skIpaRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
