import { Text } from "types";

export const hyLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
