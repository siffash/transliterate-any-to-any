import { Text } from "types";

export const mtPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mtLatnRules } = await import("constants/mt-latn.rules");
  const { latnPlRules } = await import("constants/latn-pl.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
