import { Text } from "types";

export const svBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { svLatnRules } = await import("constants/sv-latn.rules");
  const { latnBsRules } = await import("constants/latn-bs.rules");

  const transliterator = RBT.fromRules(svLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
