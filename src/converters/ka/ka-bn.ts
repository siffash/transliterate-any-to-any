import { Text } from "types";

export const kaBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kaIpaRules } = await import("data/ka/ka-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  const transliterator = RBT.fromRules(kaIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
