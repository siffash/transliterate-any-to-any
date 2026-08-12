import { Text } from "types";

export const mkBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mkBgRules } = await import("data/mk-bg.rules");

  const transliterator = RBT.fromRules(mkBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
