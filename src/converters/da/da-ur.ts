import { Text } from "types";

export const daUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { daIpaRules } = await import("constants/da-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(daIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
