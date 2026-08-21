import { Text } from "types";

export const isSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  const transliterator = RBT.fromRules(isLatnRules + latnSkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
