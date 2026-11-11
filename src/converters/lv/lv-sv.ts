import { Text } from "types";

export const lvSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");
  const { latnXHRules } = await import("data/latn/latn_x-h.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnXHRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
