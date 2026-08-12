import { Text } from "types";

export const daKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { daLatnRules } = await import("data/da-latn.rules");
  const { latnKkRules } = await import("data/latn-kk.rules");

  const transliterator = RBT.fromRules(daLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
