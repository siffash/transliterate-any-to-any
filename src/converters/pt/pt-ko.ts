import { Text } from "types";

export const ptKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ptIpaRules } = await import("constants/pt-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(ptIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
