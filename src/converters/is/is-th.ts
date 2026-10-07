import { Text } from "types";

export const isTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { isIpaRules } = await import("data/is/is-ipa.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(isIpaRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
