import { Text } from "types";

export const kaHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kaIpaRules } = await import("data/ka-ipa.rules");
  const { ipaHyRules } = await import("data/ipa-hy.rules");

  const transliterator = RBT.fromRules(kaIpaRules + ipaHyRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
