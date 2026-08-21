import { Text } from "types";

export const kaLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
