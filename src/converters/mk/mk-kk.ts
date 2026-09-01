import { Text } from "types";

export const mkKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mkKkRules } = await import("data/mk/mk-kk.rules");

  const transliterator = RBT.fromRules(mkKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
