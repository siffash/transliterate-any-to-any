import { Text } from "types";

export const daHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { daLatnRules } = await import("constants/da-latn.rules");
  const { latnHyRules } = await import("constants/latn-hy.rules");

  const transliterator = RBT.fromRules(daLatnRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
