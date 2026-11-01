import { Text } from "types";

export const ptHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptIpaRules } = await import("data/pt/pt-ipa.rules");
  const { ptIpaHeRules } = await import("data/pt/pt-ipa_he.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(ptIpaRules + ptIpaHeRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
