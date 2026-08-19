import { Text } from "types";

export const huCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");

  const transliterator = RBT.fromRules(huLatnRules + latnCaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
