import { Text } from "types";

export const noTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { noLatnRules } = await import("data/no-latn.rules");
  const { latnTrRules } = await import("data/latn-tr.rules");

  const transliterator = RBT.fromRules(noLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
