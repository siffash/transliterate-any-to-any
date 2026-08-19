import { Text } from "types";

export const isVi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  const transliterator = RBT.fromRules(isLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
