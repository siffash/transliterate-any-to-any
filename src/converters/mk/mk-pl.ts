import { Text } from "types";

export const mkPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");
  const { latnPlLRules } = await import("data/latn/latn-pl_l.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnPlLRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
