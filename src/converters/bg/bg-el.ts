import { Text } from "types";

export const bgEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgLatnRules } = await import("constants/bg-latn.rules");
  const { latnElRules } = await import("constants/latn-el.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnElRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
