import { Text } from "types";

export const caTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
