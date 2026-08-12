import { Text } from "types";

export const ptJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ptIpaRules } = await import("data/pt-ipa.rules");
  const { ipaJaRules } = await import("data/ipa-ja.rules");

  const transliterator = RBT.fromRules(ptIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
