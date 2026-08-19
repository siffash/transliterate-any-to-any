import { Text } from "types";

export const ruFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ruIpaRules } = await import("data/ru/ru-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(ruIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
