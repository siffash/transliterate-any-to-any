import { Text } from "types";

export const tgKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnKkRules } = await import("data/latn/latn-kk.rules");
  const { tgLatnKkRules } = await import("data/tg/tg-latn_kk.rules");

  const transliterator = RBT.fromRules(tgLatnRules + latnKkRules + tgLatnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
