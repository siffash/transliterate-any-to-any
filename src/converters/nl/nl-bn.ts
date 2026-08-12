import { Text } from "types";

export const nlBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { nlIpaRules } = await import("constants/nl-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(nlIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
