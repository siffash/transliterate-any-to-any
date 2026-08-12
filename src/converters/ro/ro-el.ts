import { Text } from "types";

export const roEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { roLatnRules } = await import("constants/ro-latn.rules");
  const { latnElRules } = await import("constants/latn-el.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnElRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
