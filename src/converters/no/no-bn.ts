import { Text } from "types";

export const noBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { noIpaRules } = await import("constants/no-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(noIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
