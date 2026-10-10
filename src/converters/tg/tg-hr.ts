import { Text } from "types";

export const tgHr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { tgLatnRules } = await import("data/tg/tg-latn.rules");
  const { latnHrRules } = await import("data/latn/latn-hr.rules");

  const transliterator = RBT.fromRules(tgLatnRules + latnHrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
