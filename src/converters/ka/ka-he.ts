import { Text } from "types";

export const kaHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kaIpaRules } = await import("data/ka/ka-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(kaIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
