import { Text } from "types";

export const mtCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mtLatnRules } = await import("constants/mt-latn.rules");
  const { latnCsRules } = await import("constants/latn-cs.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
