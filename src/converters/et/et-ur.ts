import { Text } from "types";

export const etUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { etIpaRules } = await import("constants/et-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(etIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
