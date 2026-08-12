import { Text } from "types";

export const ltPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ltLatnRules } = await import("constants/lt-latn.rules");
  const { latnPlRules } = await import("constants/latn-pl.rules");

  const transliterator = RBT.fromRules(ltLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
