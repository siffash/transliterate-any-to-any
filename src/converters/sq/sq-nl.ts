import { Text } from "types";

export const sqNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { sqLatnRules } = await import("constants/sq-latn.rules");
  const { latnNlRules } = await import("constants/latn-nl.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
