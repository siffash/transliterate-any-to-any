import { Text } from "types";

export const bgBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgIpaRules } = await import("data/bg-ipa.rules");
  const { ipaBnRules } = await import("data/ipa-bn.rules");

  const transliterator = RBT.fromRules(bgIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
