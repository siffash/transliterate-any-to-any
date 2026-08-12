import { Text } from "types";

export const plFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { plIpaRules } = await import("constants/pl-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(plIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
