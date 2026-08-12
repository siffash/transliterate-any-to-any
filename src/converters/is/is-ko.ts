import { Text } from "types";

export const isKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { isIpaRules } = await import("data/is-ipa.rules");
  const { ipaKoRules } = await import("data/ipa-ko.rules");

  const transliterator = RBT.fromRules(isIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
