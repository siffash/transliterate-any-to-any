import { Text } from "types";

export const fiMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");
  const { latnMkVvRules } = await import("data/latn/latn-mk_vv.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnMkRules + latnMkVvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
