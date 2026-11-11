import { Text } from "types";

export const mkIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mkItRules } = await import("data/mk/mk_it.rules");
  const { mkEnRules } = await import("data/mk/mk-en.rules");

  const transliterator = RBT.fromRules(mkItRules + mkEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
