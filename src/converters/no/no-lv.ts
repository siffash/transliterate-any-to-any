import { Text } from "types";

export const noLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");

  const transliterator = RBT.fromRules(noLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
