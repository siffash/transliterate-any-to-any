import { Text } from "types";

export const csUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { csIpaRules } = await import("constants/cs-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(csIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
