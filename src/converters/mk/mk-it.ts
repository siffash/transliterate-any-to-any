import { Text } from "types";

export const mkIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mkLatnRules } = await import("constants/mk-latn.rules");
  const { latnItRules } = await import("constants/latn-it.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
