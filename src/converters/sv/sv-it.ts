import { Text } from "types";

export const svIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { svLatnRules } = await import("constants/sv-latn.rules");
  const { latnItRules } = await import("constants/latn-it.rules");

  const transliterator = RBT.fromRules(svLatnRules + latnItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
