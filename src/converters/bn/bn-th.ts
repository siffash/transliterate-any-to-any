import { Text } from "types";

export const bnTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
