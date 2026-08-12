import { Text } from "types";

export const etAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { etIpaRules } = await import("constants/et-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(etIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
