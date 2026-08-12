import { Text } from "types";

export const plVi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { plLatnRules } = await import("data/pl-latn.rules");
  const { latnViRules } = await import("data/latn-vi.rules");

  const transliterator = RBT.fromRules(plLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
