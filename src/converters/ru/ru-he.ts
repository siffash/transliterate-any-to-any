import { Text } from "types";

export const ruHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruIpaRules } = await import("data/ru/ru-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(ruIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
