import { Text } from "types";

export const etJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { etIpaRules } = await import("constants/et-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(etIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
