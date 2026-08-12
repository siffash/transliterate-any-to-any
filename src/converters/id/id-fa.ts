import { Text } from "types";

export const idFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { idIpaRules } = await import("constants/id-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(idIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
