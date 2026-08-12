import { Text } from "types";

export const ruAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ruIpaRules } = await import("constants/ru-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(ruIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
