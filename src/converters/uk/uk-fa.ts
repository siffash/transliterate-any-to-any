import { Text } from "types";

export const ukFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ukIpaRules } = await import("constants/uk-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(ukIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
