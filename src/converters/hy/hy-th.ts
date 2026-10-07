import { Text } from "types";

export const hyTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyIpaRules } = await import("data/hy/hy-ipa.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(hyIpaRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
