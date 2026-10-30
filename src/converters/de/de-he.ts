import { Text } from "types";

export const deHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { deIpaRules } = await import("data/de/de-ipa.rules");
  const { deIpaHeRules } = await import("data/de/de-ipa_he.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(deIpaRules + deIpaHeRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
