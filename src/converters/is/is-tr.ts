import { Text } from "types";

export const isTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { isLatnRules } = await import("data/is-latn.rules");
  const { latnTrRules } = await import("data/latn-tr.rules");

  const transliterator = RBT.fromRules(isLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
