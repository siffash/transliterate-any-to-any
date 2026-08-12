import { Text } from "types";

export const svSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { svLatnRules } = await import("constants/sv-latn.rules");
  const { latnSkRules } = await import("constants/latn-sk.rules");

  const transliterator = RBT.fromRules(svLatnRules + latnSkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
