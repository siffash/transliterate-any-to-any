import { Text } from "types";

export const trRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { trLatnRules } = await import("constants/tr-latn.rules");
  const { latnRoRules } = await import("constants/latn-ro.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnRoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
