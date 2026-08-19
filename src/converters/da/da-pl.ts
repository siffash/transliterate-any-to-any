import { Text } from "types";

export const daPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");

  const transliterator = RBT.fromRules(daLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
