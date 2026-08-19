import { Text } from "types";

export const hiVi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiLatnRules } = await import("data/hi/hi-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  const transliterator = RBT.fromRules(hiLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
