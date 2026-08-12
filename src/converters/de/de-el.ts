import { Text } from "types";

export const deEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { deLatnRules } = await import("constants/de-latn.rules");
  const { latnElRules } = await import("constants/latn-el.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnElRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
