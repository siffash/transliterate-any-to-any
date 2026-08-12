import { Text } from "types";

export const caNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { caLatnRules } = await import("constants/ca-latn.rules");
  const { latnNlRules } = await import("constants/latn-nl.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
