import { Text } from "types";

export const caRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnRoKRules } = await import("data/latn/latn-ro_k.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnRoRules + latnRoKRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
