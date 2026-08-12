import { Text } from "types";

export const mkSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mkLatnRules } = await import("data/mk-latn.rules");
  const { latnSvRules } = await import("data/latn-sv.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
