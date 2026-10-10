import { Text } from "types";

export const kaTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnTgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
