import { Text } from "types";

export const sqRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnRoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
