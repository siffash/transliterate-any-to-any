import { Text } from "types";

export const huAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { huLatnRules } = await import("data/hu-latn.rules");
  const { latnAzRules } = await import("data/latn-az.rules");

  const transliterator = RBT.fromRules(huLatnRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
