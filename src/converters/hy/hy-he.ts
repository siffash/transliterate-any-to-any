import { Text } from "types";

export const hyHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hyIpaRules } = await import("data/hy/hy-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(hyIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
