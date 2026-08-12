import { Text } from "types";

export const etSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { etLatnRules } = await import("data/et-latn.rules");
  const { latnSlRules } = await import("data/latn-sl.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
