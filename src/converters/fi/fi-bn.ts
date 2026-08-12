import { Text } from "types";

export const fiBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { fiIpaRules } = await import("constants/fi-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(fiIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
