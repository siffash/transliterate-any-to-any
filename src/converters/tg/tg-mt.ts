import { Text } from "types";

export const tgMt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  const transliterator = RBT.fromRules(tgLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
