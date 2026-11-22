import { Text } from "types";

export const mkSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");
  const { latnSqErRules } = await import("data/latn/latn-sq_er.rules");
  const { mkLatnSqRules } = await import("data/mk/mk-latn_sq.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnSqErRules + mkLatnSqRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
