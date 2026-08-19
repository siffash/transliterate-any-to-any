import { Text } from "types";

export const sqNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnNoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
