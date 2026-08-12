import { Text } from "types";

export const srHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { srLatnRules } = await import("constants/sr-latn.rules");
  const { latnHyRules } = await import("constants/latn-hy.rules");

  const transliterator = RBT.fromRules(srLatnRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
