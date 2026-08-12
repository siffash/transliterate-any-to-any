import { Text } from "types";

export const svCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { svLatnRules } = await import("constants/sv-latn.rules");
  const { latnCsRules } = await import("constants/latn-cs.rules");

  const transliterator = RBT.fromRules(svLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
