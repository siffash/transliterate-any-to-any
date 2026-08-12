import { Text } from "types";

export const ltRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ltLatnRules } = await import("data/lt-latn.rules");
  const { latnRoRules } = await import("data/latn-ro.rules");

  const transliterator = RBT.fromRules(ltLatnRules + latnRoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
