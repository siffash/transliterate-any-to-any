import { Text } from "types";

export const kaHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kaIpaRules } = await import("constants/ka-ipa.rules");
  const { ipaHyRules } = await import("constants/ipa-hy.rules");

  const transliterator = RBT.fromRules(kaIpaRules + ipaHyRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
