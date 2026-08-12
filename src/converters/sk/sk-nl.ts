import { Text } from "types";

export const skNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { skLatnRules } = await import("constants/sk-latn.rules");
  const { latnNlRules } = await import("constants/latn-nl.rules");

  const transliterator = RBT.fromRules(skLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
