import { Text } from "types";

export const isHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { isLatnRules } = await import("data/is-latn.rules");
  const { latnHyRules } = await import("data/latn-hy.rules");

  const transliterator = RBT.fromRules(isLatnRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
