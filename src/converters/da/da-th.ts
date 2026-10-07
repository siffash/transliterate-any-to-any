import { Text } from "types";

export const daTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { daIpaRules } = await import("data/da/da-ipa.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(daIpaRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
