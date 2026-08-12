import { Text } from "types";

export const esBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esIpaRules } = await import("data/es-ipa.rules");
  const { ipaBnRules } = await import("data/ipa-bn.rules");

  const transliterator = RBT.fromRules(esIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
