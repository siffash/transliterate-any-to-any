import { Text } from "types";

export const kaNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
