import { Text } from "types";

export const bsRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bsLatnRules } = await import("data/bs-latn.rules");
  const { latnRoRules } = await import("data/latn-ro.rules");

  const transliterator = RBT.fromRules(bsLatnRules + latnRoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
