import { Text } from "types";

export const caBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { caIpaRules } = await import("data/ca/ca-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  const transliterator = RBT.fromRules(caIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
