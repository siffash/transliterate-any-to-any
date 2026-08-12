import { Text } from "types";

export const srRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { srLatnRules } = await import("constants/sr-latn.rules");
  const { latnRoRules } = await import("constants/latn-ro.rules");

  const transliterator = RBT.fromRules(srLatnRules + latnRoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
