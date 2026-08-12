import { Text } from "types";

export const ukAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ukIpaRules } = await import("constants/uk-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(ukIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
