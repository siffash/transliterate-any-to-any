import { Text } from "types";

export const roVi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { roLatnRules } = await import("data/ro-latn.rules");
  const { latnViRules } = await import("data/latn-vi.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
