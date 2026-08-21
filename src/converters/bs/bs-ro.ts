import { Text } from "types";

export const bsRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");

  const transliterator = RBT.fromRules(bsLatnRules + latnRoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
