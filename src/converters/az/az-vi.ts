import { Text } from "types";

export const azVi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { azLatnRules } = await import("constants/az-latn.rules");
  const { latnViRules } = await import("constants/latn-vi.rules");

  const transliterator = RBT.fromRules(azLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
