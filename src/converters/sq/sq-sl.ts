import { Text } from "types";

export const sqSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
