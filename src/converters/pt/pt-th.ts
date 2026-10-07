import { Text } from "types";

export const ptTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptIpaRules } = await import("data/pt/pt-ipa.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(ptIpaRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
