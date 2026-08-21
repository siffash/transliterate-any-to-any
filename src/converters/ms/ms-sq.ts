import { Text } from "types";

export const msSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { msLatnRules } = await import("data/ms/ms-latn.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
