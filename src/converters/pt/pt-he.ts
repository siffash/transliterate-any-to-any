import { Text } from "types";

export const ptHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ptIpaRules } = await import("data/pt-ipa.rules");
  const { ipaHeRules } = await import("data/ipa-he.rules");

  const transliterator = RBT.fromRules(ptIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
