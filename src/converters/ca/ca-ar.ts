import { Text } from "types";

export const caAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { caIpaRules } = await import("constants/ca-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(caIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
