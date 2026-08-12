import { Text } from "types";

export const mkUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mkUkRules } = await import("data/mk-uk.rules");

  const transliterator = RBT.fromRules(mkUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
