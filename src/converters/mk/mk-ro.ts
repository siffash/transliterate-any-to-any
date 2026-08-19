import { Text } from "types";

export const mkRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnRoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
