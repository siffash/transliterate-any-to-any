import { Text } from "types";

export const svFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { svIpaRules } = await import("constants/sv-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(svIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
