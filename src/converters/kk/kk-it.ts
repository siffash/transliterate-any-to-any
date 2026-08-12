import { Text } from "types";

export const kkIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kkLatnRules } = await import("constants/kk-latn.rules");
  const { latnItRules } = await import("constants/latn-it.rules");

  const transliterator = RBT.fromRules(kkLatnRules + latnItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
