import { Text } from "types";

export const nlLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
