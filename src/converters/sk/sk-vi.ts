import { Text } from "types";

export const skVi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { skLatnRules } = await import("data/sk-latn.rules");
  const { latnViRules } = await import("data/latn-vi.rules");

  const transliterator = RBT.fromRules(skLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
