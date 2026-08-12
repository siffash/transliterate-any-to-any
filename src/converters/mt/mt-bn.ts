import { Text } from "types";

export const mtBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mtIpaRules } = await import("constants/mt-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(mtIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
