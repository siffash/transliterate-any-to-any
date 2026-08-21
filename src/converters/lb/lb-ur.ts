import { Text } from "types";

export const lbUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbIpaRules } = await import("data/lb/lb-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(lbIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
