import { Text } from "types";

export const mkHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mkIpaRules } = await import("data/mk/mk-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(mkIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
