import { Text } from "types";

export const itHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(itIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
