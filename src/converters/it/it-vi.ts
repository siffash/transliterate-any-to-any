import { Text } from "types";

export const itVi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { itLatnRules } = await import("data/it-latn.rules");
  const { latnViRules } = await import("data/latn-vi.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
