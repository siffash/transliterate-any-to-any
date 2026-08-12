import { Text } from "types";

export const bnVi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnLatnRules } = await import("constants/bn-latn.rules");
  const { latnViRules } = await import("constants/latn-vi.rules");

  const transliterator = RBT.fromRules(bnLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
