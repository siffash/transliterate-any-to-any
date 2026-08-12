import { Text } from "types";

export const lbVi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lbLatnRules } = await import("constants/lb-latn.rules");
  const { latnViRules } = await import("constants/latn-vi.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
