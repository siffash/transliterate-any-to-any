import { Text } from "types";

export const hyBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyIpaRules } = await import("data/hy/hy-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  const transliterator = RBT.fromRules(hyIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
