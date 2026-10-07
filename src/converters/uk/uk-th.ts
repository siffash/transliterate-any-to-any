import { Text } from "types";

export const ukTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukIpaRules } = await import("data/uk/uk-ipa.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(ukIpaRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
