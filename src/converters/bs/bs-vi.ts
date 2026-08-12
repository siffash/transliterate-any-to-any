import { Text } from "types";

export const bsVi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bsLatnRules } = await import("data/bs-latn.rules");
  const { latnViRules } = await import("data/latn-vi.rules");

  const transliterator = RBT.fromRules(bsLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
