import { Text } from "types";

export const roAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { roIpaRules } = await import("constants/ro-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(roIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
