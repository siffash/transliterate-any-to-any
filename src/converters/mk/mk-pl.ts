import { Text } from "types";

export const mkPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mkLatnRules } = await import("constants/mk-latn.rules");
  const { latnPlRules } = await import("constants/latn-pl.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
