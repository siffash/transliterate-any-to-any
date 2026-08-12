import { Text } from "types";

export const fiMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { fiLatnRules } = await import("constants/fi-latn.rules");
  const { latnMkRules } = await import("constants/latn-mk.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
