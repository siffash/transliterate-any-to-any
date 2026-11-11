import { Text } from "types";

export const mkLb = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mkKjRules } = await import("data/mk/mk_kj.rules");
  const { mkEnRules } = await import("data/mk/mk-en.rules");

  const transliterator = RBT.fromRules(mkKjRules + mkEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
