import { Text } from "types";

export const mkNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mkLatnRules } = await import("data/mk-latn.rules");
  const { latnNlRules } = await import("data/latn-nl.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
