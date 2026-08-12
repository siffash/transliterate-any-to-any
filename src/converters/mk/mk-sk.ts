import { Text } from "types";

export const mkSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mkLatnRules } = await import("data/mk-latn.rules");
  const { latnSkRules } = await import("data/latn-sk.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnSkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
