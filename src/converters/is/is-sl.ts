import { Text } from "types";

export const isSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");

  const transliterator = RBT.fromRules(isLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
