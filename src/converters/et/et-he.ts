import { Text } from "types";

export const etHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etIpaRules } = await import("data/et/et-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(etIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
