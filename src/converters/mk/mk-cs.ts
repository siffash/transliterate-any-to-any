import { Text } from "types";

export const mkCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mkLatnRules } = await import("data/mk-latn.rules");
  const { latnCsRules } = await import("data/latn-cs.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
