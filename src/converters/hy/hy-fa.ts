import { Text } from "types";

export const hyFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hyIpaRules } = await import("constants/hy-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(hyIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
