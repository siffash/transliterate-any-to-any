import { Text } from "types";

export const idRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { idLatnRules } = await import("constants/id-latn.rules");
  const { latnRoRules } = await import("constants/latn-ro.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnRoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
