import { Text } from "types";

export const hyBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hyIpaRules } = await import("constants/hy-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(hyIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
