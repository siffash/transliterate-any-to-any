import { Text } from "types";

export const mtHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mtLatnRules } = await import("data/mt-latn.rules");
  const { latnHyRules } = await import("data/latn-hy.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
