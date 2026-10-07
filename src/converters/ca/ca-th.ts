import { Text } from "types";

export const caTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { caIpaRules } = await import("data/ca/ca-ipa.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(caIpaRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
