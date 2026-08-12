import { Text } from "types";

export const hrBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hrIpaRules } = await import("constants/hr-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(hrIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
