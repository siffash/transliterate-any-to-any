import { Text } from "types";

export const azBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { azIpaRules } = await import("data/az/az-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  const transliterator = RBT.fromRules(azIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
