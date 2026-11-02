import { Text } from "types";

export const ruHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruIpaRules } = await import("data/ru/ru-ipa.rules");
  const { ipaHeVbRules } = await import("data/ipa/ipa-he_vb.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(ruIpaRules + ipaHeVbRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
