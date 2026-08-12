import { Text } from "types";

export const noFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { noIpaRules } = await import("constants/no-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(noIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
