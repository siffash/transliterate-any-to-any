import { Text } from "types";

export const hyEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyEnRules } = await import("data/hy/hy-en.rules");

  const transliterator = RBT.fromRules(hyEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
