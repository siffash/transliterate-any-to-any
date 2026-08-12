import { Text } from "types";

export const mtSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mtLatnRules } = await import("data/mt-latn.rules");
  const { latnSlRules } = await import("data/latn-sl.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
