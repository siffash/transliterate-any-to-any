import { Text } from "types";

export const itBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  const transliterator = RBT.fromRules(itIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
