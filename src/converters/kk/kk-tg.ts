import { Text } from "types";

export const kkTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");
  const { kkLatnTgRules } = await import("data/kk/kk-latn_tg.rules");

  const transliterator = RBT.fromRules(kkLatnRules + kkLatnTgRules + latnTgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
