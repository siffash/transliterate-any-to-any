import { Text } from "types";

export const etBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { etIpaRules } = await import("constants/et-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(etIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
