import { Text } from "types";

export const ukHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukIpaRules } = await import("data/uk/uk-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(ukIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
