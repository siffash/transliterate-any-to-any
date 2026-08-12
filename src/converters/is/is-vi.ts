import { Text } from "types";

export const isVi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { isLatnRules } = await import("constants/is-latn.rules");
  const { latnViRules } = await import("constants/latn-vi.rules");

  const transliterator = RBT.fromRules(isLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
