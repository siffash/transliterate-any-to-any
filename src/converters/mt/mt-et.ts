import { Text } from "types";

export const mtEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mtLatnRules } = await import("data/mt-latn.rules");
  const { latnEtRules } = await import("data/latn-et.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnEtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
