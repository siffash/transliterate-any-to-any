import { Text } from "types";

export const ltMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ltLatnRules } = await import("constants/lt-latn.rules");
  const { latnMkRules } = await import("constants/latn-mk.rules");

  const transliterator = RBT.fromRules(ltLatnRules + latnMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
