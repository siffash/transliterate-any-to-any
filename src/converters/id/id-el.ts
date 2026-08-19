import { Text } from "types";

export const idEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { idLatnRules } = await import("data/id/id-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnElRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
