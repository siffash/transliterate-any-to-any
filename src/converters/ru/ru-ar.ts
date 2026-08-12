import { Text } from "types";

export const ruAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ruIpaRules } = await import("data/ru-ipa.rules");
  const { ipaArRules } = await import("data/ipa-ar.rules");

  const transliterator = RBT.fromRules(ruIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
