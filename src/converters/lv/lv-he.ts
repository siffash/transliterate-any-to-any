import { Text } from "types";

export const lvHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lvIpaRules } = await import("data/lv/lv-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(lvIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
