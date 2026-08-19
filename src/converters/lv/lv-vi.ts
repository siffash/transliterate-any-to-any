import { Text } from "types";

export const lvVi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
