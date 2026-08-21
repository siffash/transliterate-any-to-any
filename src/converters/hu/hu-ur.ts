import { Text } from "types";

export const huUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { huIpaRules } = await import("data/hu/hu-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(huIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
