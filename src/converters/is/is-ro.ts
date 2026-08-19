import { Text } from "types";

export const isRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");

  const transliterator = RBT.fromRules(isLatnRules + latnRoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
