import { Text } from "types";

export const caHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { caIpaRules } = await import("data/ca/ca-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(caIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
