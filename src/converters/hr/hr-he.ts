import { Text } from "types";

export const hrHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hrIpaRules } = await import("data/hr/hr-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(hrIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
