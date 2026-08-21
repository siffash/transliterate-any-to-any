import { Text } from "types";

export const roBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { roIpaRules } = await import("data/ro/ro-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  const transliterator = RBT.fromRules(roIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
