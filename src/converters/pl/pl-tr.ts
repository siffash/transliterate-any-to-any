import { Text } from "types";

export const plTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  const transliterator = RBT.fromRules(plLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
