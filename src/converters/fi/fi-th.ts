import { Text } from "types";

export const fiTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { fiIpaRules } = await import("data/fi/fi-ipa.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(fiIpaRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
