import { Text } from "types";

export const noVi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  const transliterator = RBT.fromRules(noLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
