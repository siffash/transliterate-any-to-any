import { Text } from "types";

export const huIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { huLatnRules } = await import("constants/hu-latn.rules");
  const { latnItRules } = await import("constants/latn-it.rules");

  const transliterator = RBT.fromRules(huLatnRules + latnItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
