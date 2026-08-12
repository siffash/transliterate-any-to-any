import { Text } from "types";

export const daVi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { daLatnRules } = await import("constants/da-latn.rules");
  const { latnViRules } = await import("constants/latn-vi.rules");

  const transliterator = RBT.fromRules(daLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
