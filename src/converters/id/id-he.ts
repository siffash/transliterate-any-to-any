import { Text } from "types";

export const idHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { idIpaRules } = await import("data/id/id-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(idIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
