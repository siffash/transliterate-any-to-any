import { Text } from "types";

export const daPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { daLatnRules } = await import("constants/da-latn.rules");
  const { latnPlRules } = await import("constants/latn-pl.rules");

  const transliterator = RBT.fromRules(daLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
