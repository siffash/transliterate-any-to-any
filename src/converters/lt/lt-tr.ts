import { Text } from "types";

export const ltTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  const transliterator = RBT.fromRules(ltLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
