import { Text } from "types";

export const ltSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ltLatnRules } = await import("constants/lt-latn.rules");
  const { latnSlRules } = await import("constants/latn-sl.rules");

  const transliterator = RBT.fromRules(ltLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
