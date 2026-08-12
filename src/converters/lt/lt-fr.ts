import { Text } from "types";

export const ltFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ltLatnRules } = await import("constants/lt-latn.rules");
  const { latnFrRules } = await import("constants/latn-fr.rules");

  const transliterator = RBT.fromRules(ltLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
