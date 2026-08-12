import { Text } from "types";

export const fiSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { fiLatnRules } = await import("constants/fi-latn.rules");
  const { latnSrRules } = await import("constants/latn-sr.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
