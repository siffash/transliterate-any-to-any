import { Text } from "types";

export const hyEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hyEnRules } = await import("data/hy-en.rules");

  const transliterator = RBT.fromRules(hyEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
